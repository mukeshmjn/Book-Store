import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import { Orders } from 'src/app/orders.model';
import { OrderdetailService } from '../services/orderdetail.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Orders[];
  constructor(private orderService: OrdersService,
    private odetails:OrderdetailService) { }

  ngOnInit(){
    this.getOrders()
  }
  getOrders(){
  
  
    this.orderService.getOrders().subscribe(data => {
      this.orders = data.map(e => {
     
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Orders
         } ;
      })
      console.log(this.orders)
    });
    console.log('abcd')
  
      }

      orderDetails(def)
      {
        console.log(def);
        this.odetails.orderDetails({type:'SEND-ORDER_DETAILS',value:def})
        
      }

}
