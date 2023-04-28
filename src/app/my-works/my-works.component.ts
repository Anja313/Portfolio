import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {

ngOnInit(): void {
  
}



  works = [{
    img: 'assets/img/AH.png',
    title: 'Portfolio',
    description: 'Javascript  Game',
    link: 'https://https://github.com/anja/slack-clone',
    github: 'https://github.com/Anja313/Portfolio',
    type: 'Ang'
  },
  {
    img: 'assets/img/myWorks/elPollo.png',
    title: 'Join',
    description: 'javascript  (group work)',
    link: 'https://https://github.com/anja/slack-clone',
    github: 'https://',
    type: 'JS'
  },
  {
    img: 'assets/img/myWorks/join.png',
    title: 'Join',
    description: 'angular based messaging app (group work)',
    link: 'https://',
    github: 'https://github.com/anja/slack-clone',
    type: 'JS'
  },
  {
    img: 'assets/img/poke.png',
    title: 'PokeDex',
    description: 'javascript based PokeDex (worked with APIs)',
    link: 'https://anja-hovhannisyan.developerakademie.net/Pocedex/index.html',
    github: 'https://github.com/Anja313/PokeDex',
    type: 'api'
  }];

  button: number =1;


}
