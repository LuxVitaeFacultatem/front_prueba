import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../../core/services/conductor.service';
import { Conductor } from '../../../core/models/conductor.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conductor-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conductor-list.component.html',
})
export class ConductorListComponent implements OnInit {
  conductores: Conductor[] = [];

  constructor(private conductorService: ConductorService) {}

  ngOnInit(): void {
    this.conductorService.listarConductores().subscribe((data: Conductor[]) => {
      this.conductores = data;
    });
  }
}
