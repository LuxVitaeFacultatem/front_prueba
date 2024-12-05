import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../../core/services/vehiculo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehiculo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vehiculo-form.component.html',
})
export class VehiculoFormComponent {
  vehiculo = { placa: '', modelo: '', capacidad: '' };

  constructor(private vehiculoService: VehiculoService) {}

  guardarVehiculo(): void {
    this.vehiculoService.registrarVehiculo(this.vehiculo).subscribe(
      () => {
        alert('Vehículo registrado correctamente');
        this.vehiculo = { placa: '', modelo: '', capacidad: '' };
      },
      (err) => {
        console.error(err);
        alert('Error al registrar el vehículo');
      }
    );
  }
}
