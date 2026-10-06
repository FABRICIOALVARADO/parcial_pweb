import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class NosotrosComponent {
  valores = [
    { icon: 'bi-bullseye', t: 'Misión', x: 'Formar personas competentes en idiomas extranjeros mediante metodologías activas y docentes calificados, para que se desenvuelvan en entornos académicos, laborales y globales.' },
    { icon: 'bi-eye', t: 'Visión', x: 'Ser el centro de idiomas de referencia en la región, reconocido por su calidad académica, innovación y certificaciones internacionales.' },
    { icon: 'bi-clock-history', t: 'Trayectoria', x: 'Más de 15 años enseñando idiomas, con miles de estudiantes formados y alianzas con instituciones certificadoras.' }
  ];
}
