import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [],
  templateUrl: './docentes.html',
  styleUrl: './docentes.css'
})
export class DocentesComponent {
  filtro = signal('Todos');
  filtros = ['Todos', 'Inglés', 'Portugués', 'Italiano', 'Francés', 'Alemán', 'Chino'];
  docentes = [
    { n: 'Mg. Carla Quispe', i: 'Inglés', e: 'Preparación TOEFL e IELTS', x: '12 años · Certificación CELTA' },
    { n: 'Lic. Rafael Souza', i: 'Portugués', e: 'Conversación y negocios', x: '8 años · Nativo de Brasil' },
    { n: 'Mg. Giulia Romano', i: 'Italiano', e: 'Lengua y cultura italiana', x: '10 años · Certificación CILS' },
    { n: 'Lic. Étienne Laurent', i: 'Francés', e: 'Preparación DELF / DALF', x: '9 años · Alliance Française' },
    { n: 'Mg. Lukas Weber', i: 'Alemán', e: 'Alemán técnico', x: '7 años · Goethe-Institut' },
    { n: 'Lic. Li Wei', i: 'Chino', e: 'Mandarín para comercio', x: '6 años · Certificación HSK' }
  ];
  visibles = computed(() => this.filtro() === 'Todos' ? this.docentes : this.docentes.filter(d => d.i === this.filtro()));
  iniciales(n: string) { return n.split(' ').slice(1).map(p => p[0]).join('').slice(0, 2); }
}
