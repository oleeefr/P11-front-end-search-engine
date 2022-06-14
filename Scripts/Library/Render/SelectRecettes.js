import {SearchRecipesRequest} from '../Requests/SearchRecipesRequest.js'
import {Recettes} from '../Render/Recettes.js'
import { getAllTags } from '../Requests/getAllTags.js';
import { Tags } from '../Render/Tags.js';

export class SelectRecettes {

    static by (character, listRecette, iconTagsSelected) {
        console.log("Recherche solution 1 ----");
        console.time("Temps de Rercherche des recettes");
        let recettes = new SearchRecipesRequest (character, 
                                                 listRecette,
                                                 iconTagsSelected);
       // let resultRecette = recettes.getResultRecipe ();
        //console.log(result);
        let resultFilterTag = recettes.searchRecipesByIconTagsSelected (iconTagsSelected);
        let resultTags = new getAllTags(resultFilterTag);
        console.log("---- Remonté des données -----");
        console.timeLog("Temps de Rercherche des recettes");
        //console.log(resultTags);
        Tags.Display(resultTags);
        Recettes.Display(resultFilterTag);
        console.log("---- Temps total :-----");
        console.timeEnd("Temps de Rercherche des recettes");
        console.log("-------------------------------------");
    }
}

