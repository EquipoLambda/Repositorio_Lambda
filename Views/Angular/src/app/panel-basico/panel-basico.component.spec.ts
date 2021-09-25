import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBasicoComponent } from './panel-basico.component';

describe('PanelBasicoComponent', () => {
  let component: PanelBasicoComponent;
  let fixture: ComponentFixture<PanelBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
