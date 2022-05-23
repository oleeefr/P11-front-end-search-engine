
//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');
    let renderSearch = await import ('../../Library/Render/SelectRecettes.js');
    let functions = await import ('../../Utils/utils.js');

    let fieldSearch = document.querySelector('#search-field');
    fieldSearch.addEventListener('input', 
       (event)=> {
            //event.preventDefault();
            let keyword = event.target.value;
            console.log("mot recherché :"+keyword);
            if (functions.Utils.triggerKeyWord(keyword)) {
               renderSearch.SelectRecettes.by(keyword, render.allRecettes);
            }
            else 
               render.recettesDisplay();
       }
    );
    render.recettesDisplay();
 }

 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
    console.error ("erreur 404...");
}