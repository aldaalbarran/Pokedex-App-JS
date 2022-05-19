var txtSearch = document.getElementById('txt-search')
var imgPokemon = document.getElementById('imgPokemon')
var namePokemon = document.getElementById('pokemon-name')
var IDPokemon = document.getElementById('pokemon-id')

const searchPokemon = event => {
    event.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${txtSearch.value}`)
        .then(data => data.json())
        .then(response => dataPokemon(response))
        .catch(err => renderNotFound())
}

const dataPokemon = data => {
    const sprite =  data.sprites.front_default
    const { stats, types } = data
    namePokemon.textContent = data.name
    imgPokemon.setAttribute('src', sprite)
    IDPokemon.textContent = data.id
}

