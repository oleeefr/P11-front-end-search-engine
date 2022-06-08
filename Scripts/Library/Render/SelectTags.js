import {Utils} from '../../Utils/utils.js';
import {iconTags} from '../../Library/Render/iconTags.js';
import { Tags } from './Tags.js';

export class SelectTags {


    static modal (nameTag) {
        this.open(nameTag);
    } 
    
    
    static open(tag) {

        console.log("dans la methode selectTags..");
        let idTag = Utils.filterNameTag(tag);
        let idTags = "#tag-"+idTag+" .openClose";
        let nameTag = document.querySelector(idTags);
        let nameInput = "input[name="+idTag+"]";
        let inputTagInit =document.querySelector(nameInput);
            inputTagInit.value="";
        let nameTagClasses = nameTag.classList;
        let etatTag = nameTagClasses.toggle("dropdown-parent");
        let etatTagActive = nameTagClasses.toggle("dropdown-parent-active");
        this.closeOtherTags(idTag);
    }


    static closeOtherTags (selectTag) {

        let allTags = document.querySelectorAll(".openClose");
        allTags.forEach( (tag) => {
            let parentElementTagIdName = Utils.filterNameTag(tag.parentElement.parentElement.id);
            if (selectTag != parentElementTagIdName) tag.className="openClose dropdown-parent";
        });

    }

    static createKeywordIconTag (keyword, tagCategory, menuListIconTags) {

        let resultIconTag;
        console.log("création en cours d'un icon-tag : "+keyword);
        let tabIconTag = new iconTags(menuListIconTags);
        resultIconTag = tabIconTag.addKeyword(keyword,tagCategory);
        tabIconTag.display();
        console.log("fin de traitement..");
        return resultIconTag;
    }

    static getMenuIconTags () {

        let iconTags = []
        return iconTags;
    }

    static filterListTags (character, tagCategory, listOfTags) {
        
        console.log('dans la méthode filterListTag :'+character);
        this.listeTagsFilter = [];
        let listOfTagsClone = new Map(listOfTags);
        let listOfTag = listOfTagsClone.get(tagCategory);
        for (const tag of listOfTag) {
            let valid = Utils.findInString (character,tag);
            if (valid) this.listeTagsFilter.push(tag);
        }
        listOfTagsClone.set(tagCategory, this.listeTagsFilter);
        console.log(listOfTagsClone);
        Tags.Display(listOfTagsClone);
    }

}