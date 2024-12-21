document.addEventListener("DOMContentLoaded", () => {
  const tablaFetch = document.getElementById("tablaFetch");
  const tablaAxios = document.getElementById("tablaAxios");
  const formulario = document.getElementById("formulario");

  function usuariosPorFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button class="delete-btn" onclick="${deleteUser(user.id)})">Eliminar</button></td>
          `;
          tablaFetch.appendChild(tr);
        });
      });
  }

  function usuariosPorAxios() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.data.forEach((user) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button class="delete-btn" onclick="${deleteUser(user.id)})">Eliminar</button></td>
          `;
        tablaAxios.appendChild(tr);
      });
    });
  }

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((user) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><button class="delete-btn" onclick="${deleteUser(user.id)})">Eliminar</button></td>
      `;
        tablaFetch.appendChild(tr);
        tablaAxios.appendChild(tr);
      });
  });

  function deleteUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
  };
  usuariosPorFetch();
  usuariosPorAxios();
});