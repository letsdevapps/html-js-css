# HTML JS CSS

Laboratorio especifico para Html, Js e Css, sem motor backend.

![GitHub release](https://img.shields.io/github/v/release/letsdevapps/html-js-css)
![GitHub last commit](https://img.shields.io/github/last-commit/letsdevapps/html-js-css)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/letsdevapps/html-js-css/build-ci.yml)

![Docker](https://img.shields.io/badge/Docker-enabled-blue)
![CI](https://img.shields.io/badge/CI-enabled-blue)
![CD](https://img.shields.io/badge/CD-enabled-blue)
![Status](https://img.shields.io/badge/status-active-success)

## Acesso via servidor HTTP local simples

Acesso via servidor HTTP local simples utiliza todos os beneficios http

### Docker

    docker build -t html-js-css .
    
    docker run --rm -it -p 80:80 html-js-css

    http://localhost

### Nginx

Instalação do Nginx no Ubuntu

    sudo apt-get install nginx -y

Desabilitar subir automatico toda vez

    sudo systemctl disable nginx

Iniciar manualmente

    sudo systemctl start nginx

Copiar seu repo para uma pasta que sera servida

    sudo cp ~/workspace/html-js-css -r /var/www/html-js-css

Copiar ou Criar arquivo de configuração para seu projeto, Extensão: opcional, só para organização. Nginx não exige .conf para funcionar.

    sudo cp nginx/html-js-css.conf /etc/nginx/sites-available/html-js-css

ou Criar

    sudo nano /etc/nginx/sites-available/html-js-css
    
    server {
        listen 80;
        server_name localhost;

        root /var/www/html-js-css;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }

Criar links simbolico no Nginx de Disponivel para Permitido. Link simbólico em sites-enabled: é isso que realmente “ativa” o site.

    sudo ln -s /etc/nginx/sites-available/html-js-css /etc/nginx/sites-enabled/
    
Conferir se sintaxe esta ok
    
    sudo nginx -t
    
Reiniciar Nginx
    
    sudo systemctl reload nginx

Lista projetos disponiveis

    ls -l /etc/nginx/sites-enabled/

### Busybox

O componente httpd do BusyBox é um servidor web extremamente simples e leve. Inclusive menor que o Nginx. Meu ubuntu ja veio com busybox-static (codigo compilado nativo, ele instala o executável e utiliza bibliotecas compartilhadas do sistema) instalado através do ubuntu-standard, entao nem precisei instalar nada.

Executa de qualquer local

    busybox httpd -f -p 8080 -h ~/caminho-do-projeto/html-js-css/

Ou entrar na pasta e depois executar

    cd ~/caminho-do-projeto/html-js-css/

    busybox httpd -f -p 8080 -h .

#### Busybox AUTO START (Opcional)

Criar um serviço systemd para iniciar automaticamente

    [Unit]
    Description=BusyBox HTTP Server

    [Service]
    ExecStart=/usr/bin/busybox httpd -f -p 8080 -h /var/www/meu-site
    Restart=always

    [Install]
    WantedBy=multi-user.target

Salve em /etc/systemd/system/busybox-httpd.service

Depois autorize

    sudo systemctl daemon-reload
    sudo systemctl enable --now busybox-httpd

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

