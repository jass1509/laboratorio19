function print(html){
  document.getElementById('output').innerHTML = html;
}

async function ej3(){
  const id = prompt("Ingresa un ID de Pokémon:");
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json());
  print(`<p>Nombre: ${data.name}</p>`);
}

function ej4(){
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(r => r.json())
    .then(d => print("<p>Altura: " + d.height + "<br>Peso: " + d.weight + "</p>"));
}

async function ej5(){
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(r => r.json());
  print("<p>Altura: " + d.height + "<br>Peso: " + d.weight + "</p>");
}

async function ej6(){
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/charizard").then(r => r.json());
  print("<p>URL: " + d.sprites.front_default + "</p><img src='" + d.sprites.front_default + "'>");
}

async function ej7(){
  const d = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then(r => r.json());
  print("<pre>" + JSON.stringify(d.results, null, 2) + "</pre>");
}

async function ej8(){
  const num = Math.floor(Math.random()*898)+1;
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + num).then(r => r.json());
  print("<p>Pokémon aleatorio: " + d.name + " (#" + d.id + ")</p>");
}

async function ej9(){
  const id = prompt("Ingresa ID o nombre de Pokémon:");
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(r => r.json());
  
  print(
    "<h2>" + d.name + " (#" + d.id + ")</h2>" +
    "<img src='" + d.sprites.front_default + "'>" +
    "<p>Peso: " + d.weight + "</p>" +
    "<p>Altura: " + d.height + "</p>" +
    "<p>Habilidades: " + d.abilities.map(a => a.ability.name).join(", ") + "</p>"
  );
}

async function ej10(){
  let html = "";
  for(let i=1; i<=10; i++){
    const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(r => r.json());
    
    html += 
      "<div style='border:1px solid #000; padding:10px; margin:10px; display:inline-block;'>" +
      "<h3>" + d.name + " (#" + d.id + ")</h3>" +
      "<img src='" + d.sprites.front_default + "'>" +
      "</div>";
  }
  print(html);
}

async function ej11(){
  const id = prompt("Ingresa nombre o ID:");
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(r => r.json());
  const tipos = d.types.map(t => t.type.name).join(", ");
  
  print(
    "<h2>" + d.name + "</h2>" +
    "<img src='" + d.sprites.front_default + "'>" +
    "<p>Tipos: " + tipos + "</p>"
  );
}

async function ej12(){
  const id = prompt("Pokémon para ver stats:");
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(r => r.json());
  
  let html = "<ul>";
  d.stats.forEach(s => {
    html += "<li>" + s.stat.name + ": " + s.base_stat + "</li>";
  });
  html += "</ul>";
  
  print(html);
}

async function ej13(){
  const id = prompt("Pokémon para stats detallados:");
  const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(r => r.json());
  
  let html = "<h2>" + d.name + "</h2><ul>";
  d.stats.forEach(s => {
    html += "<li>" + s.stat.name + ": " + s.base_stat + "</li>";
  });
  html += "</ul>";
  
  print(html);
}


let lista14 = [];
let inicio14 = 0;

async function cargar14(){
  for(let i=1; i<=12; i++){
    const d = await fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(r => r.json());
    lista14.push(d);
  }
}

function mostrar14(){
  let html = "";
  lista14.slice(inicio14, inicio14 + 3).forEach(p => {
    html +=
      "<div style='border:1px solid #000; padding:10px; margin:10px; display:inline-block;'>" +
      "<h3>" + p.name + "</h3>" +
      "<img src='" + p.sprites.front_default + "'>" +
      "<p>ID: " + p.id + "</p>" +
      "</div>";
  });

  html += "<br><button onclick='prev14()'>Anterior</button>" +
          "<button onclick='next14()'>Siguiente</button>";

  print(html);
}

async function ej14(){
  if(lista14.length === 0) await cargar14();
  mostrar14();
}

function next14(){
  if(inicio14 + 3 < lista14.length){
    inicio14 += 3;
    mostrar14();
  }
}

function prev14(){
  if(inicio14 - 3 >= 0){
    inicio14 -= 3;
    mostrar14();
  }
}