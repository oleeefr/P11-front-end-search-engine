import { Li_tags } from "./Html/Li_tags.js"

export class Tags {


    static Display (listDesTags) {

        for (const [keyTag, tagvalues] of listDesTags) {         
   
            let ul = document.querySelector("#tag-"+keyTag+"-list");
            ul.innerHTML="";
            ul.innerHTML += new Li_tags(tagvalues).render();
           // console.log(ul.innerHTML);
        } 
    }

}