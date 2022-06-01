import {Utils} from '../../Utils/utils.js';

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

}