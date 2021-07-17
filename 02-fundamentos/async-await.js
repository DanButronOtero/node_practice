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


const getinfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado.nombre} es de ${salario.salario}`;
    } catch (error) {
        throw error;
    }
}
const id = 3;
getinfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));