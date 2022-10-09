const imagem = document.querySelector("[data-pokemon]")

function fazAparecerOPokemon(pokemon) {
  let numero = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
  imagem.innerHTML = `
  <section class="card" data-pokemon>
    <img class="card__imagem" src="${numero}" alt="Aqui vai ficar a imagem do PKM">
    <h1 class="card__pokemon">${pokemon.name}</h1>
    <h2 class="card__numero">#${pokemon.id}</h1>
    <div class="card__tipos">
      <p class="card__tipos--primeiro">${pokemon.types[0].type.name}</p>
      <p class="card__tipos--segundo">TIPO 2</p>
    </div>
  </section>
  `
}