export class Product {
    constructor(title, makat,size,picture,description,price,tags,highlight,id=0) {
        this.title=title
        this.makat=makat;
        this.size = size;
        this.price= price;
        this.picture= picture;
        this.description=description
        this.tags= tags;
        this.highlight=highlight;
        this._id=id
    }


}
  
