import { recettes } from "../Models/dao.js";
import { getAllTags } from "../../Library/Requests/getAllTags.js";

export const ttesRecettes = recettes;

export const ttesTags = new getAllTags(recettes);
