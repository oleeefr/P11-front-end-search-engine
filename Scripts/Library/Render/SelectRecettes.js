import {SearchRecipesRequest} from '../Requests/SearchRecipesRequest.js'
import {Recettes} from '../Render/Recettes.js'
import { getAllTags } from '../Requests/getAllTags.js';
import { Tags } from '../Render/Tags.js';

export class SelectRecettes {

    static by (character, listRecette, iconTagsSelected) {
        let recettes = new SearchRecipesRequest (character, 
                                                 listRecette,
                                                 iconTagsSelected);
       // let resultRecette = recettes.getResultRecipe ();
        //console.log(result);
        let resultFilterTag = recettes.searchRecipesByIconTagsSelected (iconTagsSelected);
        let resultTags = new getAllTags(resultFilterTag);
        //console.log(resultTags);
        Tags.Display(resultTags);
        Recettes.Display(resultFilterTag);
    }
}

