import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization-letter',
  templateUrl: './authorization-letter.component.html',
  styleUrls: ['./authorization-letter.component.css']
})
export class AuthorizationLetterComponent implements OnInit {
  authorizationLetterForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.authorizationLetterForm = this.fb.group({
      fullName: ['', Validators.required],
      signature: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  get fullName() {
    return this.authorizationLetterForm.get('fullName');
  }

  get signature() {
    return this.authorizationLetterForm.get('signature');
  }

  get date() {
    return this.authorizationLetterForm.get('date');
  }
}
