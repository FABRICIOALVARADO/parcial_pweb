import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  idioma = signal('Inglés');
  modalidad = signal('Presencial');
  turno = signal('Noche');
  idiomas = ['Inglés', 'Portugués', 'Italiano', 'Francés', 'Alemán', 'Chino mandarín'];
  modalidades = ['Presencial', 'Virtual', 'Semipresencial', 'Sabatino'];
  turnos = ['Mañana', 'Tarde', 'Noche', 'Sábado'];

  /** Enlace de WhatsApp con la selección ya redactada. */
  wa = computed(() => 'https://wa.me/51999999999?text=' + encodeURIComponent(
    `Hola, quiero matricularme en ${this.idioma()}, modalidad ${this.modalidad()}, turno ${this.turno()}. ¿Me pueden agendar la prueba de ubicación?`));

  valor(e: Event) { return (e.target as HTMLSelectElement).value; }
}
