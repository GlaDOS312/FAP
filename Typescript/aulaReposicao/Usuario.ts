export class Usuario {

    protected user : string
    protected password : string
    protected nome : string
    protected sobrenome : string
    protected dataDeNascimento : string
    protected endereco : string
    protected telefone : string
    public static numeroUsuarios : number = 0

        constructor (user:string, password:string, nome:string, sobrenome:string, dataDeNascimento:string,
                    endereco:string, telefone:string) {

                        this.user = user
                        this.password = password
                        this.nome = nome
                        this.sobrenome = sobrenome
                        this.dataDeNascimento = dataDeNascimento
                        this.endereco = endereco
                        this.telefone = telefone
                        Usuario.numeroUsuarios++
                    }


                public verificarCredencial(user, password) : boolean {

                    return this.user == user && this.password == password
                        
                }

                public atualizarCadastro(endereco: string, telefone: string) : void {

                    this.telefone = telefone
                    this.endereco = endereco

                }

                mostrarDados () : void {

                    console.log(this)

                }

}