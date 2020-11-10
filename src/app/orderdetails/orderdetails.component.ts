import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from '../services/orderdetail.service'
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  order: any;
  constructor(private odetails:OrderdetailService) { }

  ngOnInit() {
    
    this.odetails.odetails.subscribe(mesg =>{
      debugger
      console.log(mesg);
      this.order = mesg.value;
      console.log(this.order)
    })

  }

}
