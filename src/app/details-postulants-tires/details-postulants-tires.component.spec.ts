import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostulantsTiresComponent } from './details-postulants-tires.component';

describe('DetailsPostulantsTiresComponent', () => {
  let component: DetailsPostulantsTiresComponent;
  let fixture: ComponentFixture<DetailsPostulantsTiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostulantsTiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostulantsTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
