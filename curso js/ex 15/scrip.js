function verificar (){
var data= new Date()
var ano = data.getFullYear()
var fano= document.getElementById("txtano")
var res = document.getElementById("res")
if (fano.value.length == 0 ||Number (fano.value) > ano){
    window.alert ("[ERRO] verifique os dados inceridos!")
}else{
    var fsex= document.getElementsByName("radsex")
    var idade= ano - Number(fano.value)
    var genero= ""
    var img= document.createElement("img")
    img.setAttribute("id","foto")
    if (fsex[0].checked){
        genero= "homem"
        if(idade >=0 && idade< 13){
            //criança
            img.setAttribute("src","crinça H.jpg")
        }else if ( idade >13 && idade <= 25){
            //jovem 
            img.setAttribute("src","jovem.jpg")

        }else if (idade >25 && idade <= 55){
            //adulto
            img.setAttribute("src","homem.jpg")

        }else{
            //idoso
            img.setAttribute("src","idoso.jpg")
        }
    }else if (fsex[1].checked){
        genero= "mulher"
        if(idade >=0 && idade< 13){
            //criança
            img.setAttribute("src","criança.jpg")
        }else if ( idade>13 && idade <= 25){
            //jovem
            img.setAttribute("src","jovem M.jpg")

        }else if (idade >25 && idade <= 55){
            //adulto
            img.setAttribute("src","mulher.jpg")

        }else{
            //idoso
            img.setAttribute("src","idosa.jpg")
        
        }
    }
        
    
    res.style.textAlign= "center"
    
    res.innerHTML=`voce é um ${genero} com ${idade} anos`
    res.appendChild(img)
}
}
