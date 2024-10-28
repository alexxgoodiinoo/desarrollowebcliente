document.addEventListener("DOMContentLoaded", function() {
    const nombre = prompt("Introduce un nombre:");

    if (nombre) {
        fetch(`https://api.nationalize.io/?name=${nombre}`)
            .then(response => response.json())
            .then(data => {
                if (data.country && data.country.length > 0) {
                    const sortedCountries = data.country.sort((a, b) => b.probability - a.probability);
                    const paisConMayorProbabilidad = sortedCountries[0].country_id;

                    alert(`El país con mayor probabilidad para el nombre ${nombre} es: ${paisConMayorProbabilidad}`);
                } else {
                    alert(`No se encontraron resultados para el nombre: ${nombre}`);
                }
            })
            .catch(error => console.error("Error:", error));
    } else {
        alert("No se ingresó un nombre válido.");
    }
});
