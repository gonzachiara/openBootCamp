//En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle.

let i = 0;
if(i=1){
console.log(parseInt(Math.random(i)*20));
}if(i = 2){
    console.log(parseInt(Math.random(i)*20));
}if(i=3){
    console.log(parseInt(Math.random(i)*20));
}if(i = 4){
    console.log(parseInt(Math.random(i)*20));
}if(i=5){
    console.log(parseInt(Math.random(i)*20));
}if(i = 6){
    console.log(parseInt(Math.random(i)*20));
}if(i=7){
    console.log(parseInt(Math.random(i)*20));
}if(i = 8){
    console.log(parseInt(Math.random(i)*20));
}if(i=9){
    console.log(parseInt(Math.random(i)*20));
}if(i = 10){
    console.log(parseInt(Math.random(i)*20));
}

// se llega al objetivo de una manera no convencional

// Forma correcta 

for (let i = 0; i <= 10; i++) {
    console.log(Math.round(Math.random()*20));
}

