import { Component } from '@angular/core';

import { HeroComponent } from './hero/hero';
import { NosotrosComponent } from './nosotros/nosotros';
import { IdiomasComponent } from './idiomas/idiomas';
import { NivelesComponent } from './niveles/niveles';
import { DocentesComponent } from './docentes/docentes';
import { EstudiantesComponent } from './estudiantes/estudiantes';
import { ComunidadComponent } from './comunidad/comunidad';
import { ContactoComponent } from './contacto/contacto';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent, NosotrosComponent, IdiomasComponent, NivelesComponent,
    DocentesComponent, EstudiantesComponent, ComunidadComponent, ContactoComponent
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {

}
