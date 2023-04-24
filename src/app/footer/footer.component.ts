import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})




export class FooterComponent implements OnInit {
 
  

  icons =[
    'assets/img/iconSocial/github.png', 
    'assets/img/iconSocial/linkedin.png',
    'assets/img/iconSocial/xing.png'
  ]
  


  ngOnInit(): void{}

  icanLinks:any =[
  'https://github.com/Anja313',
  'https://www.linkedin.com/in/anja-hovhannisyan-a252b6aa/',
  'https://www.xing.com/profile/Anja_Hovhannisyan/cv'
  ]

constructor(){}

  openIcanLink(i:any) { 
   window.open(this.icanLinks[i]);
}

}