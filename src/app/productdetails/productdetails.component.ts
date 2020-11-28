import { Component, OnInit } from '@angular/core';
import { ProductdetailService } from '../services/productdetail.service'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private pdetails: ProductdetailService) { }
  product: any={};
  ngOnInit() {

    this.pdetails.pdetails.subscribe(mesg =>{
     
      console.log(mesg);
      this.product = mesg.value;
      console.log(this.product)
    })

  }

}
