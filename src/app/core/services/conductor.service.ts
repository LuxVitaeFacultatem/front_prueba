import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conductor } from '../models/conductor.model';
import { environment } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class ConductorService {
  private apiUrl = `${environment.apiUrl}/conductores`;

  constructor(private http: HttpClient) {}

  // Lista todos los conductores
  listarConductores(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(this.apiUrl);
  }

  // Registra un nuevo conductor
  registrarConductor(conductor: Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(this.apiUrl, conductor);
  }
}
