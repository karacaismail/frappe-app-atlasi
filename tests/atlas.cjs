const { chromium, firefox, webkit } = require('playwright');
const assert = require('node:assert/strict');
const browserOptions = require('./browser.cjs');
(async () => {
 for (const [name,type] of Object.entries({chromium,firefox,webkit})) {
  const browser=await type.launch(browserOptions(name)); const page=await browser.newPage({viewport:{width:320,height:568}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.ATLAS_URL || 'http://127.0.0.1:8765');
  await page.locator('#fSegment').waitFor({state:'attached',timeout:3000});
  await page.locator('#segmentPicker .picker-button').click(); await page.getByRole('option',{name:'Yapay Zeka (AI)',exact:true}).click();
  assert(await page.locator('#list a[data-id]').count()>20,'AI repos visible');
  await page.locator('#categoryPicker .picker-button').click();await page.getByRole('option',{name:'MCP sunucuları (13)',exact:true}).click();
  assert(await page.locator('#list a[data-id]').count()>=10,'MCP category');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'320 reflow');
  assert(await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight),'mobile detail reachable through page scroll');
  await page.screenshot({path:`/tmp/atlas-${name}-320.png`,fullPage:true});
  await page.locator('#list a[data-id]').first().click();assert.match(await page.locator('#dbody').innerText(),/Ürün: Olgun ürün/);
  await page.locator('#list input[data-sel]').first().check();
  await page.locator('#exportBtn').click();assert.match(await page.locator('#xText').inputValue(),/https:\/\/github.com\//);await page.locator('#xClose').click();
  await page.locator('#segmentPicker button').first().focus();await page.keyboard.press('Enter');await page.keyboard.press('ArrowDown');await page.keyboard.press('Escape');
  assert.equal(await page.locator('#segmentPicker [role=listbox]').isVisible(),false);
  for(const width of [360,375,390,568,768,1023,1024,1025,1440]){await page.setViewportSize({width,height:width===568?320:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width} reflow`);}
  assert.equal(await page.locator('#selCount').textContent(),'1 onaylı');
  await page.locator('details.more > summary').click();await page.locator('#reset').click(); await page.locator('#q').fill('The-Commit-Company/raven');assert.equal(await page.locator('#list a[data-id]').count(),1,'alias search');await page.locator('#q').fill('');
  assert.deepEqual(errors,[]);
  await page.screenshot({path:`/tmp/atlas-${name}.png`,fullPage:true});
  console.log(name+' PASS: AI/category filters, export, keyboard, responsive state');await browser.close();
 }
})().catch(e=>{console.error(e);process.exit(1)});
