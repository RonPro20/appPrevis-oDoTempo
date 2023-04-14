
const key = "ee1bc724f019d14bdaf2cc3b66357133"

function colocarDadosNaTela(dados){

    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C  Ambiente"
    document.querySelector(".temp-min").innerHTML = Math.floor(dados.main.temp_min) + " °C - Mínima"
    document.querySelector(".temp-max").innerHTML = Math.floor(dados.main.temp_max) + " °C - Máxima"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade Relativa do Ar: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

        buscarCidade(cidade)
}

