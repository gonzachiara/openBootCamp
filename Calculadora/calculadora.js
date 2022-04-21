/*function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    }};
mal resuelto
*/



// Bien resuelto

let numero1 = 2
let numero2 = 0

function miSuma(numero1, numero2){
    let suma = (numero1 + numero2);
    console.log(suma);
}

function miResta(numero1, numero2){
    let resta = numero1 - numero2;
    console.log(resta);
}

function miMultiplicacion(numero1, numero2){
    let multiplicacion = numero1 * numero2;
    console.log(multiplicacion);
}

function miDivision(numero1, numero2){
   
  if(numero2 === 0){
    console.log("no se puede dividir por 0")
   }else {
     let division = numero1 / numero2;
    console.log(division);
}
}



miSuma(numero1, numero2);
miResta(numero1, numero2);
miMultiplicacion(numero1, numero2);
miDivision(numero1, numero2);
