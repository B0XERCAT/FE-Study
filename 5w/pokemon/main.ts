const pokemonDetailsJSON = window.localStorage.getItem("pokemonDetails");
if (pokemonDetailsJSON !== null) {
  const pokemon = JSON.parse(pokemonDetailsJSON);
  const main = document.querySelector("main") as HTMLElement;
  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("class", "img-wrapper");
  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.detailIdx}.png`;
  image.alt = pokemon.name;
  imgWrapper.append(image);
  const h2Name = document.createElement("h2");
  h2Name.innerText = pokemon.name;
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
  main.append(imgWrapper, h2Name, table);
}
