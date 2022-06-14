import {SearchRecipesRequest} from '../Requests/SearchRecipesRequest.js'
import {Recettes} from '../Render/Recettes.js'
import { getAllTags } from '../Requests/getAllTags.js';
import { Tags } from '../Render/Tags.js';

export class SelectRecettes {

    static by (character, listRecette, iconTagsSelected) {
        ////
        // Process de la recherche des recettes en fonction de
        // la saisie de l'utilsateur
        ///
        console.log("Recherche solution 2 ---");
        console.time("Temps de Rercherche des recettes");
        let recettes = new SearchRecipesRequest (character, 
                                                 listRecette,
                                                 iconTagsSelected);
 
        let resultFilterTag = recettes.searchRecipesByIconTagsSelected (iconTagsSelected);
        let resultTags = new getAllTags(resultFilterTag);
        console.log("---- Remonté des données -----");
        console.timeLog("Temps de Rercherche des recettes");
        //console.log(resultTags);
        Tags.Display(resultTags);
        Recettes.Display(resultFilterTag);
        console.log("nombre des recettes Selectionnées :"+ resultFilterTag.length+" //-- Temps total :-----");
        console.timeEnd("Temps de Rercherche des recettes");
        console.log("-------------------------------------");
    }
}

