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

buttonAdd.addEventListener("click", function () {
    
})

for (x = 0; x < articles.length; x++) {
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







