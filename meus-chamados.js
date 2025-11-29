
function filtrar() {

  let status = document.getElementById("Status").value.toLowerCase();
  let ti = document.getElementById("ti").value.toLowerCase();
  let numero = document.getElementById("numero").value.toLowerCase();
  let pessoa = document.getElementById("pessoa").value.toLowerCase();
  let linhas = document.querySelectorAll("#minhaTabela tbody tr");

  for (let contar = 0; contar < linhas.length; contar++) {

    let tr = linhas[contar];
    let colunaPessoa = tr.cells[3].textContent.toLowerCase();
    let colunaNumero = tr.cells[0].textContent.toLowerCase();
    let colunaStatus = tr.cells[2].textContent.toLowerCase();
    let colunaTi = tr.cells[4].textContent.toLowerCase();

    if (colunaStatus.includes(status) && colunaTi.includes(ti) && colunaNumero.includes(numero) && colunaPessoa.includes(pessoa)) {
      tr.style.display = "";
    } else {
      tr.style.display = "none";
    }
  }
}

if (document.getElementById("minhaTabela")) {
  let linha = document.querySelectorAll("#minhaTabela tbody tr");
  for (let a = 0; a < linha.length; a++) {

    let seleciona = linha[a];


    let botao = seleciona.querySelector(".editar");


    if (botao) {

      botao.addEventListener("click", function edit(e) {

        e.preventDefault();



        let numeros = seleciona.cells[0].textContent;
        let titulo = seleciona.cells[1].textContent;
        let status = seleciona.cells[2].textContent;
        let nome = seleciona.cells[3].textContent;
        let descricao = seleciona.cells[5].textContent;
        let categoria = seleciona.cells[6].textContent;
        



        localStorage.setItem("numero", numeros);
        localStorage.setItem("titulo", titulo);
        localStorage.setItem("status", status);
        localStorage.setItem("nome", nome);
        localStorage.setItem("categoria", categoria);
        localStorage.setItem("descricao", descricao);

        setTimeout(() => {
          window.location.href = "Editar.html";
        }, 100);


        

      

      });
    }


    window.addEventListener("DOMContentLoaded", function () {
  const confirmou = localStorage.getItem("confirmou_edicao");

  if (confirmou === "true") {

    const numero = localStorage.getItem("numero_editado");
    const titulo = localStorage.getItem("titulo_editado");
    const status = localStorage.getItem("status_editado");
    const nome = localStorage.getItem("nome_editado");
    const categoria = localStorage.getItem("categoria_editado");
    const descricao = localStorage.getItem("descricao_editado");


    const linhas = document.querySelectorAll("#minhaTabela tbody tr");
    linhas.forEach(linha => {
      const celulas = linha.querySelectorAll("td");
      if (celulas[0] && celulas[0].textContent === numero) {
        celulas[1].textContent = titulo;

       celulas[2].innerHTML = `<span class="status ${status.toLowerCase()}">${status}</span>`;
        celulas[3].textContent = nome;
        celulas[4].textContent = categoria;
        celulas[5].textContent = descricao;
        
      }
    });

    localStorage.removeItem("confirmou_edicao");
    localStorage.removeItem("numero_editado");
    localStorage.removeItem("titulo_editado");
    localStorage.removeItem("status_editado");
    localStorage.removeItem("nome_editado");
    localStorage.removeItem("categoria_editado");
    localStorage.removeItem("descricao_editado");
  }
});

  }


}


function lerContagem() {
  const abertos = Number(localStorage.getItem("ch_abertos") || 0);
  const fechados = Number(localStorage.getItem("ch_fechados") || 0);
  const pendentes = Number(localStorage.getItem("ch_pendentes") || 0);
  const total = Number(localStorage.getItem("ch_total") || 0);
  return { abertos, fechados, pendentes, total };
}

function alertaChamadosRecentes() {
  const { abertos, fechados, pendentes, total } = lerContagem();
  alert(`
Chamados Recentes:

Total: ${total}
Abertos: ${abertos}
Pendentes: ${pendentes}
  `);
}

function alertaChamadosNovos() {
  const { abertos, fechados, pendentes, total } = lerContagem();
  alert(`
Chamados Novos / Concluídos:

Total: ${total}
Fechados (concluídos): ${fechados}
  `);
}

document.addEventListener("DOMContentLoaded", () => {

    const tabela = document.querySelector("#minhaTabela tbody") || document.querySelector("#minhaTabela");

    function carregarChamados() {

        const lista = JSON.parse(localStorage.getItem("chamados")) || [];

        if (lista.length === 0) return;

        lista.forEach(ch => {

       
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${String(ch.id).padStart(3,'0')}</td>
                <td>${ch.titulo}</td>
                <td><span class="status aberto">Aberto</span></td>
                <td>${ch.nome}</td>
                <td>${ch.categoria}</td>
                <td id="descri">${ch.descricao}</td>
                <td><a class="editar" href="Editar.html">Editar</a></td>
            `;

            
            tabela.appendChild(tr);
        });
    }

    carregarChamados();
});







