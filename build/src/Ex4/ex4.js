"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex4 = void 0;
const ex4 = () => { };
exports.ex4 = ex4;
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, sexo) {
        super(nombre, edad, sexo);
        this.calificacion = Math.random() * 10;
        this.disponible = Math.random() < 0.5;
    }
    getCalificacion() {
        return this.calificacion;
    }
    estaDisponible() {
        return this.disponible;
    }
    toString() {
        return `Estudiante: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Calificación: ${this.calificacion.toFixed(2)}`;
    }
}
class Profesor extends Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
        this.disponible = Math.random() > 0.2;
    }
    getMateria() {
        return this.materia;
    }
    estaDisponible() {
        return this.disponible;
    }
    toString() {
        return `Profesor: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Materia: ${this.materia}`;
    }
}
class Aula {
    constructor(id, maxEstudiantes, materiaDestinada, profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materiaDestinada = materiaDestinada;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    puedeDarseClase() {
        const estudiantesAprobados = this.estudiantes.filter(estudiante => estudiante.getCalificacion() >= 5);
        const porcentajeEstudiantesAprobados = (estudiantesAprobados.length / this.maxEstudiantes) * 100;
        return (this.profesor.estaDisponible() &&
            this.profesor.getMateria() === this.materiaDestinada &&
            porcentajeEstudiantesAprobados > 50);
    }
    mostrarResultado() {
        if (this.puedeDarseClase()) {
            console.log(`En el aula ${this.id} se puede dar clase.`);
            const estudiantesAprobados = this.estudiantes.filter(estudiante => estudiante.getCalificacion() >= 5);
            const hombresAprobados = estudiantesAprobados.filter(estudiante => estudiante.toString().includes("Sexo: H")).length;
            const mujeresAprobadas = estudiantesAprobados.length - hombresAprobados;
            console.log(`Número de estudiantes aprobados: ${estudiantesAprobados.length}`);
            console.log(`Número de hombres aprobados: ${hombresAprobados}`);
            console.log(`Número de mujeres aprobadas: ${mujeresAprobadas}`);
        }
        else {
            console.log(`En el aula ${this.id} no se puede dar clase.`);
        }
    }
    agregarEstudiante(estudiante) {
        if (this.estudiantes.length < this.maxEstudiantes) {
            this.estudiantes.push(estudiante);
        }
        else {
            console.log(`El aula está llena, no se puede agregar más estudiantes.`);
        }
    }
}
const profesorMatematicas = new Profesor("Profesor Matemáticas", 35, "H", "Matemáticas");
const aulaMatematicas = new Aula(1, 30, "Matemáticas", profesorMatematicas);
for (let i = 0; i < 30; i++) {
    const estudiante = new Estudiante(`Estudiante${i + 1}`, Math.floor(Math.random() * 10) + 15, i % 2 === 0 ? "H" : "M");
    aulaMatematicas.agregarEstudiante(estudiante);
}
aulaMatematicas.mostrarResultado();
