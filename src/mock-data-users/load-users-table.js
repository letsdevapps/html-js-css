const tbody = document.getElementById("tabelaUsuarios");

usuarios.forEach(usuario => {
    tbody.innerHTML += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.cidade}</td>
        </tr>
    `;
});
