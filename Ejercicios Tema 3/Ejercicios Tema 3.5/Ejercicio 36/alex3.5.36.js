const usuario = {
	nombre: "Usuario",
	edad: 20,
	email: "usuario@test.com",
	password: "123456"
};

function verificarEdad(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario.edad >= 18) resolve(usuario);
            else reject('Edad incorrecta, tienes que ser mayor de 18 años');
        },1000);
    })
}

function verificarEmail(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRegex.test(usuario.email)) resolve(usuario);
            else reject('Email incorrecto');
        },1000);
    })
}

function verificarPassword(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passwordRegex = /^(?=.*[0-9]).{6,}$/;
            if(passwordRegex.test(usuario.password)) resolve(usuario);
            else reject('Contraseña incorrecta');
        },1000);
    })
}

function actualizarProgreso(progreso){
    const cajaProgreso = document.getElementById("cajaProgreso");
    cajaProgreso.textContent = progreso + "%";
}

verificarEdad(usuario)
    .then(user => {
        actualizarProgreso(33);
        return verificarEmail(user);
    })
    .then(user => {
        actualizarProgreso(66);
        return verificarPassword(user);
    })
    .then(user => {
        actualizarProgreso(100);
        console.log("Todas las validaciones pasadas correctamente por " + user.nombre);
    })
    .catch(error => {
        console.log(error);
    })