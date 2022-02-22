function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen =  ''
        if (fsex[0].checked) {
            gen = 'Homem'
        } else if (fsex[1].checked) {
            gen = 'Mulher'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}