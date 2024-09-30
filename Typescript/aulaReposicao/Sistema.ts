import { Usuario } from "./Usuario";
import { Operador } from "./Operador";
import { Administrador } from "./Admnistrador";
import { ILogin } from "./Ilogin";
import { ICadastro } from "./ICadastro";

class Sistema implements ICadastro, ILogin {

    public Logar (userObj: Usuario, user: string, password: string) : void {
        if (userObj.verificarCredencial(user, password)) {
            console.log("Usuário logado!")
        }
        else{
            console.log("Usuário não encontrado.")
        }
    }

    public LogarADM (userObj: Administrador, user: string, password: string, token: number) : void {
        if (userObj.verificarCredencialAdm(user, password, token)) {
            console.log("Usuário logado!")
        }
        else{
            console.log("Usuário não encontrado.")
        }
    }

    public CadastrarUsuario(user: string, password: string, nome: string, sobrenome: string, dataDeNascimento: string,
                             endereco: string, telefone: string) : Usuario {
                                return new Usuario(user, password, nome, sobrenome, dataDeNascimento, endereco, telefone)
                             }

    public CadastrarADM (user: string, password: string, nome: string, sobrenome: string, dataDeNascimento: string,
                            endereco: string, telefone: string, _token: number) : Administrador {
                                return new Administrador(user, password, nome, sobrenome, dataDeNascimento, endereco, telefone, _token)
                            }

    public CadastrarOperador (user: string, password: string, nome: string, sobrenome: string, dataDeNascimento: string,
                                endereco: string, telefone: string) : Operador {
                                    return new Operador(user, password, nome, sobrenome, dataDeNascimento, endereco, telefone)
                                }

    public Atualizar(userObj: Usuario, endereco: string, telefone: string) : void {
        userObj.atualizarCadastro(endereco, telefone)
    }
    
}

    let sistema = new Sistema()

    let user1 = sistema.CadastrarUsuario("jcfn", "123456", "João", "Cavalcanti", "11/09/03", "01", "9408690404")
    let adm1 = sistema.CadastrarADM("jcfn1", "68910", "Farias", "Neto", "01/12/04", "02", "94785947387", "")