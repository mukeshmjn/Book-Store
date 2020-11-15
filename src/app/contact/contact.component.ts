import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
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
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    pno: new FormControl(''),
    subject: new FormControl(''),

    comment: new FormControl(''),
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
    debugger
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
