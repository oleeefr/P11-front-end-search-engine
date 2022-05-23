import {ttesRecettes} from '../Requests/getRecipesAndAllTags.js'
import {Recettes} from '../../Library/Render/Recettes.js'


export const recettesDisplay = function () {return Recettes.Display(ttesRecettes)};

export const allRecettes = ttesRecettes;
