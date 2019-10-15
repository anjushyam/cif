import { FormControl, FormGroup } from '@angular/forms';

export class PersonalDetails {
  public employeeName;
  public namePrefix;
  public firstName;
  public middleName;
  public lastName;
  public gender;
  public dob;
  public pob;
  public mobileNumber;
  public emailId;

  constructor() {
    this.employeeName = new FormControl();
    this.namePrefix = new FormControl();
    this.firstName = new FormControl();
    this.middleName = new FormControl();
    this.lastName = new FormControl();
    this.gender = new FormControl();
    this.dob = new FormControl();
    this.pob = new FormControl();
    this.mobileNumber = new FormControl();
    this.emailId = new FormControl();
  }

}
