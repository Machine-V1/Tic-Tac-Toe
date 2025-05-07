const jogoDiv = document.getElementById("jogo-div")
const celulas = document.getElementsByClassName("celula")

Array.from(celulas).forEach((valor)=>{
    valor.addEventListener("click",(event)=>{
        clickCelula(event.target)
    })
})

function clickCelula(divClicada){
    
}