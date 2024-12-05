import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../core/services/vehiculo.service';
import { ConductorService } from '../../core/services/conductor.service';
import { Vehiculo } from '../../core/models/vehiculo.model';
import { Conductor } from '../../core/models/conductor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asociar-conductor',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa los módulos necesarios
  templateUrl: './asociar-conductor.component.html',
  styleUrls: ['./asociar-conductor.component.css']
})
export class AsociarConductorComponent implements OnInit {
  conductores: Conductor[] = [];
  vehiculosNoAsignados: Vehiculo[] = [];
  conductorSeleccionado!: Conductor;
  vehiculoSeleccionado!: Vehiculo;

  constructor(
    private vehiculoService: VehiculoService,
    private conductorService: ConductorService
  ) {}

  ngOnInit(): void {
    // Especificamos que `data` es un arreglo de `Conductor`.
    this.conductorService.listarConductores().subscribe((data: Conductor[]) => {
      this.conductores = data;
    });

    // Especificamos que `data` es un arreglo de `Vehiculo`.
    this.vehiculoService.listarVehiculosNoAsignados().subscribe((data: Vehiculo[]) => {
      this.vehiculosNoAsignados = data;
    });
  }

  asociarConductor(): void {
    if (this.vehiculoSeleccionado && this.conductorSeleccionado) {
      this.vehiculoService
        .asociarConductor(this.vehiculoSeleccionado.id!, this.conductorSeleccionado.id!)
        .subscribe(() => {
          alert('Conductor asociado correctamente');
        });
    } else {
      alert('Por favor, selecciona un conductor y un vehículo');
    }
  }
}
