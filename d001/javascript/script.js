function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebê
            } else if (idade >= 4 && idade < 14) {
                // Criança
            } else if (idade >= 14 && idade < 18) {
                // Jovem
            } else if (idade >= 18 && idade < 60) {
                // Adulto
            } else {
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Bebê
            } else if (idade >= 4 && idade < 14) {
                // Criança
            } else if (idade >= 14 && idade < 18) {
                // Jovem
            } else if (idade >= 18 && idade < 60) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}

