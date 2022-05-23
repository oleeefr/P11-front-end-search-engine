import {Utils} from '../../Utils/utils.js';

export class SearchRecipesRequest  {

        
        constructor (character,listRecette) {
            this.character = Utils.getFormatToLowerCaseAndLmString(character);
            this.listeRecette = listRecette;
            this.recetteResult = [];
            // this.criteres = ["name","description","ingredient"];
            this.criteres = ["name","description"];
            this.recetteResult = this.searchRecipesByCharact ();
        }

        searchRecipesByCharact () {
            
            this.listeRecetteFilter = [];
            this.listeRecette.forEach((recette) => {
               if (this.searchRecipesByCriteria(recette)) 
                    this.listeRecetteFilter.push(recette) ;
            });
            return this.listeRecetteFilter;
        }

        searchRecipesByCriteria (recetteObj) {
            let valid = false;
            let recette;

            this.criteres.every((critere) => {
                switch (critere) {
                
                    case'name':
                        recette = Utils.getFormatToLowerCase(recetteObj.name);
                        valid = Utils.findInString (this.character,recette);
                        if (valid) return false;
                        break;
                    case'description':
                        recette = Utils.getFormatToLowerCase(recetteObj.description);
                        valid = Utils.findInString (this.character,recette);
                        if (valid) return false;
                        break;
                    case'ingredient':

                        break;
                }
                return true;
            });
            return valid;
        }

        searchRecipesInIngredients (ingredients) {

        }

        getResultRecipe () {
            return this.recetteResult;
        }
}