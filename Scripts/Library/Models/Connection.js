export class Connection {
  
    constructor(route) {
        
         this.recettes = fetch (route)
            .then (
                function (response) { 
                    if (response.ok) {
                        return response.json();
                    };
                }
            ).then (
                function (result) {
                    return result;
                }
            ).catch (
                function (error) {console.error ('connection échouée..')}
            );
        return this.recettes;
   }

  static toData(route) {
      
      if (!this.instance) {
        this.instance = new Connection (route);
        return this.instance;
      }
  }
}