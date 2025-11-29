document.getElementById("entrar").addEventListener("click", function() {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === "gerente" && senha === "123") {
    localStorage.setItem("nivel", "gerente");
    localStorage.setItem("usuarioLogado", "Gerente");
    window.location.href = "relatorio_pag_gs.html";
  } 
  else if (usuario === "ti" && senha === "123") {
    localStorage.setItem("nivel", "ti");
    localStorage.setItem("usuarioLogado", "TI");
    window.location.href = "relatorio_pag_gs.html";
  } 
  else if (usuario === "carlos" && senha === "123") {
    localStorage.setItem("nivel", "usuario");
    localStorage.setItem("usuarioLogado", "Carlos");
    window.location.href = "relatorio_pag_gs.html";
  } 
  else {
    alert("Usuário ou senha incorretos!");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nivel = localStorage.getItem("nivel");

  if (nivel === "usuario") {
    const btnAlterar = document.getElementById("btnAlterar");
    const btnSalvar = document.getElementById("btnSalvar");
    const btnEditar = document.getElementById("btnEditar");

    if (btnAlterar) btnAlterar.style.display = "none";
    if (btnSalvar) btnSalvar.style.display = "none";
    if (btnEditar) btnEditar.style.display = "none";
  }

});
