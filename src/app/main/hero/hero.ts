import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  saludos = ['Hello', 'Olá', 'Ciao', 'Bonjour', 'Hallo', '你好'];
  niveles = [
    { n: 'Inglés', v: 82 }, { n: 'Portugués', v: 64 }, { n: 'Francés', v: 47 }
  ];
}
