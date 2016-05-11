import {Component, OnInit} from '@angular/core';

@Component({
    inputs: ['results'],
    selector: 'hn-search-result',
    template: `
    <div>
                <div class="caption">
                    <!--h3> Order {{result.ofsOrderId}}</h3>
                    <p>{{result.secondName}}, {{result.firstName}}</p>
                     <p>{{result.orderDate}}</p-->
                </div>
    </div>
    `
})

export class OrderSearchResultComponent implements OnInit {
    result: OrderSearchResult;
    
    ngOnInit(){
        
        console.log(this.result.ofsOrderId + ' ' + this.result.firstName  + ' ' +
        this.result.secondName)
    }
}