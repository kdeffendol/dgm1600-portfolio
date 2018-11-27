import {films} from './assets/films.js'
import {planets} from './assets/planets.js'
//import {getRandomPlanet} from './assets/functions.js'

let filmList = document.querySelector("#film-list");
let planetList = document.querySelector("#planet-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})
function getRandomPlanet() {
    var randomId =  Math.floor((Math.random()*planets.length))
    let planet = document.getElementById("planet");
    planet.textContent = planets[randomId].name;
   // console.log(planet) testing
}
document.getElementById("mybutton").onclick = getRandomPlanet;