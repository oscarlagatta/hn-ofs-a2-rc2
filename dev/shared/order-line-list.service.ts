import {Injectable} from '@angular/core';
import {OrderLine} from './OrderLine';
import {ORDERLINES_LIST} from '../mock/order-lines-list';

@Injectable()
export class OrderLineListService {
    getAllOrderLines(){
        return ORDERLINES_LIST;
    }
    
    getOrderLine(index: number){
        return ORDERLINES_LIST[index];
    }
    
    getIndexOfOrderLine(orderLine: OrderLine){
        return ORDERLINES_LIST.indexOf(orderLine);
    }
    
    insertOrderLine(orderLine: OrderLine){
        ORDERLINES_LIST.push(orderLine);
    }    
    
    InsertOrderLines(orderLines: OrderLine[]){
        Array.prototype.push.apply(ORDERLINES_LIST, orderLines);
    }
    
    deleteOrderLine(orderLine: OrderLine){
        ORDERLINES_LIST.splice(ORDERLINES_LIST.indexOf(orderLine), 1);        
    }
    
    updateItem(index: number, orderLine: OrderLine ){
        ORDERLINES_LIST[index] = orderLine;
    }
    
}