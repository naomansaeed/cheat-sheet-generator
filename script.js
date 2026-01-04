const addCardForm = document.getElementById("add-card-form");
const termInput = document.getElementById("term");
const definition = document.getElementById("definition");
const container = document.getElementById("cards-container")

addCardForm.addEventListener('submit', function(event){
    event.preventDefault(); // without this page appears to refresh on button click.
    //console.log("Submit Button Pressed.");
    createCard();
});

function createCard() {
    let newTerm = document.createElement("h2");
    newTerm.innerText = termInput.value;
    //console.log(newTerm);
    let newDef = document.createElement("p") 
    newDef.innerText = definition.value
    let newCard = document.createElement("div")
    newCard.setAttribute('class', 'card');
    newCard.appendChild(newTerm);
    newCard.appendChild(newDef);
    /*newCard += `
                <h2>${newTerm}</h2>
                <p>${newDef}</p> 
                ` */
    container.appendChild(newCard);    
    //console.log(container);
    //container.innerHTML += newEntry;
    //newCard.innerHTML = "";
    termInput.value = "";
    definition.value= "";
}