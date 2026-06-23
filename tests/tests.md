# Tests

## E2E

End-To-End. Contém os testes propriamente ditos (cenários de usuário). Aqui você descreve o comportamento esperado do sistema.

## Pages

Implementa o padrão Page Object Model (POM). A ideia é encapsular seletores e ações de uma página em uma classe. Vantagem: se o seletor mudar, você altera apenas um arquivo.

## Fixtures

Guarda dados usados pelos testes. Também pode armazenar:

* respostas simuladas de APIs
* massa de dados
* arquivos para upload
* imagens

	usuarios.json
	{
	  "admin": {
	    "email": "admin@email.com",
	    "senha": "123456"
	  }
	}

## Helpers

Funções utilitárias reutilizáveis. 

	random.js
	function gerarEmail() {
	  return `teste_${Date.now()}@email.com`;
	}
	module.exports = { gerarEmail };
	
	api.js
	async function limparBanco() {
	  await fetch('http://localhost:3000/reset');
	}
	module.exports = { limparBanco };

---

## Estrutura de Tests

tests/
│
├── e2e/        -> cenários de teste
├── pages/      -> objetos de página (Page Objects)
├── fixtures/   -> dados de teste
└── helpers/    -> funções utilitárias compartilhadas
