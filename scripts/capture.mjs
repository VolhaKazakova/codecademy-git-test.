import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  timeout: 15000,
});

const page = await browser.newPage({ viewport: { width: 1672, height: 941 }, deviceScaleFactor: 1 });
const consoleErrors = [];
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});

await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle', timeout: 15000 });
await page.screenshot({ path: '/tmp/mlu-desktop.png' });

const pinCount = await page.locator('.pin').count();
await page.locator('.pin').first().click();
const pinSelected = await page.locator('.pin[aria-pressed="true"]').count() === 1;
await page.screenshot({ path: '/tmp/mlu-selected.png' });

await page.locator('.base-trigger').click();
const collectionVisible = await page.locator('[role="dialog"]').isVisible();
const collectionCount = await page.locator('.collection-card').count();
await page.waitForTimeout(450);
await page.screenshot({ path: '/tmp/mlu-collection.png' });

await page.locator('.collection-card').nth(1).click();
const collectionClosedAfterSelection = await page.locator('[role="dialog"]').count() === 0;
const selectionReturnedToOrb = await page.locator('.pin[aria-pressed="true"]').count() === 1;

await page.locator('.base-trigger').click();
await page.keyboard.press('Escape');
const escapeClosedCollection = await page.locator('[role="dialog"]').count() === 0;

await page.setViewportSize({ width: 390, height: 844 });
await page.reload({ waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/mlu-mobile.png' });
await page.locator('.base-trigger').click();
await page.waitForTimeout(450);
await page.screenshot({ path: '/tmp/mlu-mobile-collection.png' });

console.log(JSON.stringify({
  pinCount,
  pinSelected,
  collectionVisible,
  collectionCount,
  collectionClosedAfterSelection,
  selectionReturnedToOrb,
  escapeClosedCollection,
  consoleErrors,
}));

await browser.close();
