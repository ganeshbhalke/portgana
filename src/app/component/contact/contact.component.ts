import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

name = '';
email = '';
message = '';

 sendMail() {

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&body=${this.message}`,
    '_blank'
  );

  // this.sendMail.reset( ) 

}
}
