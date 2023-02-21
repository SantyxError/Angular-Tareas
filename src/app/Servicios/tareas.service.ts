import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  constructor() {}

  //Creamos un array con las Tareas
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

  //Funcion para obtener las tareas
  getTareas() {
    return this.tareas;
  }

  //Funcion para obtener 1 tarea
  getTarea(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id);
    return this.tareas[pos];
  }

  //FUncion para finalizar una tarea
  endTareas(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id); //buscamos la tarea
    this.tareas[pos].estado = 'Realizada'; //Cambiamos el estado de la tarea buscada
  }

  //Funcion para saber el total de "realizados" y "pendientes"
  getTotales() {
    return {
      totRealizadas: this.tareas.filter((t) => t.estado == 'Realizada').length,
      totPendientes: this.tareas.filter((t) => t.estado == 'Pendiente').length,
    };
  }

  //Funcion para borrar una tarea
  deleteTarea(id: string) {
    let pos = this.tareas.findIndex((t) => t.id == id);
    this.tareas.splice(pos, 1);
  }

  //Funcion para filtrar por tareas
  filtrarTareas(estado: string) {
    return this.tareas.filter((t) => t.estado == estado); //Filtramos las que el estado coincida con el estado pasado
  }
}
