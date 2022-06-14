import { Utils } from "../../Utils/utils.js";

export class getAllTags {

    #recettes;
    
    constructor (recettes) {
        this.#recettes = recettes;
       return this.#list();
    }

    #list () {

        let listTags = new Map ();
        listTags.set('appareils',this.#addAppliances());
        listTags.set('ustensibles',this.#addUstensils());
        listTags.set('ingredients',this.#addIngredients());

        // console.log(listTags);
        return listTags;
    } 

    #addAppliances () {
        let appliances = [];
        for (const recette of this.#recettes) {
            // let appliance = Utils.getFormatToLowerCaseAndLmString(recette.appliance);
            let appliance = recette.appliance;
            if (appliances.length==0 || !Utils.findInArray(appliance, appliances)) {
                // console.log('value :'+ appliance+' teb:'+appliances);
                appliances.push(appliance);
            } 
        }
        //console.log('tebAppliances :'+appliances);
        return appliances.sort();
    }

    #addUstensils () {
        let results = [];
        for(const recette of this.#recettes) {
            let ustensibles = recette.ustensils;
            for (const ustensible of ustensibles) {
                if (results.length==0 || !Utils.findInArray(ustensible, results)) {
                    results.push(ustensible);
                }
            }
            // console.log('tabUtensiles :'+results);  
        }

        return results.sort();
    }

    #addIngredients () {
        let results = [];
        for (const recette of this.#recettes) {
            let ingredients = recette.ingredients;
            for (const element of ingredients) {
                if (results.length== 0 || !Utils.findInArray(element.ingredient, results)) {
                    results.push(element.ingredient);
                }
            }
            // console.log('tab-Ingredients :'+results); 
        }

        return results.sort();
    }
}