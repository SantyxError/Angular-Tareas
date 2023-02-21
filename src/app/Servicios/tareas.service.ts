import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}

  tareas: Array<Tarea> = [
    {
      id: '1',
      nombre: 'Examen Cliente',
      estado: 'Pendiente',
    },
    {
      id: '2',
      nombre: 'Examen Servidor',
      estado: 'Pendiente',
    },
    {
      id: '3',
      nombre: 'Examen Interfaces',
      estado: 'Realizada',
    },
    {
      id: '4',
      nombre: 'Examen Despliegue',
      estado: 'Pendiente',
    },
  ];

  getTareas() {
    return this.tareas;
  }

  getTarea(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id);
    return this.tareas[pos];
  }

  endTareas(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id);

    this.tareas[pos].estado = 'Realizado';
  }

  getTotales() {
    return {
      totRealizadas: this.tareas.filter((t) => t.estado == 'Realizada').length,
      totPendientes: this.tareas.filter((t) => t.estado == 'Pendiente').length,
    };
  }

  deleteTarea(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id);
    this.tareas.splice(pos, 1);
  }

  filtrarTareas(estado: string) {
    return this.tareas.filter((t) => t.estado == estado);
  }
}
