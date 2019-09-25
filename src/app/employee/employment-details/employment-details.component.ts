import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  @Input() employeeFormGroup: FormGroup;
  separationReasonEle = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.addEmployer();
  }

  employersControls() {
    return (this.employeeFormGroup.get('previousEmployers') as FormArray).controls;
  }

  addEmployer() {
    const previousEmployerGroup = (this.employeeFormGroup.get('previousEmployers') as FormArray);
    previousEmployerGroup.push(this.createEmployer());
    this.separationReasonEle[previousEmployerGroup.length - 1] = false;
  }

  createEmployer() {
    return this.fb.group({
      organizationName: [''],
      address: [''],
      employeeId: [''],
      employmentType: [''],
      employmentPeriod: this.fb.group({
        from: [''],
        to: ['']
      }),
      lastDesignation: [''],
      lastSalary: [''],
      reportedTo: this.fb.group({
        name: [''],
        designation: [''],
        number: ['']
      }),
      reasonForLeaving: [''],
      separationMode: [''],
      separationReason: ['']
    });
  }

  showSeparationReason(index, value) {
    this.separationReasonEle[index] = (value === 'other');
  }
}
