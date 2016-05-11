import { Component, OnInit } from '@angular/core';
import {OrderLinesListEditComponent} from './order-lines-list-edit.component';
import {OrderLine} from '../shared/orderLine';
import {OrderLineListService} from '../shared/order-line-list.service';


@Component({
    template: `
     
            <div class="panel-heading">
                <h2>Order Lines List</h2> 
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <hn-order-lines-list-edit [orderLine]="selectedOrderLine"></hn-order-lines-list-edit> 
                </div>
                <div class="panel-body">
                   <!--button class="btn btn-default" (click)="onAddOrderLine()">Add new Order Line</button-->
                   <div class='table-responsive' *ngIf='orderLines && orderLines.length'>
            <table class='table table-hover table-stripped table-condensed'>
                <thead>
                    <tr>
                        <th>Product Description</th>
                        <th>Unit Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#orderLine of orderLines" (click)="onSelect(order)">
                        <td valign="middle">{{ orderLine.description}}</td>
                        <td>{{ orderLine.unitNetPrice}}</td>
                        <td> <img class="img-responsive img-rounded" [src]="orderLine.image" alt="Order Line"></td>
                        <td>{{ orderLine.quantity}}</td>
                    </tr>
                </tbody>
            
            </table>
        
        </div>
                   
                </div>
            </div> <!--panel panel-default-->
    
        
    
    
    `,
    directives: [OrderLinesListEditComponent],
    providers: [OrderLineListService]
})

/** Shopping list component */
export class OrderLinesListComponent implements OnInit {
    orderLines: OrderLine[];
    selectedOrderLine: OrderLine = null;
    
    constructor(private _orderLineService: OrderLineListService) { }

    ngOnInit() {
        // initialize the list
        this.orderLines = this._orderLineService.getAllOrderLines();
        
     }

     onAddOrderLine(){
         this.selectedOrderLine = null;
     }
     onSelectOrderLine(orderLine: OrderLine){
         this.selectedOrderLine = orderLine;
         
     }
}