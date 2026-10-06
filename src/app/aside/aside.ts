import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class AsideComponent {
  items = [
    { i: 'bi-clock', t: 'Horario de atención', v: 'Lun – Sáb · 07:00 a 22:00' },
    { i: 'bi-telephone', t: 'Central telefónica', v: '+51 999 999 999' },
    { i: 'bi-geo-alt', t: 'Ubicación', v: 'Av. San Carlos 1980, Huancayo' }
  ];
}
