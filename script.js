
const numberCards = 16
let openedCards = []
let cardTypes=[]
let counter = 0
let countergefunden = 0
let time = 0
let farbe = "lime" 
let punkte = 0




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
        c.id = index
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
                punkte = counter + time 
                alert(time)
                let time_gerundet = Math.round(punkte)
                alert(`Du hast ${time_gerundet} Punkte erreicht !`)
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






