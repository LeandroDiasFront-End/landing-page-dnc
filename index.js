var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
    leonardo.style = "display:none";
    Bruna.style = "display:flex";
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}
