import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConductorService } from './core/services/conductor.service';
import { VehiculoService } from './core/services/vehiculo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ConductorService, VehiculoService],
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transporte-app';
}
