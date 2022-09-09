import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsListeComponent } from './details-liste.component';

describe('DetailsListeComponent', () => {
  let component: DetailsListeComponent;
  let fixture: ComponentFixture<DetailsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
