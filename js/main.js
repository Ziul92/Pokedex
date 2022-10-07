let pokemons = []
const nome = "pikachu"
const APIPokedex = `https://pokeapi.co/api/v2/pokemon/1`
console.log(pokemons)

requisicaoAPI()


async function requisicaoAPI() {
  const resposta = await fetch(APIPokedex)
  pokemons = await resposta.json()
  console.log(pokemons)
  console.log(pokemons.name)
  console.log(pokemons.id)
  fazAparecerOPokemon(pokemons)
}

const imagem = document.querySelector("[data-pokemon]")

function fazAparecerOPokemon(pokemon) {
  imagem.innerHTML = `
  <h1>${pokemon.name}</h1>
  <h2>${pokemon.id}</h1>
  `
  
}