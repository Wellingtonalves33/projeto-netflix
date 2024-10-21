let botaoSom = document.querySelector(".button-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

botaoSom.addEventListener("click",ligaSom)

function ligaSom(){
   video.muted = false
}

botao.addEventListener("click", mostraModal)
modal.addEventListener("click", esconderModal)

function mostraModal(){
 modal.style.display = "block"
}
function esconderModal(){
modal.style.display = "none"
}

