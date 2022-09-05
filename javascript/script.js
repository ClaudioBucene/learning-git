const botoes = document.getElementsByTagName("button")
const cores = ["#D94E33", "#2C5607","#ED9B33", "#8A9B8E", "#DDE5ED"]

for (let i=0; i < botoes.length; i++) {
    botoes[i].addEventListener("click",function() {
      document.body.style.background = cores[i]  
    })
}
