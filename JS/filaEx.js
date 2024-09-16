var fila = []

function pegarFila() {
    fila.shift()
}
function adicionarFila(elemento) {
    fila.push(elemento)
}
function verFila() {
    return fila.length == 0
}

adicionarFila(1)
adicionarFila(2)
adicionarFila(3)
adicionarFila(4)

console.log("Este é o primeiro da fila: " + pegarFila)
console.log("A fila está vazia? " + fila.length)