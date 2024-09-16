var a = [[1,2,3],[4,5,6]]
var soma = Array(a.length).fill(0)

for (i = 0; i < a.length; i++){

    for (j = 0; j < a[i].length; j++){

        soma[i] += a[i][j]
        console.log(soma)
    }

}

console.log(soma)
