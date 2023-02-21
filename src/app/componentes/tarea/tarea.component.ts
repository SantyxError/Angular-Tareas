import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent {
  //Traemos del padre tarea. Tambien podriamos haberlo traido por partes ("id", "nombre"...)
  @Input() tarea!: Tarea;

  //Enviamos al padre borrarTarea
  @Output() borrarTarea = new EventEmitter();
  ngOnInit() {}

  //Usamos el metodo eliminarTarea(id:number)
  eliminarTarea(id: string) {
    this.borrarTarea.emit(id);
  }
}
