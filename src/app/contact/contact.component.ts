import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('form') form!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  mailSent = false;


  async sendMail() {

    let name = this.name.nativeElement;
    let mail = this.mail.nativeElement;
    let message = this.message.nativeElement;
    let button = this.button.nativeElement;

    name.disabled = true;
    mail.disabled = true;
    message.disabled = true;
    button.disabled = true;


    // Animation 

    let data = new FormData();
    data.append('name', name.value);
    data.append('mail', mail.value);
    data.append('message', message.value);

    // send
    await fetch('http://anja-hovhannisyan.developerakademie.net/send_mail.php',
      {
        method: 'POST',
        body: data
      }
    );



    this.mailSent = true;

    setTimeout(() => {
      this.mailSent = false;

      name.value = '';
      mail.value = '';
      message.value = '';

      name.disabled = false;
      mail.disabled = false;
      message.disabled = false;
      button.disabled = false;
    }, 5000);

  }

}