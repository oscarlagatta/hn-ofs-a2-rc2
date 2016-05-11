import { Component, OnInit } from '@angular/core';
import { OrderService} from './order.service';
import {OrderListComponent} from './order-list.component';
import {Routes} from "@angular/router";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {OrderDetailComponent} from './order-detail.component';
import {OrderEditComponent} from './order-edit.component';


@Component({
    selector: 'hn-orders',
    template: `
    <div class="col-md-12">
            <hn-order-search-container></hn-order-search-container>
    </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                    <div class="panel-heading">
                        OFS - Orders Back Office
                    </div>
                    <div class="panel-body">
                    <hn-order-list></hn-order-list>
                    </div>
            </div>
        </div>
         <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Order Details</h3>
                </div>
                <div class="panel-body">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `,
    providers:[OrderService],
    directives: [OrderListComponent, ROUTER_DIRECTIVES],
     
})

@Routes([
    {path: '/edit/:id', component: OrderEditComponent},
    {path: '/create', component: OrderEditComponent},
    {path: '/:id', component: OrderDetailComponent}
])

export class OrdersComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}