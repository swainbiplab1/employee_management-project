import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedProjects } from './view-assigned-projects';

describe('ViewAssignedProjects', () => {
  let component: ViewAssignedProjects;
  let fixture: ComponentFixture<ViewAssignedProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAssignedProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAssignedProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
