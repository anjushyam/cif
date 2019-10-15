import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PersonalDetails } from './personal-details.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})

export class PersonalDetailsComponent implements OnInit {
  // personalDetails: FormGroup;
  @Input() employeeFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.personalDetailsForm = this.fb.group({
    //     namePrefix: ['', Validators.required],
    //     firstName: ['', Validators.required],
    //     middleName: ['', Validators.required],
    //     lastName: ['', Validators.required],
    //     gender: ['', Validators.required],
    //     dob: ['', Validators.required],
    //     pob: ['', Validators.required],
    //     mobileNumber: ['', Validators.required],
    //     emailId: ['', Validators.required],
    // });
    Object.entries(new PersonalDetails()).forEach(([key,  value]) => {
      (this.employeeFormGroup.get('personalDetails') as FormGroup).addControl(key, value);
    });
  }
}
