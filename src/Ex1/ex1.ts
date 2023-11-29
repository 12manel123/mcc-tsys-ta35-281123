export const ex1 = () => {};
interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    compareTo(a: Entregable): number;
}

class Serie implements Entregable {
    private titulo: string;
    private numTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string, creador: string) {
    this.titulo = titulo;
    this.numTemporadas = 3;
    this.entregado = false;
    this.genero = "Sin especificar";
    this.creador = creador;
    }

    getTitulo(): string {
    return this.titulo;
    }

    getNumTemporadas(): number {
    return this.numTemporadas;
    }

    isEntregado(): boolean {
    return this.entregado;
    }

    entregar(): void {
    this.entregado = true;
    }

    devolver(): void {
    this.entregado = false;
    }

    compareTo(a: Entregable): number {
    if (a instanceof Serie) {
        return this.numTemporadas - a.getNumTemporadas();
    }
    return 0;
    }

    toString(): string {
    return `Serie: ${this.titulo}, Temporadas: ${this.numTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
    }
}

class Videojuego implements Entregable {
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compania: string;

    constructor(titulo: string, horasEstimadas: number, genero: string, compania: string) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas;
    this.entregado = false;
    this.genero = genero;
    this.compania = compania;
    }

    getTitulo(): string {
    return this.titulo;
    }

    getHorasEstimadas(): number {
    return this.horasEstimadas;
    }

    isEntregado(): boolean {
    return this.entregado;
    }

    entregar(): void {
    this.entregado = true;
    }

    devolver(): void {
    this.entregado = false;
    }

    compareTo(a: Entregable): number {
    if (a instanceof Videojuego) {
        return this.horasEstimadas - a.getHorasEstimadas();
    }
    return 0;
    }

    toString(): string {
    return `Videojuego: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compania}`;
    }
}

const series: Serie[] = [];
const videojuegos: Videojuego[] = [];

series.push(new Serie("Breaking Bad", "Vince Gilligan"));
series.push(new Serie("Stranger Things", "Duffer Brothers"));
series.push(new Serie("The Mandalorian", "Jon Favreau"));
series.push(new Serie("The Witcher", "Lauren Schmidt Hissrich"));
series.push(new Serie("Friends", "David Crane"));

videojuegos.push(new Videojuego("Undertale", 30, "Indie", "Toby Fox"));
videojuegos.push(new Videojuego("Cyberpunk 2077", 40, "RPG", "CD Projekt"));
videojuegos.push(new Videojuego("Assassin's Creed Valhalla", 30, "Acción-Aventura", "Ubisoft"));
videojuegos.push(new Videojuego("FIFA 23", 15, "Deportes", "EA Sports"));
videojuegos.push(new Videojuego("Red Dead Redemption 2", 50, "Acción-Aventura", "Rockstar Games"));

series[0].entregar();
series[2].entregar();
videojuegos[1].entregar();
videojuegos[3].entregar();

const seriesEntregadas = series.filter((serie) => serie.isEntregado());
const videojuegosEntregados = videojuegos.filter((videojuego) => videojuego.isEntregado());

console.log(`Series entregadas: ${seriesEntregadas.length}`);
console.log(`Videojuegos entregados: ${videojuegosEntregados.length}`);

const videojuegoMasHoras = videojuegos.reduce((prev, current) => (prev.getHorasEstimadas() > current.getHorasEstimadas() ? prev : current));
console.log(`Videojuego con más horas estimadas:\n${videojuegoMasHoras.toString()}`);

const serieMasTemporadas = series.reduce((prev, current) => (prev.getNumTemporadas() > current.getNumTemporadas() ? prev : current));
console.log(`Serie con más temporadas:\n${serieMasTemporadas.toString()}`);