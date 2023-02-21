import { Component } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  constructor(private servicioTareas: TareasService) {}

  seleccionado: string = 'Todas';
  tareas: Array<Tarea> = this.servicioTareas.getTareas();

  totales!: any;

  ngOnInit() {
    this.tareas;
    this.totales = this.servicioTareas.getTotales();
  }

  filtrarTareas() {
    if (this.seleccionado != 'Todas') {
      this.tareas = this.servicioTareas.filtrarTareas(this.seleccionado);
    } else {
      this.tareas = this.servicioTareas.getTareas();
    }
  }
}
