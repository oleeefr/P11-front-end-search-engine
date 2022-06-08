
import { Utils } from '../../../Utils/utils.js';

export class Button_iconTag {

    constructor (keyword, categoryTag) {
        this.keyword =(keyword.trim());
        this. backgroundColor = new Map();
        this.backgroundColor.set ('ingredients',"btn-primary");
        this.backgroundColor.set('appareils',"btn-success");
        this.backgroundColor.set('ustensibles',"btn-danger");
        this.categoryTag = categoryTag;
    }

    render () {
        const button =`<button class="btn ${this.backgroundColor.get(this.categoryTag)}">
        ${this.keyword}
        <span class="far fa-times-circle ml-2" aria-hidden="true"></span>
      </button>`;
      
        return button;
    }
}