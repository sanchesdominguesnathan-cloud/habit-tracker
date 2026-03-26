const checkboxes = document.querySelectorAll("input[type='checkbox']")

checkboxes.forEach((box,index)=>{

let saved = localStorage.getItem("check"+index)

if(saved==="true"){

box.checked=true

}

box.addEventListener("change",()=>{

localStorage.setItem("check"+index,box.checked)

atualizarDashboard()

})

})

function atualizarDashboard(){

let total = checkboxes.length

let feitos = 0

checkboxes.forEach(box=>{

if(box.checked) feitos++

})

let porcentagem = Math.round((feitos/total)*100)

document.getElementById("score").innerText =
"Produtividade da semana: "+porcentagem+"%"

criarGrafico()

}

function criarGrafico(){

const dias = ["Seg","Ter","Qua","Qui","Sex","Sab","Dom"]

let dados = [0,0,0,0,0,0,0]

let linhas = document.querySelectorAll("tbody tr")

linhas.forEach(linha=>{

let checks = linha.querySelectorAll("input")

checks.forEach((check,index)=>{

if(check.checked){

dados[index]++

}

})

})

const ctx = document.getElementById("grafico")

if(window.grafico){

window.grafico.destroy()

}

window.grafico = new Chart(ctx,{

type:"bar",

data:{

labels:dias,

datasets:[{

label:"Hábitos concluídos",

data:dados

}]

}

})

}

atualizarDashboard()