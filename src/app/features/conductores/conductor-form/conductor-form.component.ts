import { Component } from '@angular/core';
import { ConductorService } from '../../../core/services/conductor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conductor-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conductor-form.component.html',
})
export class ConductorFormComponent {
  conductor = {
    identificacion: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
  };

  constructor(private conductorService: ConductorService) {}

  registrarConductor(): void {
    this.conductorService.registrarConductor(this.conductor).subscribe(
      () => {
        alert('Conductor registrado correctamente');
        this.conductor = {
          identificacion: '',
          nombre: '',
          apellido: '',
          telefono: '',
          direccion: '',
        };
      },
      (err) => console.error(err)
    );
  }
}
