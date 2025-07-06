const botao = document.querySelector(".botao");
const mensagemDiv = document.getElementById("mensagem");

botao.addEventListener("click",mensagem);

function mensagem() {
    mensagemDiv.textContent = "Obrigada por visitar minha página!";
    mensagemDiv.style.display = "block";
}