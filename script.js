import {pokemon} from './pokemon.js'

//pictures of cards
let pokepics = pokemon.map(function(p){
  let pic = document.createElement("img")
  let name = document.createElement("li")
  let hp = document.createElement("li")
  let type = document.createElement("li")
  let frontCard = document.createElement("div")
  let statList = document.createElement("ul")
  let backCard = document.createElement("div")
  let card = document.createElement("div")

  pic.src = p.imageUrl;
  name.textContent = "Name: " + p.name
  hp.textContent = "HP: " + p.hp
  type.textContent = "Type: " + p.types

  statList.appendChild(name)
  statList.appendChild(hp)
  statList.appendChild(type)
  frontCard.appendChild(pic)
  backCard.appendChild(statList)
  card.appendChild(frontCard)
  card.appendChild(backCard)

  backCard.className = "card__face card__face--back"
  frontCard.className = "card__face card__face--front";
  card.className= "card"

  return card
})
let cardList = document.getElementById("cardList")
pokepics.forEach((pic) => {
  cardList.appendChild(pic)
})

let cardButton = document.querySelector('button');
cardButton.addEventListener('click', function() {
  let newCardFront = document.createElement("div")
  let newCardBack = document.createElement("div")
  let newCard = document.createElement("div")

  newCardFront.textContent = "New Card -- Front"
  newCardFront.className = "card__face card__face--front"
  newCardBack.textContent = "New Card -- Back"
  newCardBack.className = "card__face card__face--back"
  newCard.className = "card"

  newCard.appendChild(newCardFront)
  newCard.appendChild(newCardBack)
  cardList.appendChild(newCard)

  newCard.addEventListener('mouseover', function() {
    newCard.classList.toggle('is-flipped');
  })

})

var cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('mouseover', function() {
    card.classList.toggle('is-flipped');
  })
})



console.log(stats)