// fonction permettant de récuperer le nom de la page 
// à partir du lien de Url (String)
export function getPageUrl (pathname) {

    const url = pathname.split("/");

    return url[url.length-1];
}

// fonction permettant de récupérer un paramètre d'entrées
// s'ils existent d'un lien Url (string)
export function getParamPageUrl (nameParam) {
    let pageParams = new URL(document.location).searchParams;
    console.log(pageParams.get(nameParam));
        
    return pageParams.get(nameParam);
}