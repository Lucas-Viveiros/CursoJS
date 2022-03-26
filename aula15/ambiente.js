let valores = [8, 3, 1, 9, 5, 0]
valores.sort()
valores.push(1)

console.log(valores)
console.log(`O vetor tem ${valores.length} posições.`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
