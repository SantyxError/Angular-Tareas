import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FinalizarTareaComponent } from './componentes/finalizar-tarea/finalizar-tarea.component';
import { BorrarTareaComponent } from './componentes/borrar-tarea/borrar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareaComponent,
    InicioComponent,
    HeaderComponent,
    FinalizarTareaComponent,
    BorrarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
