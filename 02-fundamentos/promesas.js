const empleados = [
    { id: 1, nombre: 'Daniel' },
    { id: 2, nombre: 'Fernando' },
    { id: 3, nombre: 'David' },
];

const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id == id);
        empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);

    });

}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id == id);
        salario ? resolve(salario) : reject('Salario no encontrado');
    });
}

const id = 3;
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));
// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado: ${empleado.nombre} tiene un salario de: ${salario.salario}`);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado con en nombre ${nombre} tiene un salario de ${salario.salario}`))
    .catch(err => console.log(err));