function contar(){
    var i= document.getElementById("txtini")
    var f= document.getElementById("txtfim")
    var p= document.getElementById("txtpas")
    var res= document.getElementById("res")

        if(i.value.length == 0 || f.value.length== 0 ||p.value.length ==0 ){
            
            res.innerHTML= "impossivel contar"
        }else{
            res.innerHTML="contando"
            var ini= Number(i.value)
            var fim= Number(f.value)
            var pas= Number(p.value)
                if (pas<=0){
                    window.alert ("passo invalido")
                    pas= 1
                }    
                if (ini < fim){
                    //contagem crescente


                    for(var bubles= ini;bubles <=fim;bubles+=pas){
                    res.innerHTML += `${bubles} \u{1F449}`}
                    //contagem decressente

        }           else{ for (var bubles=ini;bubles>=fim;bubles-=pas)
                    res.innerHTML += `${bubles} \u{2693}` 
    }
    }

}