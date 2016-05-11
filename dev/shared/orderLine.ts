/** Ingredient */

export class OrderLine {
    
    description: string;
    unitNetPrice: number;
    image: string;
    quantity : number;

/*
        "ofsOrderLineID": 29,
    "ofsOrderID": 15,
    "orderLineID": 1,
    "sku": 714455,
    "salesTaxRate": 0.00,
    "quantity": 1,
    "description": "Delivery - 3 to 7 Days",
    "unitNetPrice": 4.5800,
    "tax": 0.9200,
    "order": null
    

*/

      
    constructor(description: string, unitNetPrice: number, 
    image:string, quantity: number){
        this.description = description;
        this.unitNetPrice = unitNetPrice;
        this.image = image;
        this.quantity = quantity;
    }
   
}
