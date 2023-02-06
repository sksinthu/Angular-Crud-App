import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedashboardComponent } from './employedashboard.component';

describe('EmployedashboardComponent', () => {
  let component: EmployedashboardComponent;
  let fixture: ComponentFixture<EmployedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
