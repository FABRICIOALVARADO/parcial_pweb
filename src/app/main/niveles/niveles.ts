import { Component } from '@angular/core';

@Component({
  selector: 'app-niveles',
  standalone: true,
  imports: [],
  templateUrl: './niveles.html',
  styleUrl: './niveles.css'
})
export class NivelesComponent {
  niveles = [
    { m: 'A1 – A2', n: 'Básico', x: 'Vocabulario esencial, presentaciones y situaciones cotidianas.', d: '8 ciclos' },
    { m: 'B1 – B2', n: 'Intermedio', x: 'Conversaciones fluidas, redacción de textos y comprensión de medios.', d: '8 ciclos', dark: true },
    { m: 'C1 – C2', n: 'Avanzado', x: 'Dominio académico y profesional, debate y preparación de certificaciones.', d: '6 ciclos' }
  ];
  modalidades = [
    { i: 'bi-building', n: 'Presencial', x: 'Aula, práctica oral guiada y material físico y digital.' },
    { i: 'bi-laptop', n: 'Virtual', x: 'Clases en vivo por videollamada con grabaciones disponibles.' },
    { i: 'bi-shuffle', n: 'Semipresencial', x: 'Sesiones presenciales más trabajo autónomo en plataforma.' },
    { i: 'bi-calendar-week', n: 'Sabatino', x: 'Bloques de fin de semana para quienes trabajan.' }
  ];
}
