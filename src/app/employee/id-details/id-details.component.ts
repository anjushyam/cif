import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-id-details',
  templateUrl: './id-details.component.html',
  styleUrls: ['./id-details.component.css']
})
export class IdDetailsComponent implements OnInit {
  idDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.idDetailsForm = this.fb.group({
      nationality: ['', Validators.required],
      passportNumber: ['', Validators.required],
      pan: ['', Validators.required],
      nsrNumber: ['', Validators.required],
    });
  }

  get nationality() {
    return this.idDetailsForm.get('nationality');
  }

  get passportNumber() {
    return this.idDetailsForm.get('passportNumber');
  }

  get pan() {
    return this.idDetailsForm.get('pan');
  }

  get nsrNumber() {
    return this.idDetailsForm.get('nsrNumber');
  }

}
