import { Usuario } from "./Usuario";
import { Admnistrador } from "./Admnistrador";
import { Operador } from "./Operador";

export interface ICadastro {

    Cadastro(user: string, password: string, nome: string, sobrenome: string,
            dataDeNascimento: string, endereco: string, telefone: string) : Usuario

    CadastroADM(user: string, password: string, nome: string, sobrenome: string,
            dataDeNascimento: string, endereco: string, telefone: string) : Admnistrador
    
    CadastroOperador(user: string, password: string, nome: string, sobrenome: string,
            dataDeNascimento: string, endereco: string, telefone: string) : Operador
}