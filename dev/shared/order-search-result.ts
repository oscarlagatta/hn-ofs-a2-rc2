/*
    This pattern of taking an obj?: any lets us simulate keyword arguments. The idea is that we can
    create a new OrderSearchResult and just pass in an object containing the keys we want to specify
*/

class OrderSearchResult {
    
    ofsOrderId: string;
    orderId: string;
    groupOrderNumber: string;
    firstName: string;
    secondName: string;
    orderDate: string;
    deliveryServiceId: number;
    
    constructor(obj?: any){
        this.ofsOrderId = obj && obj.ofsOrderId || null;
        this.orderId = obj && obj.orderId  || null;
        this.groupOrderNumber = obj && obj.groupOrderNumber  || null;
        this.firstName = obj && obj.firstName  || null;
        this.secondName = obj && obj.secondName  || null;
        this.orderDate = obj && obj.orderDate  || null;
        this.deliveryServiceId = obj && obj.deliveryServiceId || null;
    }
}