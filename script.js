// function select(el) {
//     el.classList.toggle("card_flipped");
//   }

// let elem = document.querySelectorAll(".card")

// for (const i of elem) {
//     i.addEventListener("click", select)

// }

let kartListe = document.querySelectorAll('.card')

kartListe.forEach(Element => {
  Element.addEventListener('click', (event) => {
    event.target.classList.toggle("card_flipped")
  })
})