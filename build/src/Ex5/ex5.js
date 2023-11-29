"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex5 = void 0;
const ex5 = () => { };
exports.ex5 = ex5;
class Pelicula {
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    getTitulo() {
        return this.titulo;
    }
    getDuracion() {
        return this.duracion;
    }
    getEdadMinima() {
        return this.edadMinima;
    }
    getDirector() {
        return this.director;
    }
    toString() {
        return `${this.titulo}, Duración: ${this.duracion} minutos, Edad mínima: ${this.edadMinima}, Director: ${this.director}`;
    }
}
class Espectador {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getDinero() {
        return this.dinero;
    }
    setDinero(dinero) {
        this.dinero = dinero;
    }
    toString() {
        return `${this.nombre}, Edad: ${this.edad}, Dinero: ${this.dinero} euros`;
    }
}
class Asiento {
    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.ocupado = false;
    }
    ocuparAsiento() {
        this.ocupado = true;
    }
    estaOcupado() {
        return this.ocupado;
    }
    toString() {
        return `${this.fila} ${this.columna}`;
    }
}
class SalaCine {
    constructor() {
        // Inicializar la sala con asientos
        this.asientos = [];
        for (let fila = 1; fila <= 8; fila++) {
            const filaAsientos = [];
            for (let columna = 'A'; columna <= 'I'; columna = String.fromCharCode(columna.charCodeAt(0) + 1)) {
                filaAsientos.push(new Asiento(fila, columna));
            }
            this.asientos.push(filaAsientos);
        }
        this.peliculaActual = new Pelicula("El Gran Cine", 120, 10, "Director Anónimo");
        this.precioEntrada = 8.5;
    }
    reproducirPelicula(pelicula) {
        this.peliculaActual = pelicula;
        console.log(`Se está reproduciendo la película: ${this.peliculaActual.getTitulo()}`);
    }
    sentarEspectadores(numEspectadores) {
        for (let i = 0; i < numEspectadores; i++) {
            const espectador = new Espectador(`Espectador${i + 1}`, Math.floor(Math.random() * 50) + 10, Math.random() * 20);
            this.sentarEspectador(espectador);
        }
    }
    sentarEspectador(espectador) {
        let fila = Math.floor(Math.random() * 8) + 1;
        let columna = String.fromCharCode(Math.floor(Math.random() * 9) + 'A'.charCodeAt(0));
        let asiento = this.asientos[fila - 1][columna.charCodeAt(0) - 'A'.charCodeAt(0)];
        while (asiento.estaOcupado()) {
            console.log(`Lo siento, el asiento ${asiento} ya está ocupado. Buscando otro.`);
            fila = Math.floor(Math.random() * 8) + 1;
            columna = String.fromCharCode(Math.floor(Math.random() * 9) + 'A'.charCodeAt(0));
            asiento = this.asientos[fila - 1][columna.charCodeAt(0) - 'A'.charCodeAt(0)];
        }
        if (espectador.getEdad() < this.peliculaActual.getEdadMinima()) {
            console.log(`Lo siento, ${espectador.getNombre()}, no puedes ver la película ${this.peliculaActual.getTitulo()} porque eres demasiado joven.`);
        }
        else if (espectador.getDinero() < this.precioEntrada) {
            console.log(`Lo siento, ${espectador.getNombre()}, no puedes comprar una entrada para la película ${this.peliculaActual.getTitulo()} porque no tienes suficiente dinero.`);
        }
        else {
            asiento.ocuparAsiento();
            espectador.setDinero(espectador.getDinero() - this.precioEntrada);
            console.log(`¡Entrada vendida! ${espectador.getNombre()} ha comprado una entrada para la película ${this.peliculaActual.getTitulo()} en el asiento ${asiento}`);
        }
    }
}
const sala = new SalaCine();
const pelicula1 = new Pelicula("El Señor de los Anillos", 180, 12, "Peter Jackson");
const pelicula2 = new Pelicula("Inception", 150, 14, "Christopher Nolan");
sala.reproducirPelicula(pelicula1);
sala.reproducirPelicula(pelicula2);
sala.sentarEspectadores(20);
