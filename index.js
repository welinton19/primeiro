var setadireita=window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var setaesquerda =window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style= "display:flex; margin-top:55px"
    setadireita.style= "display:none"

}


function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaesquerda.style= "display:none; margin-top:55px"
    setadireita.style= "display:flex"

}
 