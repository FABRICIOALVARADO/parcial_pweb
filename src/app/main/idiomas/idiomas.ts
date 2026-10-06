import { Component } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  standalone: true,
  imports: [],
  templateUrl: './idiomas.html',
  styleUrl: './idiomas.css'
})
export class IdiomasComponent {
  idiomas = [
    { f: 'EN', n: 'Inglés', x: 'El idioma global de los negocios, la ciencia y la tecnología.', p: ['Regular', 'Intensivo', 'TOEFL / IELTS'] },
    { f: 'PT', n: 'Portugués', x: 'Conecta con Brasil, el mayor socio comercial de la región.', p: ['Regular', 'Conversación'] },
    { f: 'IT', n: 'Italiano', x: 'Cultura, gastronomía, diseño y estudios en Italia.', p: ['Regular', 'Cultural', 'CILS'] },
    { f: 'FR', n: 'Francés', x: 'Idioma de la diplomacia y de los organismos internacionales.', p: ['Regular', 'DELF / DALF'] },
    { f: 'DE', n: 'Alemán', x: 'Clave para ingeniería, industria y becas en Alemania.', p: ['Regular', 'Alemán técnico', 'Goethe'] },
    { f: 'ZH', n: 'Chino mandarín', x: 'Abre puertas al comercio con Asia, la economía de mayor crecimiento.', p: ['Introductorio', 'HSK'] }
  ];
}
