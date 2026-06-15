import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEmployeeProject } from './assign-employee-project';

describe('AssignEmployeeProject', () => {
  let component: AssignEmployeeProject;
  let fixture: ComponentFixture<AssignEmployeeProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEmployeeProject],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignEmployeeProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
