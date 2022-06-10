import {Button_iconTag} from '../../Library/Render/Html/Button_iconTag.js';
import { Utils } from '../../Utils/utils.js';
import { SelectRecettes } from './SelectRecettes.js';
import { allRecettes } from '../../Main/controller/index.js';

export class iconTags {
   
    constructor(listIconTags) {
        this.listIconTags = listIconTags;
    }

    addKeyword (keyword, categoryTag) {

        this.keyword = keyword;
        this.categoryTag = Utils.filterNameTag(categoryTag);
        if (this.controlFindInIconTagArray (this.keyword).valid) {

            this.listIconTags.push({
                key:this.keyword, 
                type:this.categoryTag
            });
        }
        console.log(this.listIconTags);
        return this.listIconTags;
    }

    removeKeyword (keyword) 
    {
        let indexOfTag = this.controlFindInIconTagArray(keyword).indexOf;
        if (indexOfTag>=0) {
            this.listIconTags.splice (indexOfTag, 1);
        }
        this.display(); 
    }

    display () {

        let dysplayMenuIconTags = document.querySelector('#tags-selectionnes');
        dysplayMenuIconTags.innerHTML="";
        this.listIconTags.forEach(buttonIconTag => {
            let buttonHtmlTag = new Button_iconTag(buttonIconTag.key, buttonIconTag.type).render();
            dysplayMenuIconTags.innerHTML += buttonHtmlTag;
        });

        let selectAllButtonIconTags = document.querySelectorAll('#tags-selectionnes button');
        let fieldSearch = document.querySelector('#search-field');
        selectAllButtonIconTags.forEach(menuIcon =>{
            menuIcon.addEventListener('click', (event) => {
              console.log("fonction de suppression..");
              let mainSearchField = fieldSearch.value;
              let keyword = event.target.innerText.trim();
              this.removeKeyword(keyword);
              SelectRecettes.by (mainSearchField, allRecettes, this.listIconTags);
            })
        });
    }

    controlFindInIconTagArray (keyword) {

        let valid = true;
        let indexOf = 0;
        this.listIconTags.every ( iconTag => {
            if (iconTag.key == keyword) {
                valid = false;
                return false;
            }
            indexOf ++;
            return true 
        });
        return {valid, indexOf};           
    }
}