package main

import (
    "net/http"
)

func main() {
    // Serve arquivos da pasta atual
    fs := http.FileServer(http.Dir("."))
    http.Handle("/", fs)

    // Inicia o servidor
    println("Servidor rodando em http://localhost:8000")
    http.ListenAndServe(":8000", nil)
}

//func main() {
//    http.ListenAndServe(":8000", http.FileServer(http.Dir(".")))
//}
