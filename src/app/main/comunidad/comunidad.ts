import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  standalone: true,
  imports: [],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.css'
})
export class ComunidadComponent {
  testimonios = [
    { i: 'AM', n: 'Ana Martínez', r: 'Egresada de Inglés', x: 'Gracias a las clases aprobé mi examen IELTS y conseguí una beca en el extranjero.' },
    { i: 'JR', n: 'José Ramírez', r: 'Estudiante de Portugués', x: 'Los docentes son cercanos y las clases muy prácticas. Hablo desde el primer día.' },
    { i: 'LP', n: 'Lucía Pérez', r: 'Estudiante de Francés', x: 'La modalidad virtual me permite estudiar sin descuidar mi trabajo. Muy recomendable.' }
  ];
  novedades = [
    { t: 'Evento', i: 'bi-calendar-event', f: '15 Oct 2026', n: 'Feria Cultural de Idiomas', x: 'Stands, comida típica y presentaciones de cada idioma.' },
    { t: 'Noticia', i: 'bi-megaphone', f: '01 Nov 2026', n: 'Matrículas abiertas para el nuevo ciclo', x: 'Asegura tu vacante con la prueba de ubicación gratuita.' },
    { t: 'Actividad', i: 'bi-chat-dots', f: 'Cada viernes', n: 'Club de conversación', x: 'Practica con compañeros y docentes en un ambiente relajado.' }
  ];
  preguntas = [
    { p: '¿Necesito conocimientos previos?', r: 'No. Hay grupos desde nivel básico; si ya sabes algo, la prueba de ubicación te asigna el nivel adecuado.' },
    { p: '¿Entregan certificado?', r: 'Sí, al finalizar cada nivel recibes un certificado emitido por el Centro de Idiomas.' },
    { p: '¿Puedo cambiar de modalidad?', r: 'Sí, puedes solicitarlo antes de iniciar un nuevo ciclo, sujeto a disponibilidad.' }
  ];
}
