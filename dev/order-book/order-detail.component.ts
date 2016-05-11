import { Component, OnInit } from '@angular/core';
import {Order} from '../shared/order';
import {OrderService} from './order.service';
import {Router, OnActivate} from '@angular/router';
import {RouteSegment} from "@angular/router";
import {OrderLineListService} from '../shared/order-line-list.service';

@Component({
    templateUrl: 'templates/orders/order-detail.tpl.html',
    providers: [OrderLineListService]
    
})
export class OrderDetailComponent implements OnActivate, OnInit {
    order: Order;
    private _orderIndex: string;

    constructor(private _routeSegment: RouteSegment,
                private _orderService: OrderService,
                private _router: Router,
                private _orderLineListService: OrderLineListService) { }

    ngOnInit() {
        this.order = this._orderService.getOrder(this._orderIndex !== null ? +this._orderIndex : null) || null;
     }

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment):void {
        let itemIndex = curr.getParam('id');
        this._orderIndex = itemIndex;
    }

    onDelete(){
        
        this._orderService.deleteOrder(+this._orderIndex);
        this._router.navigate(['OrderDetail']);
    }
    
    onEdit() {
         this._router.navigate(['OrderEdit', {editMode: 'edit', orderIndex: this._orderIndex}])
     }
     
     onAddToOrderList(){
        this._orderLineListService.InsertOrderLines(this.order.orderLines);
     }
     
}