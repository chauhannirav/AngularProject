import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
  providers: [EmployeeService],
})
export class EmployeeListComponent implements OnInit {
  employees!: IEmployee[];

  selectedEmployeeCountRadioButton: string = 'All';

  

  constructor(private _employeeService: EmployeeService) {
    
  }
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  getEmployees(): void {
    this.employees =
      [
        { code: 'emp01', name: 'Nirav', gender: 'Male', annualSalary: 15000, dateOfJoning: '01-02-2022' },
        { code: 'emp02', name: 'Jeet', gender: 'Male', annualSalary: 20000.21, dateOfJoning: '01-06-2021' },
      { code: 'emp03', name: 'Chirag', gender: 'Male', annualSalary: 25000.25, dateOfJoning: '01-06-2021' },
      { code: 'emp04', name: 'Minal', gender: 'FeMale', annualSalary: 30000, dateOfJoning: '01-08-2021' },
      { code: 'emp05', name: 'Swati', gender: 'FeMale', annualSalary: 20000, dateOfJoning: '01-10-2021' },
      ];
  }

  onEmployeeCountRadioButtonChange(selectRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
  getTotalEmployeesCount(): number {
    return this.employees.length;
  }
  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }
  getTotalFeMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "FeMale").length;
  }
}
