function sumar(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

function multiplicar(a,b) {
    return a*b;
}

function dividir(a,b) {
    return a/b;
}

function potenciar(a,b) {
    if (b == 0 ) return 1;
    let resultado = 1;
    for (let index = 0; index < b; index++) {
        resultado = resultado * a;
    }
    return resultado;
}