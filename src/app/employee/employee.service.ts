import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
  getEmployees(): IEmployee[] {
    return [
      { code: 'emp01', name: 'Nirav', gender: 'Male', annualSalary: 15000, dateOfJoning: '01-02-2022'},
      { code: 'emp02', name: 'Jeet', gender: 'Male', annualSalary: 20000.21, dateOfJoning: '01-06-2021' },
      { code: 'emp03', name: 'Chirag', gender: 'Male', annualSalary: 25000.25, dateOfJoning: '01-06-2021' },
      { code: 'emp04', name: 'Minal', gender: 'FeMale', annualSalary: 30000, dateOfJoning: '01-08-2021' }
    ];
  }
}
