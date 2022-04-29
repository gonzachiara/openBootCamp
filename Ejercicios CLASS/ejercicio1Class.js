class Figura {
    constructor(_color) {
        this._color = _color;
    }
    get getColor() {
        return "Mi figura es de color " + this._color;
    }
    set setColor(n) {
        this._color = n
    }
}

const Figurita = new Figura("blue");
Figurita._color
console.log(Figurita._color)

Figurita._color = 
Figurita._color
console.log(Figurita._color)


// En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color

// El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

// Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).