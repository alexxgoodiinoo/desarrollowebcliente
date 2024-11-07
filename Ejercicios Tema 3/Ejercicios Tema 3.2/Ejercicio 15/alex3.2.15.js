document.getElementById('mouseInfo')
    .addEventListener('mousemove', function(event) { 
        const x = event.clientX; 
        const y = event.clientY; 
        this.textContent = `Coordenadas del mouse: (${x}, ${y})`;
    });