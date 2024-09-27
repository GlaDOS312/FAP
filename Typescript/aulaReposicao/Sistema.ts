import { Usuario } from "./Usuario";
import { Operador } from "./Operador";
import { Admnistrador } from "./Admnistrador";
import { ILogin } from "./Ilogin";
import { ICadastro } from "./ICadastro";

class Sistema implements ICadastro, ILogin {

    public Logar (userObj: Usuario, user: string, password: string) : void{
        if (userObj.verificarCredencial(user, password)) {
            console.log("Usuário logado!")
        }
        else{
            console.log("Usuário não encontrado.")
        }
    }

    public LogarADM (userObj: Admnistrador, user: string, password: string, token: number) : void {
        if (userObj.verificarCredencialAdm(user, password, token)) {
            console.log("Usuário logado!")
        }
        else{
            console.log("Usuário não encontrado.")
        }
    }

    public CadastrarADM (user: string, password: string, nome: string, sobrenome: string, dataDeNascimento: string,
                            endereco: string, telefone: string) {
                                
                            }

}