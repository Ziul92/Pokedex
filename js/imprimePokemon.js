const card = document.querySelector("[data-pokemon]")

function fazAparecerOPokemon(pokemon) {
  let nomeDosPokemons = pokemon.name
  let numeroDosPokemons = pokemon.id
  let tipoPokemon1 = pokemon.types[0].type.name
  let tipoPokemon2 = pokemon.types[1].type.name
  let imagemDosPokemons = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroDosPokemons}.png`
  card.innerHTML = `
  <section class="card" data-pokemon>
    <img class="card__imagem" src="${imagemDosPokemons}" alt="Aqui vai ficar a imagem do PKM">
    <h1 class="card__pokemon">${nomeDosPokemons}</h1>
    <h2 class="card__numero">#${numeroDosPokemons}</h1>
    <div class="card__tipos">
      <p class="card__tipos--primeiro">${tipoPokemon1}</p>
      <p class="card__tipos--segundo">${tipoPokemon2}</p>
    </div>
  </section>
  `
}