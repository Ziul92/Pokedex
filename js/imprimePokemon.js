const card = document.querySelector("[data-pokemon]")

function fazAparecerOPokemon(pokemon) {
  let nomeDosPokemons = pokemon.name
  let numeroDosPokemons = pokemon.id
  let imagemDosPokemons = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroDosPokemons}.png`

  function verificaTipo(){
    const cardTipos = document.querySelector(".card__tipos")
    pokemon.types.forEach(tipo => {
      cardTipos.innerHTML += `<p class="card__tipos--estilo">${tipo.type.name}</p>`
    })
  }


  card.innerHTML = `
  <section class="card" data-pokemon>
    <img class="card__imagem" src="${imagemDosPokemons}" alt="Aqui vai ficar a imagem do PKM">
    <h1 class="card__pokemon">${nomeDosPokemons}</h1>
    <h2 class="card__numero">#${numeroDosPokemons}</h1>
    <div class="card__tipos">
    </div>
  </section>
  `
  verificaTipo()
  console.log(pokemon)
}