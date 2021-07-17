const empleados = [
    { id: 1, nombre: 'Daniel' },
    { id: 2, nombre: 'Fernando' },
    { id: 3, nombre: 'David' },
];

const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id == id);
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }



}
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id == id);
    if (salario) {
        callback(null, salario.salario);
    } else {
        callback(`El usuario con id  ${id} no tiene salario asignado o no existe`);
    }
}
const id = 2;
// getEmpleado(id, (err, empleado) => {
//     if (err) {
//         console.error('Error');

//     } else {
//         console.log(empleado);
//     }
// });

// getSalario(id, (err, salario) => {
//     if (err) {
//         console.log('ERROR');
//         return (err);
//     }
//     // console.log('Salario');
//     console.log(salario);
//     return salario;
// });



getEmpleado(id, (err, empleado) => {
    if (err) {
        console.error('Error');

    } else {
        getSalario(id, (err, salario) => {
            if (err) {
                console.log('ERROR');
                return (err);
            }
            // console.log('Salario');
            console.log(`EL empleado ${empleado.nombre} con el id ${id} tiene un salario de ${salario}`);
            return salario;
        });
    }
});