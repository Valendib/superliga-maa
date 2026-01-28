// SUPERLIG M.A. – script principal

const DATA_URL = 'data.json';

async function cargarDatos() {
  const res = await fetch(DATA_URL + '?t=' + new Date().getTime());
  const data = await res.json();

  mostrarFecha(data);
  mostrarPartidos(data);
  mostrarTabla(data);
  mostrarGoleadores(data);
  mostrarSanciones(data);
  mostrarCampeones(data);
}

function mostrarFecha(data) {
  const f = document.getElementById('fecha');
  if (f) f.innerText = 'Fecha ' + data.fechaActual;
}

function mostrarPartidos(data) {
  const cont = document.getElementById('partidos');
  if (!cont) return;
  cont.innerHTML = '<h3>Partidos</h3>';

  if (data.partidos.length === 0) {
    cont.innerHTML += '<p>Aún no hay partidos cargados</p>';
    return;
  }

  data.partidos.forEach(p => {
    cont.innerHTML += `<p>${p.local} ${p.gl} - ${p.gv} ${p.visitante}</p>`;
  });
}

function mostrarTabla(data) {
  const t = document.getElementById('tabla');
  if (!t) return;

  let html = '<h3>Tabla</h3><table width="100%">';
  html += '<tr><th>Equipo</th><th>PTS</th><th>PJ</th><th>DG</th></tr>';

  const equiposOrdenados = [...data.equipos].sort((a,b) =>
    b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc)
  );

  equiposOrdenados.forEach(e => {
    const dg = e.gf - e.gc;
    html += `<tr><td>${e.nombre}</td><td>${e.pts}</td><td>${e.pj}</td><td>${dg}</td></tr>`;
  });

  html += '</table>';
  t.innerHTML = html;
}

function mostrarGoleadores(data) {
  const g = document.getElementById('goleadores');
  if (!g) return;
  if (data.goleadores.length === 0) {
    g.innerHTML = '<p>Sin goles aún</p>';
    return;
  }
  g.innerHTML = data.goleadores.map(j => `${j.nombre} (${j.equipo}) - ${j.goles}`).join('<br>');
}

function mostrarSanciones(data) {
  const s = document.getElementById('sanciones');
  if (!s) return;
  if (data.sanciones.length === 0) {
    s.innerHTML = '<p>No hay sanciones</p>';
    return;
  }
  s.innerHTML = data.sanciones.map(j => `${j.nombre} (${j.equipo}) - ${j.tipo}`).join('<br>');
}

function mostrarCampeones(data) {
  const c = document.getElementById('campeones');
  if (!c) return;
  if (data.campeones.length === 0) {
    c.innerHTML = '<p>Aún sin campeones</p>';
    return;
  }
  c.innerHTML = data.campeones.join('<br>');
}

cargarDatos();
setInterval(cargarDatos, 10000); // 🔁 actualiza cada 10 segundos
