import {OrderLine} from './orderLine';

export class Order {
    ofsOrderId: string;
    orderId: string;
    groupOrderNumber: string;
    firstName: string;
    secondName: string;
    orderDate: string;
    deliveryServiceId: number;
    orderLines: OrderLine[];
    
    constructor(
        ofsOrderId: string,
        orderId: string,
        groupOrderNumber: string,
        firstName: string,
        secondName: string,
        orderDate: string,
        deliveryServiceId: number,
        orderLines: OrderLine[]
    ){
        this.ofsOrderId = ofsOrderId;
        this.orderId = orderId;
        this.groupOrderNumber = groupOrderNumber;
        this.firstName = firstName;
        this.secondName = secondName;
        this.orderDate = orderDate;
        this.deliveryServiceId = deliveryServiceId;
        this.orderLines = orderLines
        
    }
}
