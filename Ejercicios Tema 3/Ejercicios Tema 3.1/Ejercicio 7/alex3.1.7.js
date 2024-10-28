fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
        const filteredAlbums = data.filter(album => album.userId === 3);
        filteredAlbums.forEach(album => {
            console.log(album.title);
        });
    })
    .catch(error => console.error("Error:", error));
