// setTimeout(() => console.log('hola mundo'), 1000);


const getUsuarioByID = (id, callback) => {
    const user = {
        id,
        nombre: 'Daniel'
    }
    setTimeout(() => callback(user), 1500);
}

getUsuarioByID(1, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});