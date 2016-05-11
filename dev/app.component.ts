import {Component} from '@angular/core';
import {OrdersComponent} from './order-book/orders.component';
import {OrderLinesListComponent} from './order-lines-list/order-lines-list.component';
import {Routes} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
    <div class="container-fluid" >
<header>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
<div class="container-fluid">
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand text-uppercase" href="#">Harvey Nichols - Angular 2 - OFS</a>
</div> <!--navbar-header-->
<div id="navbar" class="navbar-collapse collapse">
<ul class="nav navbar-nav navbar-right text-uppercase">
    <li><a [routerLink]="['Orders']">Orders</a></li>
    <li><a [routerLink]="['OrderLineList']">Pick List</a></li>


</ul> <!--nav navbar-nav navbar-right-->
</div><!--/.navbar-collapse -->
</div> <!--container-->
</nav>
</header>

<div class="container-fluid">
    <router-outlet></router-outlet>
    <!--hn-orders></hn-orders-->
    <div>

        </div> <!-- container -->
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]

})
@Routes([
    {path: '/orders', component: OrdersComponent}, // useAsDefault: true => coming soon
    {path: '/order-lines-list', component: OrderLinesListComponent},
])

export class AppComponent {

}