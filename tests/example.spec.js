// @ts-check
import { test, expect } from '@playwright/test';

  

test('Login com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('graziteste@gmail.com');
  await page.screenshot({ path: 'screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('vingadores');
  await page.locator('#password').screenshot({ path: 'elementosenha.png' });
  await page.screenshot({ path: 'screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});
