import {Utils} from '../../Utils/utils.js';
import { SelectTags } from '../Render/SelectTags.js';
export class SearchRecipesRequest  {

        #character;
        #listeRecette;
        #recetteResult= [];
        #criteres = ["name","description","ingredients"];
        
        constructor (character, listRecette, iconTagsSelected) {
            this.#character = Utils.getFormatToLowerCaseAndLmString(character);
            this.#listeRecette = listRecette;
            this.#recetteResult = this.searchRecipesByCharact ();
           // this.searchRecipesByIconTagsSelected(iconTagsSelected);
        }

        searchRecipesByCharact () {

            let listeRecetteFilter = [];
            for (const recette of this.#listeRecette) {
                if (this.searchRecipesByCriteria(recette)) 
                listeRecetteFilter.push(recette) ;
            }

            return listeRecetteFilter;
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
                        valid = this.searchRecipesInIngredients (ingredients,this.#character);
                        if (valid) return false;
                        break;
                }
                return true;
            });
            return valid;
        }

        searchRecipesByMenuIconTags (iconTags, recipe) {
            let valid = false;

            iconTags.every((iconTag) => {
               let icontagType = iconTag.type;
               let iconKeyTag =  iconTag.key;

               switch (icontagType) {
                    case 'appareils':
                        let appareil = recipe.appliance;
                        if (iconKeyTag == appareil) {
                            valid = true;
                        } else {
                            valid = false;
                            return false;
                        }
                        break
                    case 'ingredients':
                        let ingredients = recipe.ingredients;
                        valid = this.searchRecipesInIngredients (ingredients, iconKeyTag);
                        if (!valid) return false;
                        break
                    case 'ustensibles':
                        let ustensibles = recipe.ustensils;
                        valid = Utils.findInArray(iconKeyTag, ustensibles);
                        if (!valid) return false;
                        break
               } 
               return true;
            });
           return valid;
        }

        searchRecipesInIngredients (ingredients,param) {
            let valid = false;
            param =  Utils.getFormatToLowerCaseAndLmString(param);
            ingredients.every((ingredientNom) => {
                let ingredient = Utils.getFormatToLowerCase(ingredientNom.ingredient);
                if (Utils.findInString (param ,ingredient)) {
                    valid = true;
                    return false;};
                return true;
            });
            return valid;
        }

        searchRecipesByIconTagsSelected (iconTagsSelected) {
            let iconTags = iconTagsSelected; 
            //console.log('dans searchRecipesByIconTagsSelected contenu de menucTags: '+iconTags);
            
            if (iconTags.length>0) {
                let recipesFilterTag = [];
                for(const recipe of this.#recetteResult) {
                    if (this.searchRecipesByMenuIconTags(iconTagsSelected, recipe))
                        recipesFilterTag.push(recipe);
                }
                    //this.#recetteResult = recipesFilterTag;
                return recipesFilterTag;
            } else {
                return this.#recetteResult;
            }
        }

        getResultRecipe () {
            return this.#recetteResult;
        }
}