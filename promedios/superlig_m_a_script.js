const data = [
  { "equipo": "Carita F.C.", "promedio": 1.50 },
  { "equipo": "Guris HC", "promedio": 1.32 },
  { "equipo": "Racing VN", "promedio": 1.10 },
  { "equipo": "Real Patapim", "promedio": 0.95 }
];

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
