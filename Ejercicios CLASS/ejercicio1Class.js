class Figura {
    constructor(_color) {
        this._color = _color;
    }
    get getColor() {
        return this._color;
    }
    set setColor(_color) {
        this._color = setColor
    }
}

const Figurita = new Figura("blue");
Figurita._color
console.log(Figurita._color)

Figurita._color = "yellow"
Figurita._color
console.log(Figurita._color)


// En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color

// El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

// Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).
