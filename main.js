import {films} from './assets/films.js'
import {planets} from './assets/planets.js'

let filmList = document.querySelector("#film-list");
let planetList = document.querySelector("#planet-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})

