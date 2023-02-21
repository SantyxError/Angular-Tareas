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

  //Traemos todas las tareas para mostrarlas
  tareas: Array<Tarea> = this.servicioTareas.getTareas();

  //Mostramos las tareas de inicio
  ngOnInit() {
    this.tareas;
  }

  //Creamos el metodo para borrarTareas. Lo usamos del servicio
  borrarTarea(id: string) {
    this.servicioTareas.deleteTarea(id);
  }
}
