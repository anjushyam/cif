import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AdditionalInformation } from '@employee/additional-information/additional-information.model';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  // additionalDetailsForm: FormGroup;
  @Input() employeeFormGroup: FormGroup;
  list = [0, 1, 2];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.additionalDetailsForm = this.fb.group({
    //   disabilities: this.fb.control(''),
    //   courtProceeding: this.fb.control(''),
    //   previousInterview: this.fb.group({
    //     when: this.fb.control(''),
    //     position: this.fb.control(''),
    //     outcome: this.fb.control('')
    //   }),
    //   hobbies: this.fb.control(''),
    //   interests: this.fb.control(''),
    //   goal: this.fb.control(''),
    //   principals: this.fb.control(''),
    //   strengths: this.fb.array([]),
    //   weakness: this.fb.array([]),
    //   willingTravel: this.fb.group({
    //     india: this.fb.control(''),
    //     abroad: this.fb.control(''),
    //     restrictions: this.fb.control('')
    //   }),
    //   employeeRelation: this.fb.control(''),
    //   publication: this.fb.control(''),
    //   trainingAttended: this.fb.control(''),
    //   trainingToAttend: this.fb.control(''),
    //   suggestion: this.fb.control('')
    // });
    Object.entries(new AdditionalInformation()).forEach(([key,  value]) => {
      (this.employeeFormGroup.get('additionalDetails') as FormGroup).addControl(key, value);
    });

    for (const i of this.list) {
      (this.employeeFormGroup.get('additionalDetails.strengths') as FormArray).push(this.fb.control(''));
      (this.employeeFormGroup.get('additionalDetails.weakness') as FormArray).push(this.fb.control(''));
    }
  }

}
