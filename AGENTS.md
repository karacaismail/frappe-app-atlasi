# Frappe App Atlası

- Static HTML with bundled daisyUI styles; keep the existing stack and semantic theme tokens.
- Minimum text size: 1rem. No emojis. Preserve approval selections and Markdown export.
- Segment and functional category are independent filters. AI membership is explicit; an infrastructure agent is not an AI agent.
- Research product status is separate from technical confidence and feature richness. Do not turn suitability classes A/B/C into maturity scores. Unknown evidence stays unknown.
- Preserve canonical repository records and searchable source aliases. Report imports do not count as code inspection.
- Custom filters support keyboard, pointer, focus return and visible focus. Preserve 320px reflow and coarse-pointer targets.
- Validate with `NODE_PATH=<bundled node_modules> node tests/atlas.cjs` and `NODE_PATH=<bundled node_modules> node tests/research.cjs`; browsers come from the installed Playwright cache. For another machine use PLAYWRIGHT_CHROMIUM_PATH, PLAYWRIGHT_FIREFOX_PATH, PLAYWRIGHT_WEBKIT_PATH.
- Git author and committer: karacaismail <35493655+karacaismail@users.noreply.github.com>. Preserve the personal author guard.

## Doğrulama

- `npm ci --ignore-scripts`, `npx playwright install chromium firefox webkit`, ardından atlası 127.0.0.1:8765 üzerinde sunup `npm test` çalıştırın.
- `.github/workflows/qa.yml` aynı davranış kontrollerini Ubuntu üzerinde çalıştırır ve ekran görüntülerini yükler.
- Ekran görüntüleri aday kanıttır; onaylı piksel baseline veya WCAG AAA sertifikası değildir.
