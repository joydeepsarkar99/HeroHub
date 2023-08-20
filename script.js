const newButton = document.getElementById('newButton')
const heroImage = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')


const superHeroToken = '1052080229104891'
const baseUrl = `https://superheroapi.com/api.php/${superHeroToken}`


const getSuperHeroByRandom = (id) => {
    fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(json =>{ 
        showHeroInfo(json)
    })
}

const getSuperHeroBySearch = (name) => {
    fetch(`${baseUrl}/search/${name}`)
    .then(response => response.json())
    .then(json =>{ 
        console.log(json)
        showHeroInfo(json.results[0])
    })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }

const showHeroInfo = (character) => {
    const name = `<h1>${character.name}</h1>`
    const img = `<img src="${character.image.url}" height=270 width=280/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join("")

    heroImage.innerHTML = `${name}${img}${stats}`
}


const randomHero = () => {
    return Math.floor(Math.random()*731)
}
newButton.onclick = () => getSuperHeroByRandom(randomHero())
searchButton.onclick = () => getSuperHeroBySearch(searchInput.value)






