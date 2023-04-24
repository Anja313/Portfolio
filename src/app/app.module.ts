import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AnimatedIconComponent } from './animated-icon/animated-icon.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MySkillsComponent,
    AnimatedIconComponent,
    ContactComponent,
    ImprintComponent,
    FooterComponent,
    MyWorksComponent,
    AllPagesComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
