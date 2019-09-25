import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  addressDetailsForm: FormGroup;
  addressTypes = [
    'currentAddress',
    'permanentAddress'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addressDetailsForm = this.fb.group({
      currentAddress: this.createAddress(),
      permanentAddress: this.createAddress(),
      sameAddress: this.fb.control(''),
      remarks: this.fb.control('')
    });
  }

  createAddress() {
    return this.fb.group({
      houseNumber: this.fb.control(''),
      street: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      pinCode: this.fb.control(''),
      landmark: this.fb.control(''),
      duration: this.fb.control(''),
      telephone: this.fb.control('')
    });
  }

  copyAddress(event) {
    const currentAddressData = (this.addressDetailsForm.get('currentAddress') as FormGroup).getRawValue();

    if (event.target.checked) {
      (this.addressDetailsForm.get('permanentAddress') as FormGroup).setValue(currentAddressData);
      this.addressDetailsForm.get('sameAddress').setValue(1);
    } else {
      (this.addressDetailsForm.get('permanentAddress') as FormGroup).reset();
      this.addressDetailsForm.get('sameAddress').setValue(0);
    }
  }
}
