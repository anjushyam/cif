import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})

export class PersonalDetailsComponent implements OnInit {
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalDetailsForm = this.fb.group({
        namePrefix: ['', Validators.required],
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        pob: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        emailId: ['', Validators.required],
    });
  }

  get namePrefix() {
    return this.personalDetailsForm.get('namePrefix');
  }

  get firstName() {
    return this.personalDetailsForm.get('firstName');
  }

  get middleName() {
    return this.personalDetailsForm.get('middleName');
  }

  get lastName() {
    return this.personalDetailsForm.get('lastName');
  }

  get gender() {
    return this.personalDetailsForm.get('gender');
  }

  get dob() {
    return this.personalDetailsForm.get('dob');
  }

  get pob() {
    return this.personalDetailsForm.get('pob');
  }

  get mobileNumber() {
    return this.personalDetailsForm.get('mobileNumber');
  }

  get emailId() {
    return this.personalDetailsForm.get('emailId');
  }

}
