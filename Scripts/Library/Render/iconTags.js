import {Button_iconTag} from '../../Library/Render/Html/Button_iconTag.js';
import { Utils } from '../../Utils/utils.js';

export class iconTags {
   
    constructor(listIconTags) {
        this.listIconTags = listIconTags;
    }

    addKeyword (keyword, categoryTag) {

        this.keyword = keyword;
        this.categoryTag = Utils.filterNameTag(categoryTag);
        if (this.controlFindInArray (this.keyword)) {

            this.listIconTags.push({
                key:this.keyword, 
                type:this.categoryTag
            });
        }
        console.log(this.listIconTags);
        return this.listIconTags;
    }

    display () {

        let dysplayMenuIconTags = document.querySelector('#tags-selectionnes');
        dysplayMenuIconTags.innerHTML="";
        this.listIconTags.forEach(buttonIconTag => {
            let buttonHtmlTag = new Button_iconTag(buttonIconTag.key, buttonIconTag.type).render();
            dysplayMenuIconTags.innerHTML += buttonHtmlTag;
        });

        let selectAllButtonIconTags = document.querySelectorAll('#tags-selectionnes button');
        selectAllButtonIconTags.forEach(menuIcon =>{
            menuIcon.addEventListener('click', (event) => {
              console.log("fonction de suppression..");  
            })
        });
    }

    controlFindInArray (keyword) {

        let valid = true;
        this.listIconTags.forEach ( iconTag => {
            if (iconTag.key == keyword) {
                valid = false;
            } 
        });
        return valid;           
    }
}