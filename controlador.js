

let primer_numero = 0;
let segundo_numero = 0;
/**
 * suma 1
 * resta 2
 * multipliacion 3
 * divicion 4
 * potencia 5
 */
let opreacion = 0;

const presentacion = document.getElementById("presentacion");
const presentacion2 = document.getElementById("presentacion2");
const opePresentacion = document.getElementById("operacion");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

const btnMas = document.getElementById("btnMas")
const btnEnter = document.getElementById("btnEnter");
const btnMenos = document.getElementById("btnMenos");
const btnPor = document.getElementById("btnPor");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnBorrar = document.getElementById("btnBorrar");



btn1.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML=1;
    } else{
        presentacion.innerHTML +=1;
    }   
});

btn2.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 2;
    } else {
        presentacion.innerHTML += 2;
    }
});

btn3.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 3;
    } else {
        presentacion.innerHTML += 3;
    }
});

btn4.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 4;
    } else {
        presentacion.innerHTML += 4;
    }
});

btn5.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 5;
    } else {
        presentacion.innerHTML += 5;
    }
});

btn6.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 6;
    } else {
        presentacion.innerHTML += 6;
    }
});

btn7.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 7;
    } else {
        presentacion.innerHTML += 7;
    }
});

btn8.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 8;
    } else {
        presentacion.innerHTML += 8;
    }
});

btn9.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 9;
    } else {
        presentacion.innerHTML += 9;
    }
});

btn0.addEventListener("click", (e)=>{
    if (presentacion.textContent == 0){
        presentacion.innerHTML = 0;
    } else {
        presentacion.innerHTML += 0;
    }
});

btnMas.addEventListener("click", (e)=>{
    primer_numero = Number(presentacion.textContent);
    presentacion2.innerHTML = presentacion.textContent;
    opePresentacion.innerHTML = "+";
    opreacion = 1;
    presentacion.innerHTML = 0;
});

btnMenos.addEventListener("click", ()=>{
    primer_numero = Number(presentacion.textContent);
    presentacion2.innerHTML = presentacion.textContent;
    opePresentacion.innerHTML = "-";
    opreacion = 2;
    presentacion.innerHTML = 0;
});

btnPor.addEventListener("click", ()=>{
    primer_numero = Number(presentacion.textContent);
    presentacion2.innerHTML = presentacion.textContent;
    opePresentacion.innerHTML = "*";
    opreacion = 3;
    presentacion.innerHTML = 0;
});

btnDividir.addEventListener("click", ()=>{
    primer_numero = Number(presentacion.textContent);
    presentacion2.innerHTML = presentacion.textContent;
    opePresentacion.innerHTML = "/";
    opreacion = 4;
    presentacion.innerHTML = 0;
});

btnPotencia.addEventListener("click", ()=>{
    primer_numero = Number(presentacion.textContent);
    presentacion2.innerHTML = presentacion.textContent;
    opePresentacion.innerHTML = "^";
    opreacion = 5;
    presentacion.innerHTML = 0;
});

btnBorrar.addEventListener("click", ()=>{
    presentacion.innerHTML = 0;
    presentacion2.innerHTML = "";
    opePresentacion.innerHTML = "";
    primer_numero = 0;
    segundo_numero = 0;
    opreacion = 0;
});

btnEnter.addEventListener("click", (e)=>{
    segundo_numero = Number(presentacion.textContent);
    if (opreacion === 1) presentacion.innerHTML = sumar(primer_numero, segundo_numero);
    if (opreacion === 2) presentacion.innerHTML = restar(primer_numero, segundo_numero);
    if (opreacion === 3) presentacion.innerHTML = multiplicar(primer_numero, segundo_numero);
    if (opreacion === 4) presentacion.innerHTML = dividir(primer_numero, segundo_numero);
    if (opreacion === 5) presentacion.innerHTML = potenciar(primer_numero, segundo_numero);
    presentacion2.innerHTML = "";
    opePresentacion.innerHTML = "";
});