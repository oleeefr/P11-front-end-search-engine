import { Article_Recette } from "./Html/Article_recette.js";

export class Recettes {

    static Display (listDesRecettes) {

        let domAncrageRecette = document.querySelector('#card-list');
        let articles="";
        let articleRecette;

        listDesRecettes.forEach(recette => {
            articleRecette = new Article_Recette(recette.name, 
                                                 recette.description, 
                                                 recette.time,
                                                 recette.ingredients
                                                 ).render();
            //console.log(articleRecette);
            articles+= articleRecette;
            
        });
        domAncrageRecette.innerHTML = articles;
        return domAncrageRecette;
    }
}