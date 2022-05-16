let ___PATH = '../../lib/render/';

//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');
    let util = import ('../../Utils/utils.js');

    let fieldSearch = document.querySelector('#search-field');
    let saisieSearch = fieldSearch.addEventListener("change", 
       function () {
        // let inputfield = util.getFormatLowerCaseAndLmString(fieldSearch.value);
            console.log("mot recherché :"+fieldSearch.value);
       }
    );
    render.recettesDisplay();
 }

 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
    console.error ("erreur 404...");
}