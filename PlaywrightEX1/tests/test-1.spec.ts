import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.turbify.com/');
  await page.getByRole('link', { name: 'Web Hosting' }).click();
  await page.getByRole('link', { name: 'Turbify Web Hosting' }).locator('button').click();
  await page.getByText('www.yourdomain.com').click();
  await page.getByRole('link', { name: 'Domain', exact: true }).click();
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('rosik.in');
  await page.getByPlaceholder(' ').press('Enter');
  await page.goto('https://checkout.turbify.com/checkout/domain?pd=yd2a_t24m&_ga=');
  await page.locator('div').filter({ hasText: /^Your domain name is available!rosik\.in\$11\.91\*Renews at \$12\.99\/yearAdd to Cart$/ }).getByRole('button').click();
  await page.locator('#GlobalFooter').getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Cart with item count').click();
});