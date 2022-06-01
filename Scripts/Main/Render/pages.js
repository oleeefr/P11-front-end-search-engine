
//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');
    let renderSearchInput = await import ('../../Library/Render/SelectRecettes.js');
    let functions = await import ('../../Utils/utils.js');
    let rendrerSearchTag = await import ('../../Library/Render/SelectTags.js');

    let fieldSearch = document.querySelector('#search-field');
    fieldSearch.addEventListener('input', 
       (event)=> {
            //event.preventDefault();
            let keyword = event.target.value;
            console.log("mot recherché :"+keyword);
            if (functions.Utils.triggerKeyWord(keyword)) {
               renderSearchInput.SelectRecettes.by(keyword, render.allRecettes);
            }
            else 
               render.recettesDisplay();
       }
    );

    let tags = document.querySelectorAll('.tags button');
    console.log(tags);
    tags.forEach((tag) => {
       tag.addEventListener(
          'click', (event)=> {
             let composedPathTag = event.composedPath();
             let baliseTagName = composedPathTag[5].id;
             let idNametag = event.currentTarget.id;
             console.log(event.currentTarget.id);
             console.log('bouton tag pressé..');
             rendrerSearchTag.SelectTags.modal(event.currentTarget.id);
            }
       );
    }); 

    render.recettesDisplay();
 }

 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
    console.error ("erreur 404...");
 }