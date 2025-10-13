console.log("conexión correcta!");



/* 1️⃣ Edad y etapa de vida
 Pide la edad de una persona.
 Si es menor a 13 → “Eres un niño”.
 Si tiene entre 13 y 17 → “Eres adolescente”.
 Si tiene 18 o más → “Eres adulto”.
 📘 Práctica: uso de rangos con if, else if, else.*/

function verificarEtapa() {
    let edad = parseInt(prompt("ingresen su edad: "));
    if (edad < 13) {
        alert("Eres un niño")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un Adolescente")
    } else {
        alert("Eres un Adulto")
    }
}

/* 
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
📘 Práctica: comparación exacta (===).
*/

function validarContraseña() {
    let contraseña = prompt("Ingresen contraseña: ");
    if (contraseña === "12345") {
        alert("Acceso permitido")
    }
    else
        alert("Acceso Denegado")
}

/*
3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
💡 Usa:
if (palabra.toLowerCase().includes('e')) { ... }
*/

function verificarLetra(){
    let palabra = prompt("Ingrese una palabra")
    if(palabra.toLocaleLowerCase().includes(`e`)) {
        alert("La palabra contiene la letra E")
    } else{
        alert("La palabra no contiene la letra E")
    }
}

/*
4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
*/ 

function compararNumeros(){
    let num1 = parseInt(prompt("Ingresa el primer numero"))
    let num2 = parseInt(prompt("Ingresar el segundo numero"))
    if(num1 > num2){
        alert("El primer numero es mayor")
    }else if(num1 < num2){
        alert("El segundo numero es mayor")
    }else if(num1 == num2){
        alert("Los numeros son iguales")
    }else
        alert("Sintax Error")
}