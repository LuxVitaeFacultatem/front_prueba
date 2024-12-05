import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../core/services/vehiculo.service';
import { ConductorService } from '../../core/services/conductor.service';
import { Vehiculo } from '../../core/models/vehiculo.model';
import { Conductor } from '../../core/models/conductor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desasociar-conductor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './desasociar-conductor.component.html',
})
export class DesasociarConductorComponent implements OnInit {
  conductores: Conductor[] = [];
  vehiculosAsignados: Vehiculo[] = [];
  conductorSeleccionado!: Conductor;

  constructor(
    private vehiculoService: VehiculoService,
    private conductorService: ConductorService
  ) {}

  ngOnInit(): void {
    this.conductorService.listarConductores().subscribe((data: Conductor[]) => {
      this.conductores = data;
    });
  }

  cargarVehiculosAsignados(): void {
    if (this.conductorSeleccionado) {
      this.vehiculoService.listarVehiculos().subscribe((data: Vehiculo[]) => {
        this.vehiculosAsignados = data.filter(
          (vehiculo) => vehiculo.conductorId === this.conductorSeleccionado.id
        );
      });
    }
  }

  desasociarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculoService.desasociarConductor(vehiculo.id!).subscribe(() => {
      alert('Conductor desasociado del vehículo');
      this.cargarVehiculosAsignados();
    });
  }
}
