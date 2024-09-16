class Animal {

    tamanho : string
    idade : number
    cor : string

    constructor() {

        this.cor = "Verde"
        this.tamanho = "Grande"
        this.idade = 3

    }

    Correr() : void {
        console.log("Ele está correndo!")
    }

    Dormir() : void {
        console.log("Ele está dormindo...")
    }

}

class Morcego extends Animal {

    constructor(){
        super()
    }

    Dormir(): void {
        console.log("Ele dorme de cabeça para baixo.")
    }

    Voar(): void {
        console.log("Ele está voando!")
    }

    Morder(): void {
        console.log("Ele morde!")
    }
}

let morcego = new Morcego()
morcego.Voar()
morcego.Morder()
morcego.Dormir()