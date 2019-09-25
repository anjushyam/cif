import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})

export class EducationDetailsComponent implements OnInit {
  educationalDetailsForm: FormGroup;
  specializations = [
    'tenth', 'twelfth', 'graduation', 'postGraduation'
  ];
  specializationsText = {
    tenth : '10th',
    twelfth : '12th',
    graduation : 'Graduation Program',
    postGraduation : 'Post Graduation Program'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.educationalDetailsForm = this.fb.group({
      tenth: this.createGroup({value: '10th', disabled: false}),
      twelfth: this.createGroup({ value: '12th', disabled: false }),
      graduation: this.createGroup(''),
      postGraduation: this.createGroup(''),
      gapReason: this.fb.control('')
    });
  }

  createGroup(specializationData) {
    return this.fb.group({
      specializationName: this.fb.control(specializationData),
      institutionName: this.fb.control(''),
      boardAffiliated: this.fb.control(''),
      registerNumber: this.fb.control(''),
      period: this.fb.control(''),
      passingYear: this.fb.control(''),
      markScored: this.fb.control('')
    });
  }
}
