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

        console.log(listTags);
        return listTags;
    } 

    #addAppliances () {
        let appliances = [];
        this.#recettes.forEach(recette => {
            let appliance = Utils.getFormatToLowerCaseAndLmString(recette.appliance);
            if (appliances.length==0 || !Utils.findInArray(appliance, appliances)) {
                // console.log('value :'+ appliance+' teb:'+appliances);
                appliances.push(appliance);
            }
           // console.log('tebAppliances :'+appliances); 
        });
        return appliances;
    }

    #addUstensils () {
        let results = [];
        this.#recettes.forEach(recette => {
            let ustensibles = recette.ustensils;
            ustensibles.forEach( ustensible => {
                if (results.length==0 || !Utils.findInArray(ustensible, results)) {
                    results.push(ustensible);
                }
            });
            //console.log('tebUtensibles :'+results);            
        });
        return results;
    }

    #addIngredients () {
        let results = [];
        this.#recettes.forEach (recette => {
            let ingredients = recette.ingredients;
            ingredients.forEach( element => {
                if (results.length== 0 || !Utils.findInArray(element.ingredient, results)) {
                    results.push(element.ingredient);
                }
            });
            //console.log('tebIngredients :'+results); 
        });
        return results;
    }
}