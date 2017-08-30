import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }  from './component/main/main.component';
import { AboutComponent }  from './component/about/about.component';
import { ContactComponent }  from './component/contact/contact.component';

const routes: Routes = [
  {
   path: '',
    component: MainComponent, 

  },
  {
    path: 'about',
    component: AboutComponent,
  
  },
  {
    path: 'contact',
    component: ContactComponent,
  
  },
];

export const route: ModuleWithProviders =RouterModule.forRoot(routes);