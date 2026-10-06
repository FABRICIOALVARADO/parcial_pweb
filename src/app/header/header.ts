import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  /** Si no existe public/logo-continental.png se muestra el logotipo de texto. */
  logoOk = signal(true);

  enlaces = [
    { id: 'nosotros', t: 'Nosotros' }, { id: 'idiomas', t: 'Idiomas' }, { id: 'niveles', t: 'Niveles' },
    { id: 'docentes', t: 'Docentes' }, { id: 'estudiantes', t: 'Estudiantes' }, { id: 'comunidad', t: 'Comunidad' }
  ];
}
