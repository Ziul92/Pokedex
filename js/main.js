let pokemons = []
let escolha = document.querySelector("[data-escolha]")
let botao = document.querySelector("[data-botao]")


async function requisicaoAPI(pokemon) {
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  pokemons = await resposta.json()
  fazAparecerOPokemon(pokemons)
}


botao.addEventListener("click", () => {
  requisicaoAPI(escolha.value)
  escolha.focus()
})