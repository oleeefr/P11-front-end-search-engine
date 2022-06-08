import {ttesRecettes, ttesTags} from '../Requests/getRecipesAndAllTags.js'
import {Recettes} from '../../Library/Render/Recettes.js'
import { Tags } from '../../Library/Render/Tags.js'; 


export const recettesDisplay = function () {return Recettes.Display(ttesRecettes)};

export const tagsDisplay = function () {return Tags.Display(ttesTags)};

export const allRecettes = ttesRecettes;

export const allTags = ttesTags;
