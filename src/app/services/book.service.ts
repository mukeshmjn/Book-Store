import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 //id:any;
myArray: any[] = []

  constructor() { }

  // getBook(id: string):Book{
  //   return this.myArray.filter((book)=> (book.id === id))[0];
  // }

}


