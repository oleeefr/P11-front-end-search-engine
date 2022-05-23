import {Utils} from '../../Utils/utils.js';

export class SearchRecipesRequest  {

        #character;
        #listeRecette;
        #recetteResult= [];
        #criteres = ["name","description","ingredients"];
        //#criteres = ["name","description"];

        constructor (character,listRecette) {
            this.#character = Utils.getFormatToLowerCaseAndLmString(character);
            this.#listeRecette = listRecette;
            this.#recetteResult = this.searchRecipesByCharact ();
        }

        searchRecipesByCharact () {

            this.listeRecetteFilter = [];
            this.#listeRecette.forEach((recette) => {
               if (this.searchRecipesByCriteria(recette)) 
                    this.listeRecetteFilter.push(recette) ;
            });
            return this.listeRecetteFilter;
        }

        searchRecipesByCriteria (recetteObj) {
            let valid = false;
            let recette;
            let ingredients;

            this.#criteres.every((critere) => {
                switch (critere) {
                
                    case'name':
                        recette = Utils.getFormatToLowerCase(recetteObj.name);
                        valid = Utils.findInString (this.#character,recette);
                        if (valid) return false;
                        break;
                    case'description':
                        recette = Utils.getFormatToLowerCase(recetteObj.description);
                        valid = Utils.findInString (this.#character,recette);
                        if (valid) return false;
                        break;
                    case'ingredients':
                        ingredients = recetteObj.ingredients;
                        valid = this.searchRecipesInIngredients (ingredients);
                        if (valid) return false;
                        break;
                }
                return true;
            });
            return valid;
        }

        searchRecipesInIngredients (ingredients) {
            let valid = false;
            ingredients.every((ingredientNom) => {
                let ingredient = Utils.getFormatToLowerCase(ingredientNom.ingredient);
                if (Utils.findInString (this.#character,ingredient)) {
                    valid = true;
                    return false;};
                return true;
            });
            return valid;
        }

        getResultRecipe () {
            return this.#recetteResult;
        }
}