import { Usuario } from "./Usuario";

export class Operador extends Usuario {

    constructor(user:string, password:string, nome:string, sobrenome:string, dataDeNascimento:string,
        endereco:string, telefone:string) {

        super(user,password,nome,sobrenome,dataDeNascimento,endereco,telefone)
        
    }

    public Operar() : void {

        console.log("Operando")
    }

}