// Ce script sert à cacher ou afficher une section du header on click.
// ///////////////////////////////////////////////////////////////////

// Aller chercher les deux parties touchés par l'intéraction
let plusinfos = document.querySelector(".plusinfos");
// // console.log(plusinfos);
let lesoptions = document.querySelector(".optionsplus");
// // console.log(lesoptions);
let restecorps = document.querySelector(".restecorps");

// Ajout du eventListener
plusinfos.addEventListener("click", Interactinfos);
restecorps.addEventListener("click", Horsheader);

// Fonction
/* 
Lorsque je clique, si le menu n'est pas ouvert, je l'ouvre. 
Si le menu est ouvert et que je reclique dessus, il se ferme.
Si je clique ailleurs, il se ferme aussi.
*/

// Premier essai
// function Interactinfos() {
//   if (ouvert == false) {
//     lesoptions.classList.add("cache");
//   } else if (ouvert == true) {
//     lesoptions.classList.remove("cache");
//   }
// }

function Interactinfos() {
  if (lesoptions.classList.contains("cache") == false) {
    lesoptions.classList.add("cache");
  } else if (lesoptions.classList.contains("cache") == true) {
    lesoptions.classList.remove("cache");
  }
}

function Horsheader() {
  //   console.log("click");
  if (lesoptions.classList.contains("cache") == false) {
    lesoptions.classList.add("cache");
  }
}

// Cette partie est appliqué pour le menu sur mobile
// /////////////////////////////////////////////////

// Aller chercher les deux parties touchés par l'intéraction
let boutonmenu = document.querySelector(".bouton4");
// // console.log(plusinfos);
let boutonx = document.querySelector(".bouton5");
// // console.log(lesoptions);
let menumobile = document.querySelector(".menu_mobile");

// Ajout du eventListener
boutonmenu.addEventListener("click", Ouvrirmenu);
boutonx.addEventListener("click", Fermermenu);

function Ouvrirmenu() {
  // if (menumobile.classList.contains("cache") == false) {
  //   menumobile.classList.add("cache");
  // } else if (lesoptions.classList.contains("cache") == true) {
  //   lesoptions.classList.remove("cache");
  // }

  menumobile.classList.remove("cache");
  boutonmenu.style.display = "none";
  boutonx.style.display = "block";
}

function Fermermenu() {
  menumobile.classList.add("cache");
  boutonmenu.style.display = "block";
  boutonx.style.display = "none";
}
