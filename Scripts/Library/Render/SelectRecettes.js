import {SearchRecipesRequest} from '../Requests/SearchRecipesRequest.js'
import {Recettes} from '../Render/Recettes.js'
import { getAllTags } from '../Requests/getAllTags.js';
import { Tags } from '../Render/Tags.js';

export class SelectRecettes {

    static by (character, listRecette) {
        let recettes = new SearchRecipesRequest (character, listRecette);
        let resultRecette = recettes.getResultRecipe ();
        //console.log(result);
        let resultTags = new getAllTags(resultRecette);
        //console.log(resultTags);
        Tags.Display(resultTags);
        Recettes.Display(resultRecette);
    }
}

