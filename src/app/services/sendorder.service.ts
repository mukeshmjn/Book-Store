import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SendorderService {
   public behaviourObj = new BehaviorSubject({type:'',value:''});
    message = this.behaviourObj.asObservable()
  constructor() { }

  sendDetails(msg:any){
     this.behaviourObj.next(msg);
  }
}
