import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTirageComponent } from './details-tirage.component';

describe('DetailsTirageComponent', () => {
  let component: DetailsTirageComponent;
  let fixture: ComponentFixture<DetailsTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
