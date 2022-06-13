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
        let blockTag = document.querySelector("#tag-"+idTag);
        let inputTagInit =document.querySelector(nameInput);
            inputTagInit.value="";
        let nameTagClasses = nameTag.classList;
        let blockTagClasses = blockTag.classList;
        nameTagClasses.toggle("dropdown-parent");
        nameTagClasses.toggle("dropdown-parent-active");
        blockTagClasses.toggle("col");
        blockTagClasses.toggle("col-7"); ;
      
        //console.log(etatTagActive);
        //let etatBlockTag = blockTag.toggle("col");
        // let etatblockTagActive = blockTag.toggle("col-7");
        this.closeOtherTags(idTag);

    }

    static closeOtherTags (selectTag) {

        let allTags = document.querySelectorAll(".openClose");
        allTags.forEach( (tag) => {
            let parentElementTagIdName = Utils.filterNameTag(tag.parentElement.parentElement.id);
            if (selectTag != parentElementTagIdName) {
                tag.className="openClose dropdown-parent";
                tag.parentElement.parentElement.className="col";
            }
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
            let fCharacter = Utils.getFormatToLowerCaseAndLmString(character);
            let fTag = Utils.getFormatToLowerCaseAndLmString(tag);
            let valid = Utils.findInString (fCharacter,fTag);
            if (valid) this.listeTagsFilter.push(tag);
        }
        listOfTagsClone.set(tagCategory, this.listeTagsFilter);
        console.log(listOfTagsClone);
        Tags.Display(listOfTagsClone);
    }

}