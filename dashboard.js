function adicionarTarefa(){

let nome = document.getElementById("nova Tarefa").value

let tabela = document.getElementById("tabela")

let linha = tabela.insertRow()

let colunaTarefa = linha.insertCell(0)

colunaTarefa.innerHTML = nome

for(let i = 1; i <= 7; i++){

let coluna = linha.insertCell(i)

let checkbox = document.createElement("input")

checkbox.type = "checkbox"

checkbox.onchange = atualizarDashboard

coluna.appendChild(checkbox)

}

}

function atualizarDashboard(){

let tabela = document.getElementById("tabela")

let linhas = tabela.rows

let dashboard = document.getElementById("dashboard")

dashboard.innerHTML = ""

for(let i = 1; i < linhas.length; i++){

let linha = linhas[i]

let tarefa = linha.cells[0].innerText

let total = 0
let feitos = 0

for(let j = 1; j <= 7; j++){

let checkbox = linha.cells[j].querySelector("input")

total++

if(checkbox.checked){
feitos++
}

}

let porcentagem = Math.round((feitos/total)*100)

dashboard.innerHTML += tarefa + " → " + porcentagem + "%<br>"

}

}