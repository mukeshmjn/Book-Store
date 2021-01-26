import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
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
     
      console.log(mesg);
      this.order = mesg.value;
      console.log(this.order)
    })

  }
  DownPDF(){
    console.log("Pdf download...");
    const doc = new jsPDF('p','pt','letter');
     doc.setFontSize(25);
     
    doc.rect(30, 30, 550, 740);
    doc.text("Mukesh BookStore", 185, 70);
    doc.setFontSize(12);
    doc.setFont("times","bolditalic");
    doc.text("Thank You for shopping with Us",80,140)
    //doc.setFontType("italic");
    doc.setFont("times","normal");
    doc.text(`Book : ${this.order.bookname}`,80,180);
    doc.text(`Author : ${this.order.author}`,80,210);
    doc.text(`Price : ${this.order.price}`,80,240);
    doc.text(`Buyer: ${this.order.firstName} ${this.order.lastName}`,80,270);
    doc.text(`Billing Address: ${this.order.streetAddress} ZipCode: ${this.order.zip} State: ${this.order.state}`,80,300)
    doc.setFontSize(19);
    doc.text('STORE POLICIES: ',80,400);
    doc.setFontSize(12);
    doc.setFont("times","italic")
    doc.text('No Return Policy',80,430);
    doc.text('You can only replace the book in case torn or damaged ',80,460);
    doc.text('10 days from the date of placing the order',80,490);
    doc.setFontSize(19);
    doc.setFont("times","normal");
    
    doc.text('For any Complaints,  ',80,560);
    doc.setFontSize(12);
    doc.text('Please write us at mukeshmahajanonhisway@gmail.com',80,590);
    doc.text('Call: +919780227528',80,620);
    doc.text('Owner: Mukesh Mahajan',80,650);
    doc.text('Address: Main Market Jugial Distt Pathankot, Punjab',80,700)
    // doc.te
    doc.save('INVOICE')
  }
}
