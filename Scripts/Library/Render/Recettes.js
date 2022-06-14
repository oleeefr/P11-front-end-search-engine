import { Article_Recette } from "./Html/Article_recette.js";

export class Recettes {

    static Display (listDesRecettes) {

        let domAncrageRecette = document.querySelector('#card-list');
        let articles="";
        let articleRecette;

        for (const recette of listDesRecettes) {
            articleRecette = new Article_Recette(recette.name, 
                                                 recette.description, 
                                                 recette.time,
                                                 recette.ingredients
                                                 ).render();
            //console.log(articleRecette);
            articles+= articleRecette;
        }

        if (listDesRecettes.length==0)
            articles= this.DisplayNoResult();

        domAncrageRecette.innerHTML = articles;
        return domAncrageRecette;
    }

    static DisplayNoResult () {
        return "<p class='h3'>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>";
    }
}