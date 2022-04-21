let array =[0,1,2,3,4]

function eliminarUltimo(array){
    if(array.length > 0){
  array.pop();
    }else console.log("Su array está vacio");
}

eliminarUltimo(array);
console.log(array);