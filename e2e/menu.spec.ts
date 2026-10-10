import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('el botón Menú abre el overlay con los 5 links', async ({ page }) => {
  await page.getByRole('button', { name: 'Menú' }).click();
  const nav = page.getByRole('dialog').getByRole('navigation', { name: 'Principal' });
  await expect(nav.getByRole('link')).toHaveCount(5);
  await expect(nav.getByRole('link').last()).toHaveAttribute('href', '/contacto');
});

test('ESC cierra el overlay y el foco vuelve al botón', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'Menú' });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('click en un servicio navega a su URL', async ({ page }) => {
  await page.getByRole('button', { name: 'Menú' }).click();
  const link = page.getByRole('dialog').getByRole('link').first();
  const href = await link.getAttribute('href');
  const [response] = await Promise.all([page.waitForResponse((r) => r.url().endsWith(href!)), link.click()]);
  expect(response.status()).toBe(200);
  await expect(page).toHaveURL(new RegExp(`${href}$`));
});
