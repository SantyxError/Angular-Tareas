import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarTareaComponent } from './componentes/borrar-tarea/borrar-tarea.component';
import { FinalizarTareaComponent } from './componentes/finalizar-tarea/finalizar-tarea.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TareasComponent } from './componentes/tareas/tareas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'finalizarTarea/:id', component: FinalizarTareaComponent },
  { path: 'borrarTareas', component: BorrarTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
