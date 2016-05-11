import {Component} from '@angular/core';
import {Order} from '../shared/Order';
import {OnInit} from "@angular/core";
import {OrderService} from './order.service';
import {Router} from "@angular/router";


@Component({
    selector: 'hn-order-list',
    template:`
         
        <button (click)="onAddOrder()" class="btn btn-primary">Add New Order</button>
        <div class='table-responsive '>
            <table class='table table-hover table-stripped table-condensed' *ngIf='orders && orders.length'>
                <thead>
                    <tr>
                        <th>OFS OrderID</th>
                        <th>Order Id</th>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Order Date</th>
                        <th>Delivery Service</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="#order of orders" (click)="onSelect(order)">
                        <td>{{ order.ofsOrderId}}</td>
                        <td>{{ order.orderId}}</td>
                        <td>{{ order.firstName}}</td>
                        <td>{{ order.secondName}}</td>
                        <td>{{ order.orderDate}}</td>
                        <td>
                        <div [ngSwitch]="order.deliveryServiceID">
                                <template [ngSwitchWhen]="1"><i class="fa fa-user-secret fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="3"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="4"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="5"><i class="fa fa-building-o fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="6"><i class="fa fa-bolt fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="7"><i class="fa fa-truck fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="8"><i class="fa fa-user-plus fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="9"><i class="fa fa-hand-spock-o fa-2x" aria-hidden="true"></i></template>
                                <template [ngSwitchWhen]="12"><i class="fa fa-building-o fa-2x" aria-hidden="true"></i></template>
                        </div>
                        
                        </td>
                       
                        
                        
                    </tr>
                </tbody>
            
            </table>
        
        </div>
        
    `,
    
})

export class OrderListComponent implements OnInit {
    orders: Order[];
    errorMessage: string;
    
    /* testign the request*/
    data: Object;
    loading: boolean;
    
    
    
    constructor(private _orderService: OrderService, 
                private _router: Router) { }

    ngOnInit() {
        
        //  this._orderService.getAllRestfullOrders()
        //                 .subscribe( orders => this.orders = orders),
        //                 (error => this.errorMessage = <any>error);
                      
              
         this.orders = this._orderService.getAllOrders();
    }
     

     
    onSelect(order: Order) {
         this._router.navigate(['OrderDetail', {orderIndex: Number(this._orderService.getOrderIndex(order))}]);
    }
    
    onAddOrder() {
        this._router.navigate(['OrderEdit', {editMode: 'create'}])
    }
}