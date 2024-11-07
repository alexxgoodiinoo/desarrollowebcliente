document.getElementById('openWindowButton')
    .addEventListener('click', function() { 
        const newWindow = window.open('https://www.example.com', '_blank', 'width=600,height=400'); 
        setTimeout(function() { 
            newWindow.close(); 
        }, 3000); 
    });