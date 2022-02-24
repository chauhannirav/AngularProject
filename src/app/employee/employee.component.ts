import { style } from '@angular/animations';
import { Component } from '@angular/core'

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',//'./employee/employee.component.html'
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  firstname: string = 'Nirav';
  lastname: string = 'Chauhan';
  gender: string = 'Male';
  age: number = 23;
  columnspan: number = 2;
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
