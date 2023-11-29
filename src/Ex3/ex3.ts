export const ex3 = () => {};
class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    }

    getDiscriminante(): number {
    return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    tieneRaices(): boolean {
    return this.getDiscriminante() >= 0;
    }

    tieneRaiz(): boolean {
    return this.getDiscriminante() === 0;
    }

    calcular(): void {
    const discriminante = this.getDiscriminante();

    if (discriminante > 0) {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`La ecuación tiene dos soluciones: ${raiz1} y ${raiz2}`);
    } else if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        console.log(`La ecuación tiene una única solución: ${raiz}`);
    } else {
        console.log('La ecuación no tiene soluciones reales.');
    }
    }

    obtenerRaices(): void {
    const discriminante = this.getDiscriminante();

    if (discriminante > 0) {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las raíces son: ${raiz1} y ${raiz2}`);
    } else if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        console.log(`La única raíz es: ${raiz}`);
    } else {
        console.log('La ecuación no tiene soluciones reales.');
    }
    }

    obtenerRaiz(): void {
    const discriminante = this.getDiscriminante();

    if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        console.log(`La única raíz es: ${raiz}`);
    } else {
        console.log('La ecuación no tiene una única solución.');
    }
    }
}

const ecuacion1 = new Raices(1, -3, 2);
console.log(`¿Tiene raíces? ${ecuacion1.tieneRaices()}`);
console.log(`¿Tiene raíz única? ${ecuacion1.tieneRaiz()}`);
ecuacion1.calcular();

const ecuacion2 = new Raices(1, -2, 1);
console.log(`¿Tiene raíces? ${ecuacion2.tieneRaices()}`);
console.log(`¿Tiene raíz única? ${ecuacion2.tieneRaiz()}`);
ecuacion2.obtenerRaices();

const ecuacion3 = new Raices(1, -4, 4);
console.log(`¿Tiene raíces? ${ecuacion3.tieneRaices()}`);
console.log(`¿Tiene raíz única? ${ecuacion3.tieneRaiz()}`);
ecuacion3.obtenerRaiz();