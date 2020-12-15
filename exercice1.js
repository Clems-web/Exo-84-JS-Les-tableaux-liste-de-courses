// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :


let liste = document.getElementById("listeCourse");
let champ = document.getElementById("user-text");
let buttonAdd = document.getElementById("button-add");
let buttonDel = document.getElementById("button-supp");
let divContenu = document.getElementById("tableau");
divContenu.innerHTML = articles.join(", ");
/* Add an item to your shopping list */

buttonAdd.addEventListener("click", function () {
    let newPuce = document.createElement("li");
    newPuce.innerHTML = champ.value;
    let bouton = document.createElement("button");
    let newSpan = document.createElement("span");
    newSpan.innerHTML = champ.value + ", ";

    bouton.innerHTML = "hide";
    bouton.style.marginLeft = "2rem";
    newPuce.append(bouton);
    liste.append(newPuce);
    divContenu.append(newSpan);

    /* Adding a button to hide one of the item */

    bouton.addEventListener("click", function () {
        newPuce.innerHTML = "";
    })


})

/* remove last item of your shopping list */

buttonDel.addEventListener("click", function () {
    liste.lastChild.remove();
    divContenu.lastChild.remove();
})

/* add property of "articles" in the shopping list */

for (let x = 0; x < articles.length; x++) {
    let newPuce = document.createElement("li");
    newPuce.innerHTML = articles[x];
    let bouton = document.createElement("button");

    bouton.innerHTML = "hide";
    bouton.style.marginLeft = "2rem";
    newPuce.append(bouton);
    liste.append(newPuce);
    bouton.addEventListener("click", function () {
        newPuce.innerHTML = "";
    })
}

/* articles's properties in div */







