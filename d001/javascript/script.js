function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`
        img.src = 'imagens/foto-madrugada.png'
    } else {
        msg.innerHTML = 'O código está funcionando!'
    }
}