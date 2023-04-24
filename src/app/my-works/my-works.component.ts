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
    img: 'assets/img/iconSkills/Javascript.png',
    title: 'El Pollo Loco',
    description: 'Javascript  Game',
    link: 'https://https://github.com/anja/slack-clone',
    github: 'https://',
    type: 'JS'
  },
  {
    img: 'assets/img/iconSkills/Angular.png',
    title: 'Join',
    description: 'javascript  (group work)',
    link: 'https://https://github.com/anja/slack-clone',
    github: 'https://',
    type: 'JS'
  },
  {
    img: 'assets/img/iconSkills/html.png',
    title: 'Slack',
    description: 'angular based messaging app (group work)',
    link: 'https://',
    github: 'https://github.com/anja/slack-clone',
    type: 'Ang'
  },
  {
    img: 'assets/img/iconSkills/Javascript.png',
    title: 'Pokedex',
    description: 'javascript based pokedex (worked with APIs)',
    link: 'https://anja-hovhannisyan.html',
    github: 'https://',
    type: 'JS'
  }];

  button: number =0;


}
