import { TestBed } from '@angular/core/testing';

import { EmployeeProject } from './employee-project';

describe('EmployeeProject', () => {
  let service: EmployeeProject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeProject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
