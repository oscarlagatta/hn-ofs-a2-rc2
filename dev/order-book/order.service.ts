import {Injectable} from "@angular/core";
import {Order} from '../shared/order';
import {ORDERS} from '../mock/orders';

@Injectable()

export class OrderService{
    private _orderUrl = "http://localhost:52875/api/orders";
    
    constructor(){    }
    /*
    getAllRestfullOrders(): Observable<Order[]> {
        return this._http.get(this._orderUrl)
                .map((response: Response) => <Order[]>response.json())
                .do(data =>console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    getRestfullOrder(orderId: string) : Observable<Order> {
        return this._http.get(this._orderUrl+'/'+ orderId)
        .map((response: Response) => <Order>response.json());
    }


    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

     */

    getAllOrders(){
        return ORDERS;
    }
    
    getOrder(index: number){
        console.log('index ' + index);
        console.log(ORDERS[index]);
        return ORDERS[index];
    }
    
    getOrderIndex(order: Order){
        var tmpOrder = ORDERS.indexOf(order);
        return ORDERS.indexOf(order);
    }
    
    insertOrder(order: Order){
        return ORDERS.push(order);
    }
    
    deleteOrder(index: number){
        ORDERS.splice(index,1);
    }
    
    updateOrder(index: number, order: Order){
        ORDERS[index] = order;
    }
}