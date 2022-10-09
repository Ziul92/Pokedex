let pokemons = []
let APIPokedex = `https://pokeapi.co/api/v2/pokemon/1`

requisicaoAPI()

async function requisicaoAPI() {
  const resposta = await fetch(APIPokedex)
  pokemons = await resposta.json()
  fazAparecerOPokemon(pokemons)
}
