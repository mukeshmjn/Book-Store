import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
abc:any;

  constructor() { }
contactform = new FormGroup({
    fname: new FormControl('',[Validators.required, Validators.minLength(2)]),
    lname: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    pno: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    subject: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),
    // zip: new FormControl('')
    // lname: new FormControl(''),
    // lname: new FormControl(''),

  });
  ngOnInit(): void {
  }

  // public sendEmail(e: Event) {
  //   e.preventDefault();
  
  // }

  // sendEmail(e){
  //   debugger
  //   console.log(e.target.value)
  // }

  onSubmit(){

    this.abc= this.contactform.value;
  
    console.log(this.abc)

    emailjs.send('service_eaqjhp7', 'template_fzhae28', this.abc, 'user_BVzdes597wCCCvMgmjev4')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    this.contactform.reset();
  }
}
