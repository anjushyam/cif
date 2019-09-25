import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.css']
})
export class ReferenceDetailsComponent implements OnInit {
  referenceDetailsForm: FormGroup;
  references = [1, 2];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.referenceDetailsForm = this.fb.group({
      1: this.createReference(),
      2: this.createReference()
    });
  }

  createReference() {
    return this.fb.group({
      name: this.fb.control(''),
      designation: this.fb.control(''),
      organization: this.fb.control(''),
      number: this.fb.control(''),
      email: this.fb.control(''),
      period: this.fb.control('')
    });
  }
}
