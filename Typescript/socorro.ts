class Bolacha {

    protected marca: string

    constructor(marca:string) {
        this.marca = marca
    }
}

class Tipo extends Bolacha {
    private sabor: string 

    constructor(marca:string, sabor:string) {
        super(marca)
        this.sabor = sabor
    }

    public exibirInfo() : void {

        console.log("A bolacha ", this.marca, "  do sabor ", this.sabor, ".")
    }

}

let Comida = new Bolacha ("Vitarela")
console.log(Comida)