import { Component } from '@angular/core';

@Component({
  selector: 'my-contact',
  templateUrl: `./contact.component.html`,
})
export class ContactComponent {
      id:string;
      output:string;
      username:string;
      email:string;
      message:string;
      disableBtn:boolean;
  constructor() {   
      this.disableBtn=true;
  }
  onFormSubmit() {
      console.log('onFormSubmit');
      console.log(this.id);
      console.log(this.username);
      console.log(this.email);
      console.log(this.message);
  }
  validate() {
      if ( this.id  && this.username && this.email && this.message  ) {
      this.disableBtn=false; 
      }   
  }
}
