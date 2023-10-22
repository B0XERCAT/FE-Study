const pokemon = JSON.parse(window.localStorage.getItem("pokemonDetails"));
const main = document.querySelector("main");
const imgWrapper = document.createElement("div");
imgWrapper.setAttribute("class", "img-wrapper");
const image = document.createElement("img");
image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.detailIdx}.png`;
image.alt = pokemon.name;
imgWrapper.append(image);
const name = document.createElement("h2");
name.innerText = pokemon.name;
const table = document.createElement("table");
const tbody = document.createElement("tbody");
let isFirstKey = true;
for (let key in pokemon) {
  if (isFirstKey) {
    isFirstKey = false;
    continue;
  }
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const value = document.createElement("td");
  td.innerText = key;
  value.innerText = pokemon[key];
  if (typeof pokemon[key] == "object")
    value.innerText = pokemon[key].join(", ");
  tr.append(td, value);
  tbody.append(tr);
}
table.appendChild(tbody);
main.append(imgWrapper, name, table);
