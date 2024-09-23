function imprimir <T>(valor: T) {
    console.log(valor)
}

imprimir<string>("Olá, mundo!")
imprimir<number>(42)
imprimir<boolean>(true)
