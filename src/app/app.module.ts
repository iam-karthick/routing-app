import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './component/header/header.component';
import { MainComponent }  from './component/main/main.component';
import { FooterComponent }  from './component/footer/footer.component';
import { AboutComponent }  from './component/about/about.component';
import { ContactComponent }  from './component/contact/contact.component';
import {SlideComponent} from './component/slide/slide.component';

import {route} from './app.routing';

@NgModule({
  imports:      [ BrowserModule,route,FormsModule],
  declarations: [ AppComponent,HeaderComponent,MainComponent,FooterComponent, AboutComponent ,ContactComponent , SlideComponent],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
