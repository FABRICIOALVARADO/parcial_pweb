import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class EstudiantesComponent {
  horarios = ['Mañana · 07:00 – 12:00', 'Tarde · 14:00 – 18:00', 'Noche · 18:00 – 22:00', 'Sábados · 08:00 – 17:00'];
  pasos = ['Elige tu idioma y modalidad', 'Rinde la prueba de ubicación gratuita', 'Presenta tus documentos y paga', 'Recibe tu horario y comienza'];
  requisitos = ['DNI o carné de extranjería', 'Ficha de matrícula completa', 'Voucher de pago', 'Prueba de ubicación (si tienes conocimientos)'];
  servicios = [
    { i: 'bi-journal-text', t: 'Material digital incluido' }, { i: 'bi-patch-check', t: 'Certificado por nivel' },
    { i: 'bi-headset', t: 'Tutorías de refuerzo' }, { i: 'bi-people', t: 'Club de conversación' }
  ];
  promos = [
    { tag: '20% DSCTO', i: 'bi-mortarboard', t: 'Comunidad Continental', x: 'Para estudiantes, egresados y colaboradores de la universidad.' },
    { tag: 'MÁS POPULAR', i: 'bi-people', t: 'Matrícula en pareja', x: 'Inscríbete con un amigo o familiar y ambos obtienen beneficios.', dark: true },
    { tag: '15% DSCTO', i: 'bi-lightning-charge', t: 'Pago adelantado', x: 'Paga el ciclo completo por adelantado y accede a tarifa preferencial.' }
  ];
}
