
//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');
    let renderSearchInput = await import ('../../Library/Render/SelectRecettes.js');
    let functions = await import ('../../Utils/utils.js');
    let rendrerSearchTag = await import ('../../Library/Render/SelectTags.js');
   
    // Gestion de saisie dans la barre de Recherche principal
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
   
    // Ouverture & Fermeture de la modale de tag
    let tags = document.querySelectorAll('.tags button');
    console.log(tags);
    tags.forEach((tag) => {
       tag.addEventListener(
          'click', (event)=> {

             console.log(event.currentTarget.id);
             console.log('bouton tag pressé..');
             rendrerSearchTag.SelectTags.modal(event.currentTarget.id);
            }
       );
    }); 

    // Gestion de la selection des mots tag de la liste
    let menuIconTagSelected = rendrerSearchTag.SelectTags.getMenuIconTags();
    let keywordsTags = document.querySelectorAll ('.container-list-tags ul');
    console.log(keywordsTags);
    keywordsTags.forEach( (keywordsTag) => {
      keywordsTag.addEventListener('click', (event) => {

         console.log(event.currentTarget.id);
         console.log('bouton mot tag Li pressé..');
         menuIconTagSelected = rendrerSearchTag.SelectTags.createKeywordIconTag( event.target.innerHTML, 
                                                                                 event.currentTarget.id,
                                                                                 menuIconTagSelected );
      });
    });

    render.recettesDisplay();
 }

 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
    console.error ("erreur 404...");
 }