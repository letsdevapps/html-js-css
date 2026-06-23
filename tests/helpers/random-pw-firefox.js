const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();

  // Caminho para o arquivo local index.html
  await page.goto(`file://${__dirname}/random.html`);

  // Pega o conteúdo do elemento #email
  const emailGerado = await page.$eval('#email', el => el.innerText);

  console.log('Email gerado:', emailGerado);

  // Validação
  const regex = /^teste_\d+@email\.com$/;
  if (regex.test(emailGerado)) {
    console.log('Teste passou!');
  } else {
    console.log('Teste falhou!');
  }

  await browser.close();
})();