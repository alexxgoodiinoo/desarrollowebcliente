document.addEventListener("DOMContentLoaded", () => {
    const formularioTareas = document.getElementById("taskForm");
    const entradaTarea = document.getElementById("taskInput");
    const selectorPrioridad = document.getElementById("prioritySelect");
    const listaTareas = document.getElementById("taskList");
    const selectorFiltro = document.getElementById("filterSelect");

    let tareas = JSON.parse(localStorage.getItem("tareas")) || []; //Sirve para cargar las tareas

    const guardarTareas = () => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const renderizarTareas = (filtro = "todas") => {
        listaTareas.innerHTML = "";
        const tareasFiltradas = tareas.filter((tarea) => {
            if (filtro === "pendientes") return !tarea.completada;
            if (filtro === "completadas") return tarea.completada;
            return true; 
        });

        tareasFiltradas.forEach((tarea, indice) => {
            const li = document.createElement("li");
            li.className = tarea.completada ? "completed" : "";

            const textoTarea = document.createElement("span");
            textoTarea.textContent = `${tarea.texto} (${tarea.prioridad})`;
            li.appendChild(textoTarea);

            const botonCompletar = document.createElement("button");
            botonCompletar.textContent = tarea.completada ? "Desmarcar" : "Completar";
            botonCompletar.addEventListener("click", () => {
                tarea.completada = !tarea.completada;
                guardarTareas();
                renderizarTareas(selectorFiltro.value);
            });
            li.appendChild(botonCompletar);

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", () => {
                tareas.splice(indice, 1);
                guardarTareas();
                renderizarTareas(selectorFiltro.value);
            });
            li.appendChild(botonEliminar);

            listaTareas.appendChild(li);
        });
    };

    formularioTareas.addEventListener("submit", (event) => {
        event.preventDefault();

        const nuevaTarea = {
            texto: entradaTarea.value,
            prioridad: selectorPrioridad.value,
            completada: false,
        };

        tareas.push(nuevaTarea);
        guardarTareas();
        renderizarTareas(selectorFiltro.value);

        entradaTarea.value = "";
    });

    selectorFiltro.addEventListener("change", () => {
        renderizarTareas(selectorFiltro.value);
    });

    renderizarTareas();
});