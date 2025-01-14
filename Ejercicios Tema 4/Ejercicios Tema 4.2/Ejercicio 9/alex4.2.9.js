$("#loadUsers").click(function () {
  let tabla = $("#usersTable");
  let loading = $("#loading");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (respuesta) {
      loading.css({
        display: "block",
      });
      setTimeout(() => {
        respuesta.forEach((usuario) => {
          let fila = `<tr><td>${usuario.name}</td><td>${usuario.email}</td></tr>`;
          tabla.append(fila);
          loading.css({
            display: "none",
          });
        });
      }, 2000);
    },
    error: function (xhr, status, error) {
      console.error("Error en la solicitud");
    },
  });
});