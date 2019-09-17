import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  @Input() employeeFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.addEmployer();
  }

  employersControls() {
    return (this.employeeFormGroup.get('previousEmployers') as FormArray).controls;
  }

  addEmployer() {
    (this.employeeFormGroup.get('previousEmployers') as FormArray).push(this.createEmployer());
  }

  createEmployer() {
    return this.fb.group({
      organizationName: [''],
      address: [''],
      employeeId: [''],
      employmentType: [''],
      employmentPeriod: [''],
      lastDesignation: [''],
      lastSalary: [''],
      reportedToName: [''],
      reportedToDesignation: [''],
      reportedToNumber: [''],
      reasonForLeaving: [''],
      separationMode: [''],
    });
  }

  // (Tick accordingly) Permanent Contract
  // Period of Employment(DD-Month-YY)
  // Mode of Separation (Tick accordingly) a. Resignation b. Termination c. Absconded d. Closed Operations e. Others (Pls Specify)
}
