import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css'],
})
export class FinalizarTareaComponent {
  constructor(
    private servicioTarea: TareasService,
    private route: ActivatedRoute,
    private root: Router
  ) {}

  //Creamos un id y una tarea
  id: string = '';
  tarea!: Tarea;

  // Iniciamos trayendo una tarea en concreto
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tarea = this.servicioTarea.getTarea(this.id);
  }

  //Usamos el metodo de finalizar tareas del servicio.
  finalizarTareas(id: string) {
    this.servicioTarea.endTareas(id);
    this.root.navigate(['tareas']);
  }
}
