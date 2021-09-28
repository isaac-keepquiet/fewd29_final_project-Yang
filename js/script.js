//hamburger-button-js

function menuShow(){
  // console.log("show")
  document.getElementById('dropmenu').classList.add('show');
}

function menuHide(){
  // console.log("Hide")
  document.getElementById('dropmenu').classList.remove('show');
}
document.getElementById('hamburger-button').addEventListener('mouseover', menuShow);
document.getElementById('dropmenu').addEventListener('mouseleave', menuHide);


// strategies-js

let strategiesList = [
  "Promote our vision by holding community information stalls at local markets and festivals.",

  "Write letters to newspapers, thank you letters to politicians who promote sustainable renewable energy policies; inform radio.",

  "Lobby local leaders, State and Federal politicians on environmental and climate.",

  "Hold supporter Get Together events, eg. Film Nights, Conversation Picnics.",

  "Conduct monthly meetings."
]

const buttonLetter = document.querySelectorAll('.strategies-button');

function textSwitcher(event){
  console.log("button clicked!")
  let strategiesShowP = document.querySelectorAll('.eafe-strategies-p')[0]

  strategiesShowP.innerHTML = ""

  if(event.target.innerText === 'P') {
    const strategiesItem = document.createElement('p');
    strategiesShowP.innerHTML = strategiesList[0];
    strategiesShowDiv.appendChild(strategiesItem);
  }
  else if(event.target.innerText === 'W') {
    const strategiesItem = document.createElement('p');
    strategiesShowP.innerHTML = strategiesList[1];
    strategiesShowDiv.appendChild(strategiesItem);
  }
  else if(event.target.innerText === 'L') {
    const strategiesItem = document.createElement('p');
    strategiesShowP.innerHTML = strategiesList[2];
    strategiesShowDiv.appendChild(strategiesItem);
  }
  else if(event.target.innerText === 'H') {
    const strategiesItem = document.createElement('p');
    strategiesShowP.innerHTML = strategiesList[3];
    strategiesShowDiv.appendChild(strategiesItem);
  }
  else if(event.target.innerText === 'C') {
    const strategiesItem = document.createElement('p');
    strategiesShowP.innerHTML = strategiesList[4];
    strategiesShowDiv.appendChild(strategiesItem);
  }
}

for(let i=0; i < buttonLetter.length; i++) {
  buttonLetter[i].addEventListener('click', textSwitcher);
  // console.log(buttonLetter[i])
}


// eafe-header-hamburger-js  use for loop Unsuccessful

// var content=["What's On","About Us","On-going Projects","Join Us","help"]
// var button,menulist
// function menuinfo(){
//   button=document.getElementByTagName("button")[0];
//   menulist = document.getElementBId("menulist");
//   for(let i=0; i<content.length; i++){
//     let li = document.createElement("li";)
//     li.textContent = conten[i];
//     menulist.appendChild(li);
//   }
//   button.addEventListener("click", menuShow)
// }
//
// function menuShow() {
//   menulist.style.display = "block";
// }
