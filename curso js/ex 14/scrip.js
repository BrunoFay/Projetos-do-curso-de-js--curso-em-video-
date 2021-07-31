function carregar() {
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('img')
    var data= new Date()
    var hora= data.getHours()
    var minutos=data.getMinutes()
    msg.innerHTML= `Agora são ${hora} horas e ${minutos} minutos.`
    if(hora >= 0 && hora < 12){
img.src= "foto manha.jpg"
document.body.style.background= "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        img.src= "foto tarde.jpg"
        document.body.style.background= "#b9842f"

    }else{
        img.src="foto noite.jpg"
        document.body.style.background="#b9849f"

    }
}