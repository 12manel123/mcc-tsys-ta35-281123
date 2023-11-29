"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = void 0;
const ex2 = () => { };
exports.ex2 = ex2;
class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    // Getters y setters
    getISBN() {
        return this.ISBN;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    toString() {
        return `El libro con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}
const libro1 = new Libro('1234567890', 'El Señor de los Anillos', 'J.R.R. Tolkien', 1000);
const libro2 = new Libro('0987654321', 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 400);
console.log(libro1.toString());
console.log(libro2.toString());
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`);
}
else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`);
}
else {
    console.log(`Ambos libros tienen la misma cantidad de páginas.`);
}
