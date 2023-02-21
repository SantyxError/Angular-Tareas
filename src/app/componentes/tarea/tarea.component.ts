import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent {
  @Input() tarea!: Tarea;
  @Output() borrarTarea = new EventEmitter();
  ngOnInit() {}

  eliminarTarea(id: string) {
    this.borrarTarea.emit(id);
  }
}
