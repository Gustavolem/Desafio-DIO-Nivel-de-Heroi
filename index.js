let NomeHeroi = "Gustavo"
let XPHeroi = 5221
let nivel = ""

if (XPHeroi <= 1000) {nivel = "Ferro"}
else if (XPHeroi <= 2000) {nivel = "Bronze"}
else if (XPHeroi <= 5000) {nivel = "Prata"}
else if (XPHeroi <= 7000) {nivel = "Ouro"}
else if (XPHeroi <= 8000) {nivel = "Platina"}
else if (XPHeroi <= 9000) {nivel = "Ascendente"}
else if (XPHeroi <= 10000) {nivel = "Imortal"}
else if (XPHeroi >= 10001) {nivel = "Radiante"}

console.log ("O Herói de nome " + NomeHeroi + " está no nível de " + nivel)