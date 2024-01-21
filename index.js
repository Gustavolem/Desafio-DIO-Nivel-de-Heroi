let = Vitorias = 26git push -u origin main
let = Derrotas = 12

function somar(Vitorias, Derrotas) {return Vitorias - Derrotas;}
let = Saldo = somar(Vitorias, Derrotas);

if (Saldo < 10) {nivel = "Ferro"}
else if (Saldo<= 20) {nivel = "Bronze"}
else if (Saldo <= 50) {nivel = "Prata"}
else if (Saldo <= 80) {nivel = "Ouro"}
else if (Saldo <= 90) {nivel = "Diamante"}
else if (Saldo <= 100) {nivel = "Lendário"}
else if (Saldo >= 101) {nivel = "Imortal"}

console.log ("O herói possui um saldo de " + Saldo + " está no nível de " + nivel)
