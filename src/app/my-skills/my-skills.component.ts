import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
   
  }


  skills = [
    {
      img: 'assets/img/iconSkills/Javascript.png',
      title: 'JavaScript',
    },
    {
      img: 'assets/img/iconSkills/Angular.png',
      title: 'Angular',
    },
    {
      img: 'assets/img/iconSkills/html.png', 
      title: 'HTML',
    },
    {
      img: 'assets/img/iconSkills/Css.png',
      title: 'CSS',
    },
    {
      img: 'assets/img/iconSkills/Scrum.png',
      title: 'Scrum',
    },
    {
      img: 'assets/img/iconSkills/Git.png',
      title: 'Git',
    },
    {
      img: 'assets/img/iconSkills/Design.png',
      title: 'Material Design',
    },
    {
      img: 'assets/img/iconSkills/API.png',
      title: 'Rest API',
    },
    {
      img: 'assets/img/iconSkills/Firebase.png',
      title: 'Firebase',
    },
   
  ];
}