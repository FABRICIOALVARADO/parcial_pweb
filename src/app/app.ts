import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { MainComponent } from './main/main';
import { AsideComponent } from './aside/aside';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}