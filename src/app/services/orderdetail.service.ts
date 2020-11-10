import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {
  public behaviourObj = new BehaviorSubject({type:'',value:''});
  odetails = this.behaviourObj.asObservable()
  constructor() { }

  orderDetails(msg:any){
    this.behaviourObj.next(msg);
 }
 
}
