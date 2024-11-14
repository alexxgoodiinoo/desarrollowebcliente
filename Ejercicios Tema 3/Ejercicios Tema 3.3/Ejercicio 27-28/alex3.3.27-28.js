//EJERCICIO 27
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('basicForm');
    const entradaArchivo = document.getElementById('basicFileInput');
    const divError = document.getElementById('basicError');
    const divExito = document.getElementById('basicSuccess');
    const vistaPreviaImagen = document.getElementById('imagePreview');
    const tamañoMaxArchivo = 1 * 1024 * 1024; // 1MB en bytes

    entradaArchivo.addEventListener('change', function () {
        divError.style.display = 'none';
        divExito.style.display = 'none';
        vistaPreviaImagen.style.display = 'none';

        const archivo = entradaArchivo.files[0];

        if (!archivo) {
            mostrarError('No se ha seleccionado ningún archivo');
            return;
        }

        if (!archivo.type.startsWith('image/')) {
            mostrarError('El archivo no es una imagen');
            return;
        }

        if (archivo.size > tamañoMaxArchivo) {
            mostrarError('El archivo supera el tamaño máximo de 1MB');
            return;
        }

        mostrarExito('El archivo es válido');

        const lector = new FileReader();
        lector.onload = function (e) {
            vistaPreviaImagen.src = e.target.result;
            vistaPreviaImagen.style.display = 'block';
        }
        lector.readAsDataURL(archivo);
    });

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    function mostrarError(mensaje) {
        divError.textContent = mensaje;
        divError.style.display = 'block';
    }

    function mostrarExito(mensaje) {
        divExito.textContent = mensaje;
        divExito.style.display = 'block';
    }
});

//EJERCICIO 28
document.addEventListener('DOMContentLoaded', function () {
    const zonaArrastre = document.getElementById('dropZone');
    const entradaArchivo = document.getElementById('advancedFileInput');
    const listaArchivos = document.getElementById('fileList');
    const divError = document.getElementById('advancedError');
    const divExito = document.getElementById('advancedSuccess');
    const barraProgreso = document.getElementById('uploadProgress');
    const tamañoMaxArchivo = 5 * 1024 * 1024;

    zonaArrastre.addEventListener('click', function () {
        entradaArchivo.click();
    });

    zonaArrastre.addEventListener('dragover', function (event) {
        event.preventDefault();
        zonaArrastre.classList.add('dragover');
    });

    zonaArrastre.addEventListener('dragleave', function () {
        zonaArrastre.classList.remove('dragover');
    });

    zonaArrastre.addEventListener('drop', function (event) {
        event.preventDefault();
        zonaArrastre.classList.remove('dragover');
        manejarArchivos(event.dataTransfer.files);
    });

    entradaArchivo.addEventListener('change', function () {
        manejarArchivos(entradaArchivo.files);
    });

    function manejarArchivos(archivos) {
        listaArchivos.innerHTML = '';
        divError.style.display = 'none';
        divExito.style.display = 'none';

        let archivosValidos = [];
        for (let i = 0; i < archivos.length; i++) {
            let archivo = archivos[i];
            let esValido = validarArchivo(archivo);
            mostrarInfoArchivo(archivo, esValido);
            if (esValido) {
                archivosValidos.push(archivo);
            }
        }

        if (archivosValidos.length > 0) {
            divExito.textContent = `${archivosValidos.length} archivo(s) válido(s) listo(s) para subir.`;
            divExito.style.display = 'block';
        }
    }

    function validarArchivo(archivo) {
        if (!archivo) {
            mostrarError('No se ha seleccionado ningún archivo');
            return false;
        }

        const tiposValidos = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!tiposValidos.includes(archivo.type)) {
            mostrarError(`El archivo ${archivo.name} no es un tipo permitido`);
            return false;
        }

        if (archivo.size > tamañoMaxArchivo) {
            mostrarError(`El archivo ${archivo.name} supera el tamaño máximo de 5MB`);
            return false;
        }

        return true;
    }

    function mostrarInfoArchivo(archivo, esValido) {
        const divArchivo = document.createElement('div');
        divArchivo.classList.add('file-info');
        divArchivo.textContent = `${archivo.name} (${(archivo.size / 1024 / 1024).toFixed(2)} MB) - ${esValido ? 'Válido' : 'Inválido'}`;
        if (esValido) {
            divArchivo.classList.add('valid');
        } else {
            divArchivo.classList.add('invalid');
        }
        listaArchivos.appendChild(divArchivo);
    }

    function mostrarError(mensaje) {
        divError.textContent = mensaje;
        divError.style.display = 'block';
    }

    window.subirArchivos = function () {
        const archivos = entradaArchivo.files;
        if (archivos.length === 0) {
            mostrarError('No hay archivos para subir');
            return;
        }
        barraProgreso.style.display = 'block';
        barraProgreso.value = 0;
        let progreso = 0;
        const intervalo = setInterval(function () {
            progreso += 10;
            barraProgreso.value = progreso;

            if (progreso >= 100) {
                clearInterval(intervalo);
                barraProgreso.style.display = 'none';
                divExito.textContent = 'Archivos subidos con éxito';
                divExito.style.display = 'block';
            }
        }, 100);
    }
});