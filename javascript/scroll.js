// Script utilisé pour les animations scroll
// ////////////////////////////////////////////

// VARIABLE DE L'ESSAI #1
// ----------------------------
// window.addEventListener(
//   "scroll",
//   () => {
//     document.body.style.setProperty(
//       "--scroll",
//       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//     );
//   },
//   false
// );

// SECTION DE L'ESSAI #2
// ----------------------------
const animation_invisible = document.querySelectorAll(".invisible");

// Selon la documentation, ils proposent de créer un observateur pour
// le scroll de l'utilisateur.
// Source de la documentation:
// https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/

const observer = new IntersectionObserver(
  (entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add("scroll-invisible");
      } else {
        // entree.target.classList.remove("scroll-invisible");
      }
    });
  },
  { threshold: 0.5 }
);

// Si l'observateur de la page voit le texte, il lui donne une classe pour le faire apparaitre.
// La partie du threshold est pour donner un temps avant de faire apparaitre le texte
// sur la page (un délais d'apparition)

// Il faut ensuite créer une loop pour que l'animation est toujours lieu.
// Attention! Dangereux de jouer avec les loops!

for (let i = 0; i < animation_invisible.length; i++) {
  const elements = animation_invisible[i];

  observer.observe(elements);
}
