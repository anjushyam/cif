import { FormControl, FormGroup } from '@angular/forms';
import { PersonalDetails } from './personal-details/personal-details.model';

export class Employee {
  public employeeName;
  public employeeId;
  public personalDetails;

  // constructor(init?: Partial<Employee>) {
  //   Object.assign(this, init);
  // }

  constructor() {
    this.employeeName = new FormControl();
    //  this.employeeName.setValidators([Validators.required])
    this.employeeId = new FormControl();
    this.personalDetails = new FormGroup({});
  }

}
