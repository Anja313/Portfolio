import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: AllPagesComponent },
  // { path: 'home', component: AllPagesComponent },
  { path: 'imprint', component: ImprintComponent },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
