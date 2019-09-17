import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  familyDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.familyDetailsForm = this.fb.group({
      fatherName: ['', Validators.required],
      fatherDob: ['', Validators.required],
      motherName: ['', Validators.required],
      motherDob: ['', Validators.required],
      spouseName: ['', Validators.required],
      spouseDob: ['', Validators.required],
      children: this.fb.array([this.createChild()]),
    });
  }

  get fatherName() {
    return this.familyDetailsForm.get('fatherName');
  }

  get fatherDob() {
    return this.familyDetailsForm.get('fatherDob');
  }

  get motherName() {
    return this.familyDetailsForm.get('motherName');
  }

  get motherDob() {
    return this.familyDetailsForm.get('motherDob');
  }

  get spouseName() {
    return this.familyDetailsForm.get('spouseName');
  }

  get spouseDob() {
    return this.familyDetailsForm.get('spouseDob');
  }

  childrenControls() {
    return (this.familyDetailsForm.get('children') as FormArray).controls;
  }

  addChild() {
    (this.familyDetailsForm.get('children') as FormArray).push(this.createChild());
  }

  createChild() {
    return this.fb.group({
      childName: [''],
      childDob: ['']
    });
  }
}
