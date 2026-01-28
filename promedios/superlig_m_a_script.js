fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const tabla = document.createElement("table");
    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";

    const header = document.createElement("tr");
    header.innerHTML = "<th>Equipo</th><th>Promedio</th>";
    tabla.appendChild(header);

    data.forEach(item => {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${item.equipo}</td><td>${item.promedio}</td>`;
      tabla.appendChild(fila);
    });

    document.body.appendChild(tabla);
  })
  .catch(error => {
    document.body.innerHTML += "<p>Error cargando datos</p>";
    console.error(error);
  });
