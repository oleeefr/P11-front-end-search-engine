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
        }

        searchRecipesByCharact () {

           let listeRecetteFilter = this.#listeRecette.filter( recette => { 

                let nomRecette = Utils.getFormatToLowerCase(recette.name);
                let descriptionRecette = Utils.getFormatToLowerCase(recette.description);
                let ingredientsRecette = recette.ingredients;

                return ( Utils.findInString (this.#character,nomRecette) ||
                         Utils.findInString (this.#character,descriptionRecette) ||
                         this.searchRecipesInIngredients (ingredientsRecette,this.#character)
                    );  
            });

            return listeRecetteFilter;
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
            if (iconTags.length>0) {

                let recipesFilterTag = this.#recetteResult.filter(recipe => {

                    return this.searchRecipesByMenuIconTags (iconTagsSelected, recipe);
                });

                return recipesFilterTag;
            } else {

                return this.#recetteResult;
            }
        }
}