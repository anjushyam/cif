import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  additionalDetailsForm: FormGroup;
  list = [0, 1, 2];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.additionalDetailsForm = this.fb.group({
      disabilities: this.fb.control(''),
      courtProceeding: this.fb.control(''),
      previousInterview: this.fb.group({
        when: this.fb.control(''),
        position: this.fb.control(''),
        outcome: this.fb.control('')
      }),
      hobbies: this.fb.control(''),
      interests: this.fb.control(''),
      goal: this.fb.control(''),
      principals: this.fb.control(''),
      strengths: this.fb.array([]),
      weakness: this.fb.array([]),
      willingTravel: this.fb.group({
        india: this.fb.control(''),
        abroad: this.fb.control(''),
        restrictions: this.fb.control('')
      }),
      employeeRelation: this.fb.control(''),
      publication: this.fb.control(''),
      trainingAttended: this.fb.control(''),
      trainingToAttend: this.fb.control(''),
      suggestion: this.fb.control('')
    });

    for (const i of this.list) {
      (this.additionalDetailsForm.get('strengths') as FormArray).push(this.fb.control(''));
      (this.additionalDetailsForm.get('weakness') as FormArray).push(this.fb.control(''));
    }
  }

}
