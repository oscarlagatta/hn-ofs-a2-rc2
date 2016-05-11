import { Component, OnInit } from '@angular/core';
import {OrderLine} from '../shared/orderLine';
import {OrderLineListService} from '../shared/order-line-list.service';


@Component({
    selector: 'hn-order-lines-list-edit',
    template: `
        <h1>{{orderLine === null ? 'Add new Order Line' : 'Edit Order Line'}}</h1>
        <form id="order-line-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
            <div class="form-group">
                <label for="order-line-description">Product Description</label>
                <input type="text" id="order-line-description" required [ngModel]="orderLine?.description" ngControl="description" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="order-line-unit-net-price">Unit Net Price</label>
                <input type="text" id="order-line-unit-net-price" required [ngModel]="orderLine?.unitNetPrice" ngControl="unitNetPrice" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="order-line-image">Image</label>
                <input type="text" id="order-line-image" required [ngModel]="orderLine?.image" ngControl="image" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="text" id="order-line-quantity" required [ngModel]="orderLine?.quantity" ngControl="quantity" class="form-control"/>
            </div>
            
            <button type="submit" class="btn btn-primary">{{orderLine === null ? 'Add' : 'Edit'}}</button>
            <button class="btn btn-danger" *ngIf="orderLine !== null" (click)="onDelete()">Delete Order Line</button>
        </form>
        
    `,
    inputs: ['orderLine'],
    styleUrls: ['src/css/hn-order-line-list-edit.css']
     // Here not adding the Providers metadata because the 
    // this component is a child of order-lines-list.component
    
})

export class OrderLinesListEditComponent implements OnInit {
    orderLine: OrderLine;
   
    constructor(private _orderLineListService: OrderLineListService) { }

    ngOnInit() { }
    // the onSubmit method gets the value of the form argument (f)
    // and the value of the form will be the same structure of the
    // class OrderLine as the both have the same structure
    onSubmit(orderLine: OrderLine){
        this.orderLine !== null 
        ?   this._orderLineListService.updateItem(this._orderLineListService.getIndexOfOrderLine(this.orderLine), orderLine) :
        this._orderLineListService.insertOrderLine(orderLine);      
    }

    onDelete(){
        this._orderLineListService.deleteOrderLine(this.orderLine);
        this.orderLine = null;
    }

}