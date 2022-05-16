// importation des fonctions de render des pages
import {index, notFound404} from './render/pages.js';

export async function handler (page) {

    switch (page) {
        case "" :
        case "index.html":
            index();
            break;

        default :
            notFound404();         
    }
}