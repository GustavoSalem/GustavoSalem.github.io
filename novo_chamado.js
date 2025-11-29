document.addEventListener("DOMContentLoaded", function () {
    
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    
    const headerInfo = document.getElementById("HeaderInfo");
    if (headerInfo && usuarioLogado) {
        headerInfo.textContent = "Usuário logado: " + usuarioLogado;
    }

    
    const form = document.getElementById("form-chamado");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const categoria = document.getElementById("categoria").value;
        const assunto = document.getElementById("assunto").value;
        const area = document.getElementById("area").value;
        const descricao = document.getElementById("descrição").value;

        
        let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

        
        const numero = chamados.length + 1;

        
        const novoChamado = {
            numero: numero,
            titulo: assunto,
            status: "aberto",
            nome: usuarioLogado,
            categoria: categoria,
            descricao: descricao
        };

        
        chamados.push(novoChamado);
        localStorage.setItem("chamados", JSON.stringify(chamados));

        alert("Chamado cadastrado com sucesso!");

        window.location.href = "meus-chamados.html";
    });
});

