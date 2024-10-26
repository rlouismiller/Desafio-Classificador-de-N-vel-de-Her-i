let nomeHeroi = "João Ninguém"
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let xp = 0
const condicao = true

//parece que o switch sozinho não trabalha bem com comparações, pelo menos no javascript
//por pesquisa, uma variável booleana parece resolver o problema

switch (condicao)
{
case xp >= 0 && xp <= 1000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[0]+".")
break

case xp > 1000 && xp <=2000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[1]+".")
break

case xp > 2000 && xp <=5000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[2]+".")
break

case xp > 5000 && xp <=7000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[3]+".")
break

case xp > 7000 && xp <=8000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[4]+".")
break

case xp > 8000 && xp <=9000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[5]+".")
break

case xp > 9000 && xp <=10000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[6]+".")
break

case xp > 10000:
console.log ("O Herói de nome "+nomeHeroi+" está no nível de "+nivel[7]+".")
break


default:
console.log ("O nível não é válido. Verificar")
}
