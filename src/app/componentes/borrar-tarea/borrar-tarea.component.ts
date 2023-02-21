import { Component } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-borrar-tarea',
  templateUrl: './borrar-tarea.component.html',
  styleUrls: ['./borrar-tarea.component.css'],
})
export class BorrarTareaComponent {
  constructor(private servicioTareas: TareasService) {}

  tareas: Array<Tarea> = this.servicioTareas.getTareas();

  ngOnInit() {
    this.tareas;
  }

  borrarTarea(id: string) {
    this.servicioTareas.deleteTarea(id);
  }
}
