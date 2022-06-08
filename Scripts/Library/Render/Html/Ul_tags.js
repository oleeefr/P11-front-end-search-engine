

export class Ul_tags {


    constructor (listTags) {


    }


    li (text) {
        const li = `<li class="list-inline-item format-font-li pb-3">${text}}</li>\n`;
    }

    ul (typeCategory, list_li) {
        const ul = `<ul id="tag-${typeCategory}-list" class="list-inline format-text-list d-flex flex-wrap">\n${list_li}</ul>`;
    }


}
