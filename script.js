let container = document.querySelector('#card-deck')
for (let index = 1; index < 17; index++) {
  let element = document.createElement('div')
  element.classList.add("card")
  container.appendChild(element)
  element.innerHTML += index
}



// Karten Umdrehen 
let kartListe = document.querySelectorAll('.card')

kartListe.forEach(Element => {
  Element.addEventListener('click', (event) => {
    event.target.classList.toggle("card_flipped")
  })
})

//_______________________________________________________

