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

  childrenControls() {
    return (this.familyDetailsForm.get('children') as FormArray).controls;
  }

  addChild() {
    (this.familyDetailsForm.get('children') as FormArray).push(this.createChild());
  }

  deleteChild(index: number) {
    (this.familyDetailsForm.get('children') as FormArray).removeAt(index);
  }

  createChild() {
    return this.fb.group({
      childName: [''],
      childDob: ['']
    });
  }
}
