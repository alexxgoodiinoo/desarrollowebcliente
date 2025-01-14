$('#registroForm').submit(function(event){
    event.preventDefault();

    let nombre = $('#nombre').val().trim();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(nombre==''){
        $('#nombreError').css({
            "display": "block"
        });
    }else{
        $('#nombreError').css({
            "display": "none"
        });
    }

    if(!regexEmail.test(email)){
        $('#emailError').css({
            "display": "block"
        });
    }else{
        $('#emailError').css({
            "display": "none"
        });
    }

    if(password.length <= 6){
        $('#passwordError').css({
            "display": "block"
        });
    }else{
        $('#passwordError').css({
            "display": "none"
        });
    }
})