$('#searchInput').keyup(function(){
    let textoInput = $('#searchInput').val().trim();
    const productos = $('.product');
    productos.each(function(){
        if($(this).text().includes(textoInput)){
            $(this).fadeIn();
        }else{
            $(this).fadeOut();
        }
    })
})

$('#categoryFilter').change(function(){
    let valorSelect = $('#categoryFilter').val();
    const productos = $('.product');
    productos.each(function(){
        if($(this).attr("data-category").includes(valorSelect)){
            $(this).fadeIn();
        }else{
            $(this).fadeOut();
        }
    })
})