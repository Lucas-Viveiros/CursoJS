function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gen = ''
        var img = document.querySelector('img#img')
        if(fsex[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade < 4 ) {
                // Bebê
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
                document.body.style.backgroundColor = "#ecde9e";
            } else if (idade >= 4 && idade < 14) {
                // Criança
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
                document.body.style.backgroundColor = "#a87a75";
            } else if (idade >= 14 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
                document.body.style.backgroundColor = "f44e76";
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
                document.body.style.backgroundColor = "#949b42";
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
                document.body.style.backgroundColor = "#949b42";
            }
            res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        } else {
            gen = 'mulher'
        if (idade >= 0 && idade < 4 ) {
            // Bebê
            img.setAttribute('src', 'imagens/foto-bebe-f.png')
            document.body.style.backgroundColor = "#ecde9e";
        } else if (idade >= 4 && idade < 14) {
            // Criança
            img.setAttribute('src', 'imagens/foto-crianca-f.png')
            document.body.style.backgroundColor = "#a87a75";
        } else if (idade >= 14 && idade < 18) {
            // Jovem
            img.setAttribute('src', 'imagens/foto-jovem-f.png')
            document.body.style.backgroundColor = "f44e76";
        } else if (idade >= 18 && idade < 60) {
            // Adulto
            img.setAttribute('src', 'imagens/foto-adulto-f.png')
            document.body.style.backgroundColor = "#949b42";
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/foto-idoso-f.png')
            document.body.style.backgroundColor = "#b6a36b";
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
    }
}