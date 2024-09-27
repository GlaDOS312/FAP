import { Usuario } from "./Usuario";
import { Admnistrador } from "./Admnistrador";

export interface ILogin {

    Logar(userObj: Usuario, user: string, password: string) : void
    LogarAdm(userObj: Admnistrador, user: string, password: string, token: number) : void
}