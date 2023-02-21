import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarTareaComponent } from './borrar-tarea.component';

describe('BorrarTareaComponent', () => {
  let component: BorrarTareaComponent;
  let fixture: ComponentFixture<BorrarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
