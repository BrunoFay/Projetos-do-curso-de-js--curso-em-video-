function tabuada(){
    let num= document.getElementById("txtn")
    let tab= document.getElementById("seltab")
        if (num.value.length == 0){
            window.alert("pfv insira uma numero!")
}       else{
            let n = Number(num.value)// converter a variavel n em numeral
            let c= 1
            tab.innerHTML="" // serve para limpar o resultado para a proxima tabuada
            while (c <= 10) {
                let item=document.createElement("option")//para criar um elemento
                item.text= `${n} x ${c} = ${n*c}`
                tab.appendChild(item)// acrescentar tabuada
            
            c++
            }
}
   
}