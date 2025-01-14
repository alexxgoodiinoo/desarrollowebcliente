$('#addTask').click(function(){
    let tarea = $('#newTask').val().trim();
    const lista = $('#taskList');

    if(tarea!=''){
        const nuevaTarea = $("<li style='display:none;'>" + tarea + " <button class='completar'>Completar</button> <button class='eliminar'>Eliminar</button></li>");
        lista.append(nuevaTarea);
        nuevaTarea.fadeIn();
    }else{
        alert('No hay na bro');
    }
});

$(document).on('click', '.completar', function(){
    $(this).parent().toggleClass('completed');
})

$(document).on('click', '.eliminar', function(){
    $(this).parent().fadeOut(function(){
        $(this).parent().remove();
    });
})