import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrls: ['./emergency-details.component.css']
})
export class EmergencyDetailsComponent implements OnInit {
  emergencyDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.emergencyDetailsForm = this.fb.group({
      bloodGroup: ['', Validators.required],
      allergicTo: [''],
      bloodPressure: [''],
      sugar: [''],
      eyeSightLeft: [''],
      eyeSightRight: [''],
      illness: [''],
      emergencyContactName: ['', Validators.required],
      emergencyContactAddress: ['', Validators.required],
      emergencyContactNumber: ['', Validators.required]
    });
  }
}
