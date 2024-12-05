import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';
import { environment } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private apiUrl = `${environment.apiUrl}/vehiculos`;

  constructor(private http: HttpClient) {}

  // Lista todos los vehículos
  listarVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  // Registra un nuevo vehículo
  registrarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.apiUrl, vehiculo);
  }

  // Lista los vehículos que no tienen un conductor asignado
  listarVehiculosNoAsignados(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${this.apiUrl}/no-asignados`);
  }

  // Asocia un conductor a un vehículo
  asociarConductor(vehiculoId: number, conductorId: number): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/${vehiculoId}/asociar-conductor/${conductorId}`,
      {}
    );
  }

  // Desasocia un conductor de un vehículo
  desasociarConductor(vehiculoId: number): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/${vehiculoId}/desasociar-conductor`,
      {}
    );
  }
}
