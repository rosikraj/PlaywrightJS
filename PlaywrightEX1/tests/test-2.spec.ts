import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=youtube&oq=youtube&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU2MDJqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'YouTube: Home YouTube https' }).click();
  await page.getByPlaceholder('Search').fill('playwr');
  await page.getByPlaceholder('Search').press('ArrowDown');
  await page.getByPlaceholder('Search').press('Enter');
  await page2.getByText('videos Now playing Play all').click();
  await page2.getByRole('button', { name: 'Skip', exact: true }).click();
});