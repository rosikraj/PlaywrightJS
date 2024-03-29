import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKXGp1JJaiFKYcUJi0jeA-QLvlxWKqXvQundYYfXkfkWSPwtunEBCCmnxk2uK2-HnwNLIc9mL1nBQ&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1878289930%3A1702355479822961&theme=glif');
  await page.getByRole('button', { name: 'Create account' }).click();
  await page.getByText('For my personal use').click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Rosik');
  await page.getByLabel('Last name (optional)').click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Rosikraj');
  await page.getByLabel('Last name (optional)').click();
  await page.getByLabel('Last name (optional)').fill('Karnati');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Month').selectOption('12');
  await page.getByLabel('Day').click();
  await page.getByLabel('Day').fill('30');
  await page.getByLabel('Year').click();
  await page.getByLabel('Year').fill('2001');
  await page.getByLabel('Gender', { exact: true }).selectOption('1');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('rosikrajk@gmail.com').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  
});