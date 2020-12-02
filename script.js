// const numberCards = 16
// let openCards = []
// let cardTypen = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]




// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }


// shuffle(cardTypen)
// console.log(cardTypen)






// // Karten (divs) hinzufügen
// let container = document.querySelector('#card-deck')
// for (let index = 0; index < numberCards; index++) {
  
//   let element = document.createElement('div')
//   element.classList.add("card")
//   container.appendChild(element)
//   element.innerHTML = cardTypen[index]
//   //element.innerHTML += index % 2 + 1
// }


// // Karten Umdrehen 
// let kartListe = document.querySelectorAll('.card')




// kartListe.forEach(Element => {
//   Element.addEventListener('click', (event) => {
//     event.target.classList.toggle("card_flipped")
//     event.type = cardTypen[i += 1]
//   })
// })


  
/*
1) Leeres Array zum Speichern der aufgedeckten Karten (openedCards)
2) Karten richtig erzeugen (type)[1,1,2,2,3,3,4,4.........8,8]
3) Karten mischen (shuffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler
6) Kartenlogik:
    6.1) prüfen ob karte bereits found + 
    prüfen wie viele Karten bereits aufgedeckt sind? (0,1,2)
    6.2) wenn weniger als 2 -> aufdecken
    6.3) Erkennen ob zwei gleiche Karten 
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken
*/


const numberCards = 16
let openedCards = []
let cardTypes=[]
let counter = 0
let countergefunden = 0
let time = 0

for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}

function flipp(event){
    //if(!this.classList.contains('found'))
        openCard(this)
    //this.classList.toggle('flipped')
}
function openCard(c){
    //alert(c.innerHTML)
    if(openedCards.length < 2){
      c.classList.toggle("card_flipped")
      openedCards.push(c)
      if(openCard.length = 2){
        if(openedCards[0].type == openedCards[1].type){
          window.setTimeout(
            ()=>{
              openedCards.pop().classList.toggle("found")
              openedCards.pop().classList.toggle("found")
              


              countergefunden += 1
              console.log(countergefunden)
              document.querySelector('.CounterGefunden').textContent = `Gefunden Paare: ${countergefunden}`
              

              if (countergefunden == 8) {
                alert(`Du hast alle innerhalb von ${time}sek alle Paare gefunden!!`)
                location.reload();
              }
            }
            ,
            1000
          )
        }
        else{
          window.setTimeout(
            ()=>{
              openedCards.pop().classList.toggle("card_flipped")
              openedCards.pop().classList.toggle("card_flipped")
              counter += 1
              console.log(counter)
              document.querySelector('.Counter').textContent = `Versuche: ${counter}`
              

              /*
              var el = document.createElement("p");
              document.appendChild(el);
              el.innerText
              */  
            },
            1000
          )
        }
      }
    }

}

var Timer = setInterval(function(){
  time += 1
}, 1000)



function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}






