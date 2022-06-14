

export class Li_tags {

    #render;

    constructor (listTags) {
        
        let li_Html = "";
        listTags.forEach((contentLi) => {
            li_Html += this.#li(contentLi);
        });
       this.#render = li_Html;
    }


    #li (text) {
        const li = `<li class="list-inline-item format-font-li pb-3">${text}</li>\n`;
        return li;
    }

    render (){
        return this.#render;
    }


}
