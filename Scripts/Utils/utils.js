
export class Utils {

    // fonction static renvoyant une chaine de caractère en minuscule
    // et en enlevant les espaces au debut & à la fin
    static getFormatToLowerCaseAndLmString (value) {
        return value.toLowerCase().trim();
    }

    // fonction static renvoyant une chaine de caractère en minuscule
    static getFormatToLowerCase (value) {
        return value.toLowerCase();
    }

    // fonction static renvoyant true après que le seuil du nombre de
    // caractère soit atteint (3)
    static triggerKeyWord (input) {
        let trigger =3;
        return (input.length>= trigger);
    }

    // fonction static renvoyant True si elle trouve dans le tableau
    // le premier enregistrement corespondant au caractère en entrée
    static findInArray (character,array) {
        let valid = false;
        array.every ( (element) => {
            if (element.search(character)) {
                valid = true;
                return false;
            }
            return true;
        });
        return valid;
    }

    // fonction static renvoyant True si elle trouve dans une chaine de caratcère
    // le premier enregistrement corespondant au caractère en entrée
    static findInString (character, string) {
        if (string.search(character)>0)  {
            return true;
        }
        return false;
    }

    // fonction static renvoyant le nom de du type de tag
    static filterNameTag (value) {
            let result = value.toLowerCase().trim().split('-');
       return  result[1];
    }
}