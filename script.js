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
    let newTerm = termInput.value
    let newDef = definition.value 
    let newEntry = "";
    newEntry += `<h2>${newTerm}</h2>
                <p>${newDef}</p> 
                `
    container.innerHTML += newEntry;
    newEntry = "";
    termInput.value = "";
    definition.value= "";
}