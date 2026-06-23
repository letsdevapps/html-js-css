# Helpers

O arquivo principal aqui é `random.js` e seu teste direto é

	node random-test.js
	
ele imediatamente gera um log no console, e os testes elaborados com playwright usam a pagina auxiliar `random.html` e acionam via

	node random-pw-chromium.js

e

	node random-pw-firefox.js

## Playwright

Instalar o pacote playwright no seu projeto, adiciona o Playwright como uma dependência no seu arquivo package.json, mas não instala automaticamente os browsers que o Playwright usa para testes.

	npm install playwright
	
Fazer o download e instala os navegadores suportados pelo Playwright (Chromium, Firefox, WebKit) no seu ambiente local, que são necessários para rodar testes de navegador.
	
	npx playwright install
	
Dependencias auxiliares
	
	sudo npx playwright install-deps
