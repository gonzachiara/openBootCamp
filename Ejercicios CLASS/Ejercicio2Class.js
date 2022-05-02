// En este segundo ejercicio tendréis que crear dos clases:

// Circulo

// Rectángulo

// las cuales deben de heredar de Figura.

// Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).

// Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).

// Los atributos de estas clases deben ser públicos.

class Figura {
    constructor(){}
}

class Circulo extends Figura {
    constructor(radio, color) {
        super();
        this.radio = radio;
        this.color = color;
    } 
    get CirculoGet() {
        return this.radio, this.color
        
    }
    set CirculoSett(n) {
        this.n = this.CirculoSett 
    }
}

class Rectángulo extends Figura {
    constructor(base, altura, color) {
        super();
        this.base = base;
        this.altura = altura;
        this.color = color
    } 
    get RectánguloGet() {
        return this.base,
            this.altura,
            this.color
    }
    set RectánguloSett(m) {
        this.m = this.RectánguloSett
    }
}

const circulito = new Circulo(2, "black")
circulito
console.log(circulito.color)
console.log(circulito.radio)
circulito.radio = 5
circulito.color = "blue"
circulito

const rectangulito = new Rectángulo(10, 20, "red")
rectangulito
rectangulito.base = 20
rectangulito.altura = 90
rectangulito.color = "green"
rectangulito

const figurita = new Figura
figurita