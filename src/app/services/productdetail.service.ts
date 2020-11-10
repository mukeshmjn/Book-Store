import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailService {
  public behaviourObj = new BehaviorSubject({type:'',value:''});
  pdetails = this.behaviourObj.asObservable()
  constructor() { }

  productDetails(msg:any){
    this.behaviourObj.next(msg);
 }

}
