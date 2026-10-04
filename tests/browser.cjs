const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const suffixes = {
  chromium: 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
  firefox: 'firefox/Nightly.app/Contents/MacOS/firefox',
  webkit: 'pw_run.sh',
};
module.exports = function browserOptions(name) {
  const override = process.env[`PLAYWRIGHT_${name.toUpperCase()}_PATH`];
  if (override) return { executablePath: override };
  const cache = path.join(os.homedir(), 'Library/Caches/ms-playwright');
  if (process.platform === 'darwin' && fs.existsSync(cache)) {
    const versions = fs.readdirSync(cache).filter(x => new RegExp(`^${name}-\\d+$`).test(x))
      .sort((a, b) => Number(b.split('-').at(-1)) - Number(a.split('-').at(-1)));
    if (versions.length) {
      const executablePath = path.join(cache, versions[0], suffixes[name]);
      if (fs.existsSync(executablePath)) return { executablePath };
    }
  }
  return {};
};
