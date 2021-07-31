let teste= [1,4,5,6,7]
teste.push(9)
teste.sort 
let local= teste.indexOf(5) 

for(let ini in teste){
   console.log(`a posição ${ini} tem valor${teste[ini]}`)
    console.log(`a posição ${local} recebe o valor 5`)
}