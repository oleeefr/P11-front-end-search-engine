import {Utils} from '../../Utils/utils.js';
import {iconTags} from '../../Library/Render/iconTags.js';


export class SelectTags {


    static modal (nameTag) {
        this.open(nameTag);
    } 
    
    
    static open(tag) {
        console.log("dans la methode selectTags..");
        let idTag = Utils.filterNameTag(tag);
        let idTags = "#tag-"+idTag+" .openClose";
        let nameTag = document.querySelector(idTags);
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

}