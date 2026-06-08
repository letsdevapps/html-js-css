# HTML JS CSS

Laboratorio especifico para Html, Js e Css, sem motor backend.

## Acesso via servidor HTTP local simples

Acesso via servidor HTTP local simples utiliza todos os beneficios http

### Python

Dentro da pasta do projeto:

    python -m http.server 8000
    
    http://localhost:8000/index.html

### Go

Criar arquivo server.go:

    package main

    import (
        "net/http"
    )

    func main() {
        http.ListenAndServe(":8000", http.FileServer(http.Dir(".")))
    }

Dentro da pasta do projeto:

    go run server.go

### NodeJS

Inicie a pasta do projeto (cria package.json local):

    npm init -y

Instale o pacote localmente:

    npm install http-server --save-dev

* --save-dev indica que é uma dependência de desenvolvimento (não precisa em produção)
* O pacote vai para ./node_modules/ da pasta do projeto
* Nada é instalado globalmente no sistema

Rodar o servidor sem instalar global:

    npx http-server -p 8000

#### Dowload Github

Lembre-se que projetos recem baixados precisam atualizar pelo package.json para criar /node_modules:

    npm install

#### Iniciar NodeJS e GO juntos

Editar o arquivo package.json e colocar as chamadas juntas, mas cuidado para nao configurar a mesma porta para os dois

    "scripts": {
        "start": "npx http-server -p 8000",
        "go": "go run server.go"
    }

## Acesso direto no browser

Acesso direto no browser perdemos os beneficios http, impossibilita o browser de utilizar recursos avançados Html, JS e CSS

    file:///caminho-completo/html-js-css/index.html
    
    file:///home/usuario/workspace/html-js-css/index.html

