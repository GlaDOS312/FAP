import { Usuario } from "./Usuario";

export class Admnistrador extends Usuario {
    
    private _token : number

    constructor(user:string, password:string, nome:string, sobrenome:string, dataDeNascimento:string,
        endereco:string, telefone:string, _token : number) {

            super(user,password,nome,sobrenome,dataDeNascimento,endereco,telefone)
            this._token = Math.random()*100000
    }

    public Administrando() : void {
    
        console.log("Admnistrando")
    }

    public GetToken() : number {

        return this._token
    }

    public verificarCredencialAdm(user: string, password: string, token: number): boolean {
        
        if (this._token == token) {
            return super.verificarCredencial(user, password)
        }
        else {
            return false
        }
    }

}