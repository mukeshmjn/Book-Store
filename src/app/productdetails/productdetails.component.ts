import { Component, OnInit } from '@angular/core';
import { ProductdetailService } from '../services/productdetail.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HomeService} from '../services/home.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private hs: HomeService,private pdetails: ProductdetailService,private activatedRoute: ActivatedRoute) { }
  product: any={};
  queryParams:any
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const docId = params['search'];
      console.log('docId: ',docId);
      this.hs.getProduct(docId).subscribe(data=>{
        //console.log('book data: ',data.data())
        this.product = data.data(); 
      })
    });
//console.log('params: ',this.queryParams)
    // this.pdetails.pdetails.subscribe(mesg =>{//behaviour subject method removed 
     
    //   console.log(mesg);
    //   this.product = mesg.value;
    //   console.log(this.product)
    // })

  }

}
