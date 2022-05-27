var txtSearch = document.getElementById('txt-search')
var imgPokemon = document.getElementById('imgPokemon')
var namePokemon = document.getElementById('pokemon-name')
var IDPokemon = document.getElementById('pokemon-id')
var typePokemon = document.getElementById('pokedex-type')
var hpPokemon = document.getElementById('pokemon-hp')
var attackPokemon = document.getElementById('pokemon-attack')
var defensePokemon = document.getElementById('pokemon-defense')
var saPokemon = document.getElementById('pokemon-special-attack')
var sdPokemon = document.getElementById('pokemon-special-defense')
var speedPokemon = document.getElementById('pokemon-speed')

const typeColors = {
    electric: '#D9C241',
    normal: '#B09398',
    fire: '#FF675C',
    fairy: '#D166CA',
    water: '#0596C7',
    ice: '#7CAFBF',
    rock: '#999799',
    flying: '#2C9979',
    grass: '#4A9681',
    psychic: '#C97792',
    ghost: '#561D25',
    bug: '#7EC47E',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F'
}

window.onload = function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${random(1, 898)}`)
        .then(data => data.json())
        .then(response => dataPokemon(response))
        .catch(err => notFound())

}

const searchPokemon = event => {
    event.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${txtSearch.value.toLowerCase().replace(/^(0+)/g, '')}`)
        .then(data => data.json())
        .then(response => dataPokemon(response))
        .catch(err => notFound())
}

const dataPokemon = data => {
    const sprite = data.sprites.front_default
    const { stats, types } = data
    namePokemon.textContent = data.name
    imgPokemon.setAttribute('src', sprite)
    IDPokemon.textContent = data.id
    pokemonType(types)
    statsPokemon(stats)
}

const pokemonType = types => {
    typePokemon.innerHTML = ''
    types.forEach(type => {
        const typeTextElement = document.createElement("div")
        typeTextElement.style.background = typeColors[type.type.name]
        typeTextElement.textContent = type.type.name
        typePokemon.appendChild(typeTextElement)
    })
}

const statsPokemon = stats => {
    hpPokemon.textContent = stats[0].base_stat
    attackPokemon.textContent = stats[1].base_stat
    defensePokemon.textContent = stats[2].base_stat
    saPokemon.textContent = stats[3].base_stat
    sdPokemon.textContent = stats[4].base_stat
    speedPokemon.textContent = stats[5].base_stat
}

const notFound = () => {
    namePokemon.textContent = 'Not Found';
    imgPokemon.setAttribute('src', '');
    IDPokemon.textContent = ''
    typePokemon.innerHTML = ''
    hpPokemon.textContent = ''
    attackPokemon.textContent = ''
    defensePokemon.textContent = ''
    saPokemon.textContent = ''
    sdPokemon.textContent = ''
    speedPokemon.textContent = ''
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}