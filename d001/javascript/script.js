function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (hora >= 0 && hora < 6) {
        msg.innerHTML = `Boa madrugada! Agora são ${hora} horas e ${minuto} minutos.`
        img.src = 'imagens/foto-madrugada.png'
    } else if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos.`
        img.src = 'imagens/foto-manha.png'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos.`
        img.src = 'imagens/foto-tarde.png'
    } else {
        msg.innerHTML = `Bom noite! Agora são ${hora} horas e ${minuto} minutos.`
        img.src = 'imagens/foto-noite.png'
    }

}