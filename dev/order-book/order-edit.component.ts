import {Component, Output, EventEmitter} from "@angular/core";
import {OnInit} from "@angular/core";
import {ControlGroup} from "@angular/common";
import {RouteSegment} from "@angular/router";
import {ControlArray} from "@angular/common";
import {Order} from '../shared/Order';
import {OrderService} from './order.service';

import {Control} from "@angular/common";
import {Validators} from "@angular/common";
import {FormBuilder} from "@angular/common";
import {Router} from "@angular/router";
import {CanDeactivate, RouteTree} from "@angular/router";

/*import {ComponentInstruction} from 'angular2/router';*/

@Component({
    templateUrl: 'templates/orders/order-edit.tpl.html'
})


export class OrderEditComponent implements OnInit, CanDeactivate {
    editForm: ControlGroup;
    private _editMode = 'create';
    private _orderIndex: number;
    private _submitted = false;
    @Output() finished = new EventEmitter();
    order: Order;
     
    constructor(private _routeSegment:RouteSegment,
                private _orderService: OrderService,
                private _formBuilder: FormBuilder,
                private _router : Router) 
                {}


    onAddLine(orderLineDescription: string,
              orderLineUnitNetPrice: string, 
              orderLineImage:string, 
              orderLineQuantity: string){
        
        (<ControlArray>this.editForm.controls['orderLines']).push(
            
               new ControlGroup(
                         {
                             description: new Control(orderLineDescription, Validators.required),
                             unitNetPrice:new Control(orderLineUnitNetPrice, Validators.compose([
                                 Validators.required,
                                 hasNumbers,
                                 greaterZero
                             ])),
                             image: new Control(orderLineImage, Validators.required),
                             quantity: new Control(orderLineQuantity, Validators.compose([
                                 Validators.required,
                                 hasNumbers,
                                 greaterZero
                             ]))
                         }
                    )
        );
    }
    
    onRemoveLine(index: number){
        (<ControlArray>this.editForm.controls['orderLines']).removeAt(index);
    }
    
    onSubmit(){
        this.order = this.editForm.value;
        
        if(this._editMode === 'edit'){
            this._orderService.updateOrder(this._orderIndex, this.order);
        } else {
            this._orderService.insertOrder(this.order);
        }
        this._submitted = true;
        this.navigateBack();
    }

    private navigateBack() {
        this.finished.emit(null);
        this._router.navigate(['/orders', this._orderIndex]);
    }

    onCancel(){
        
        this.navigateBack();
    }

    routerCanDeactivate(currTree?:RouteTree, futureTree?:RouteTree):Promise<boolean> {
        if (this._submitted || this.editForm.pristine) {
            return Promise.resolve(true);
        }
        return Promise.resolve(confirm("Sure?"));
    }
    
    ngOnInit() { 
        if (this._routeSegment.getParam('id') !== undefined) {
            this._editMode = 'edit';
            this._orderIndex = +this._routeSegment.getParam('id');
        }

        let fbOfsOrderId = '';
        let fbOrderId = '';     
        let fbGroupOrderNumber ='';
        let fbFirstName = '';
        let fbSecondName = '';
        let fbOrderDate = '';
        let fbDeliveryServiceId = 0;
         // Order lines
        let fbOrderLines: ControlArray = new ControlArray([]);
        
        if (this._editMode === 'edit'){

               this.order = this._orderService.getOrder(this._orderIndex);

               for(let i = 0; i < this.order.orderLines.length; i++){
                  fbOrderLines.push(
                    new ControlGroup(
                         {
                             description: new Control(this.order.orderLines[i].description, Validators.required),
                             unitNetPrice:new Control(this.order.orderLines[i].unitNetPrice, Validators.compose([
                                 Validators.required,
                                 hasNumbers,
                                 greaterZero
                             ])),
                             image: new Control(this.order.orderLines[i].image, Validators.required),
                             quantity: new Control(this.order.orderLines[i].quantity, Validators.compose([
                                 Validators.required,
                                 hasNumbers,
                                 greaterZero
                             ]))
                         }
                    )
                );
                fbOfsOrderId = this.order.ofsOrderId;
                fbOrderId = this.order.orderId;    
                fbGroupOrderNumber = this.order.groupOrderNumber;
                fbFirstName = this.order.firstName;
                fbSecondName = this.order.secondName;
                fbOrderDate = this.order.orderDate;
                fbDeliveryServiceId = this.order.deliveryServiceId;
            }
        }
         this.editForm = this._formBuilder.group({
              ofsOrderId: [fbOfsOrderId, Validators.required],
              orderId: [fbOrderId, Validators.required],
              groupOrderNumber: [fbGroupOrderNumber],
              firstName: [fbFirstName],
              secondName: [fbSecondName],
              orderDate: [fbOrderDate],
              deliveryServiceId: [fbDeliveryServiceId],
              orderLines: this._formBuilder.array(fbOrderLines.controls)
         });
    }
}

function hasNumbers(control: Control): {[s: string]: boolean} {
    if(!(''+control.value).match('\\d+')){
        return {noNumbers: true};
    }
}

function greaterZero(control: Control): {[s: string]: boolean}{
    if (!((control.value) > 0 )) {
        return {tooSmall: true};
    }
}
