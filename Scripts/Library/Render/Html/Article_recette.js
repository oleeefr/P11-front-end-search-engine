

export class Article_Recette {

    constructor (titre, description,time, ingredients) {
        this.titre = titre;
        this.description = description;
        this.time = time;
        this.ingredientsHtml = this.getIngredients(ingredients);
    }

    render () {

        const div =`<article class="card recipe-card pb-3 mb-5">
          <div class="card-img-placeholder"></div>
          <div class="d-flex justify-content-between mt-3 px-3">
            <!-- dynamique: titre de la recette -->
            <h2 class="card-content-title w-50">${this.titre}</h2>
            <div class="d-flex font-weight-bold">
              <span class="far fa-clock fa-2x mt-2" aria-hidden="true"></span>
              <p class="ml-2 time">${this.time} min</p></div>
            </div>
            <div class="card-body d-flex justify-content-between card-content">
              <div class="ingredient-container">
                <!-- dynamique: ingrédient - quantity -->
                ${this.ingredientsHtml}
              </div>
              <!-- dnynamique: description de la recette-->
              <p class="description w-50">${this.description}</div>
          </article>`;

        return div;
    }

    getIngredients (ingredients) {

        let renderIngredients ="";
        ingredients.forEach(ingredient => {
            let unit = (ingredient.hasOwnProperty('unit'))? ingredient.unit:"";
            let div =`<p class="mb-0"><span class="font-weight-bold ingredient">${ingredient.ingredient}</span>: ${ingredient.quantity} ${unit}</p>\n`;
            renderIngredients+=div;
        });
        return renderIngredients;
    }

}