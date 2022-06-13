
//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');
    let renderSearchInput = await import ('../../Library/Render/SelectRecettes.js');
    let functions = await import ('../../Utils/utils.js');
    let rendrerSearchTag = await import ('../../Library/Render/SelectTags.js');
   
    // liste des tags selectionnés pour la Recherche
    let menuIconTagSelected = rendrerSearchTag.SelectTags.getMenuIconTags();
    
    // Gestion de saisie dans la barre de Recherche principal
    let fieldSearch = document.querySelector('#search-field');
    fieldSearch.addEventListener('input', 
       (event)=> {
            let keyword = event.target.value;
            console.log("mot recherché recette:"+keyword);
            if (!functions.Utils.triggerKeyWord(keyword)) keyword="";
            renderSearchInput.SelectRecettes.by(keyword, render.allRecettes, menuIconTagSelected);
            // render.recettesDisplay();
       }
    );
   
    // Ouverture & Fermeture de la modale de tag
    let tags = document.querySelectorAll('.tags button');
    let tagInputs = document.querySelectorAll('.tags input');
    //console.log(tags);
    tags.forEach((tag) => {
       tag.addEventListener('click', (event)=> {
             let tagsSelected = (menuIconTagSelected.length==0 || menuIconTagSelected.length==undefined)? false: true;
             console.log(event.currentTarget.id);
             console.log('bouton tag pressé..');
             rendrerSearchTag.SelectTags.modal(event.currentTarget.id, tagsSelected);
            }
       );
    });
    
    // Gestion de saisie dans la barre de Recherche des Tags
    tagInputs.forEach((input) => {
       input.addEventListener('input', (event)=> {
         let keyword = event.target.value;
         let tagNameInput = event.currentTarget.name;
            console.log("mot recherché tag :"+keyword);
            rendrerSearchTag.SelectTags.filterListTags(keyword,
                                                       tagNameInput, 
                                                       render.allTags);
       });
    });

    // Gestion de la selection des mots tag de la liste
    let keywordsTags = document.querySelectorAll ('.container-list-tags ul');
    //console.log(keywordsTags);
    keywordsTags.forEach( (keywordsTag) => {
      keywordsTag.addEventListener('click', (event) => {

         console.log(event.currentTarget.id);
         console.log('bouton mot tag Li pressé..');
         let mainSearchField = fieldSearch.value;
         menuIconTagSelected = rendrerSearchTag.SelectTags.createKeywordIconTag( event.target.innerHTML, 
                                                                                 event.currentTarget.id,
                                                                                 menuIconTagSelected );
         renderSearchInput.SelectRecettes.by(mainSearchField, render.allRecettes, menuIconTagSelected);
      });
    });
    render.tagsDisplay();

    render.recettesDisplay();
 }

 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
    console.error ("erreur 404...");
 }