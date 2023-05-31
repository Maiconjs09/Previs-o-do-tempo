

const key = "9adbe3ea3a0ba5327a108425a7bbd738"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp-max").innerHTML = "Máxima: " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML = "Mínima: " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json())

    colocarNaTela(dados)

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}