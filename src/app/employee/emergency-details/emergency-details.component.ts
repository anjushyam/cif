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

  get bloodGroup() {
    return this.emergencyDetailsForm.get('bloodGroup');
  }

  get emergencyContactName() {
    return this.emergencyDetailsForm.get('emergencyContactName');
  }

  get emergencyContactAddress() {
    return this.emergencyDetailsForm.get('emergencyContactAddress');
  }

  get emergencyContactNumber() {
    return this.emergencyDetailsForm.get('emergencyContactNumber');
  }
}
