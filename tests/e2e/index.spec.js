import { test, expect } from '@playwright/test';

test('deve abrir o index.html', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');

    await expect(page).toHaveURL(/index\.html/);
});

test('deve abrir o localhost root', async ({ page }) => {
    await page.goto('http://localhost:8000');

    await expect(page).toHaveURL('http://localhost:8000/');
});

test('deve ter o titulo correto', async ({ page }) => {
    await page.goto('http://localhost:8000/');

    await expect(page).toHaveTitle('Template Local');
});

test('deve mostrar mensagem ao clicar no botão', async ({ page }) => {
    await page.goto('http://localhost:8000/');

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Funcionou!');
        await dialog.accept();
    });

    await page.click('#btnMensagem');
});

test('deve validar a mensagem console.log', async ({ page }) => {
    page.on('console', msg => {
        expect(msg.text()).toBe('Template carregado');
    });

    await page.goto('http://localhost:8000/');
});