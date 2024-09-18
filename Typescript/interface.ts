interface Conta {
    Saldo: number;
    Sacar(valor: number): void;
    Depositar(valor: number): void;
}

class Bra implements Conta {
    Saldo: number;

    constructor() {
        this.Saldo = 1000;
    }

    Sacar(valor: number): void {
        if (this.Saldo - valor >= 0) {
            this.Saldo -= valor;
            console.log("Novo saldo é - " + this.Saldo);
        } else {
            console.log("Este saque não poderá ser efetivado. Saldo insuficiente.");
        }
    }

    Depositar(valor: number): void {
        if (valor === 1000) {
            this.Saldo += valor;
            console.log("Novo saldo é - " + this.Saldo);
        } else {
            console.log("Este valor não poderá ser depositado. O depósito deve ser exatamente 1000 reais.");
        }
    }
}


let conta = new Bra();
conta.Depositar(999); 
conta.Depositar(1000); 
conta.Sacar(1001); 
conta.Sacar(500);
