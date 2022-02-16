function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`

    if (hora >= 0 && hora < 6) {
        img.src = "imagens/foto-madrugada.png"
        document.body.style.background = '#ffb102'
    } else if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = "imagens/foto-manha.png"
        document.body.style.background = '#fbc084'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#8c3b28'
    } else {
        // BOA NOITE!
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#568c97'
    }
}
