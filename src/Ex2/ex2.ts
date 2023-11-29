export const ex2 = () => {};
class Libro {
    private ISBN: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(ISBN: string, titulo: string, autor: string, numPaginas: number) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    }

    // Getters y setters
    getISBN(): string {
    return this.ISBN;
    }

    setISBN(ISBN: string): void {
    this.ISBN = ISBN;
    }

    getTitulo(): string {
    return this.titulo;
    }

    setTitulo(titulo: string): void {
    this.titulo = titulo;
    }

    getAutor(): string {
    return this.autor;
    }

    setAutor(autor: string): void {
    this.autor = autor;
    }

    getNumPaginas(): number {
    return this.numPaginas;
    }

    setNumPaginas(numPaginas: number): void {
    this.numPaginas = numPaginas;
    }

    toString(): string {
    return `El libro con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}

const libro1 = new Libro('1234567890', 'El Señor de los Anillos', 'J.R.R. Tolkien', 1000);
const libro2 = new Libro('0987654321', 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 400);

console.log(libro1.toString());
console.log(libro2.toString());

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`);
} else {
    console.log(`Ambos libros tienen la misma cantidad de páginas.`);
}