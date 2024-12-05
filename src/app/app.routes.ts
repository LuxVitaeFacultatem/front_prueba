import { Routes } from '@angular/router';
import { VehiculoFormComponent } from './features/vehiculos/vehiculo-form/vehiculo-form.component';
import { VehiculoListComponent } from './features/vehiculos/vehiculo-list/vehiculo-list.component';
import { ConductorFormComponent } from './features/conductores/conductor-form/conductor-form.component';
import { ConductorListComponent } from './features/conductores/conductor-list/conductor-list.component';
import { AsociarConductorComponent } from './features/asociar/asociar-conductor.component';
import { DesasociarConductorComponent } from './features/desasociar/desasociar-conductor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculoListComponent },
  { path: 'vehiculos/nuevo', component: VehiculoFormComponent },
  { path: 'conductores', component: ConductorListComponent },
  { path: 'conductores/nuevo', component: ConductorFormComponent },
  { path: 'asociar', component: AsociarConductorComponent },
  { path: 'desasociar', component: DesasociarConductorComponent },
  { path: '**', redirectTo: 'vehiculos' },
];
