import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../core/services/vehiculo.service';
import { Vehiculo } from '../../../core/models/vehiculo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehiculo-list.component.html',
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.listarVehiculos().subscribe((data: Vehiculo[]) => {
      this.vehiculos = data;
    });
  }
}
