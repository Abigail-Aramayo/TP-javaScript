const calcularPromedio = (notas) => 
    notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const filtrarAprobados = (alumnos) => 
    alumnos.filter(alumno => alumno.nota >= 6);

const formatearAlumnos = (alumnos) => 
    alumnos.map(al => `Nombre: ${al.nombre} - Nota: ${al.nota}`);
const buscarAlumno = (alumnos, nombre) => 
    alumnos.find(al => al.nombre === nombre);

const alumnos = [
    { nombre: "leonel", nota: 6},
    { nombre: "Elias", nota: 4 },
    { nombre: "Luciana", nota: 10},
    { nombre: "Patricio", nota: 8},
    { nombre: "Luana", nota: 5},
];

console.log(calcularPromedio([6,4,10,8,5]));
console.log(filtrarAprobados(alumnos));
console.log(formatearAlumnos(alumnos));
console.log(buscarAlumno(alumnos, "Elias"));