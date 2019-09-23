import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { IdDetailsComponent } from './id-details/id-details.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { EmergencyDetailsComponent } from './emergency-details/emergency-details.component';
import { AuthorizationLetterComponent } from './authorization-letter/authorization-letter.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit, AfterViewInit {
  employeeFormGroup: FormGroup;
  imageURL: string;

  @ViewChild(PersonalDetailsComponent, {static: false}) personalDetails;
  @ViewChild(IdDetailsComponent, {static: false}) idDetails;
  @ViewChild(FamilyDetailsComponent, {static: false}) familyDetails;
  @ViewChild(AddressDetailsComponent, {static: false}) addressDetails;
  @ViewChild(EducationDetailsComponent, {static: false}) educationalDetails;
  @ViewChild('educationSection', {static: false}) educationSection: ElementRef;
  @ViewChild(ReferenceDetailsComponent, {static: false}) referenceDetails;
  @ViewChild(AdditionalInformationComponent, {static: false}) additionalDetails;
  @ViewChild(EmergencyDetailsComponent, {static: false}) emergencyDetails;
  @ViewChild(AuthorizationLetterComponent, {static: false}) authorizationLetter;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeFormGroup = this.fb.group({
      avatar: [null],
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      previousEmployers: this.fb.array([])
    });
  }

  ngAfterViewInit() {
    this.employeeFormGroup.addControl('personalDetails', this.personalDetails.personalDetailsForm);
    this.personalDetails.personalDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('idDetails', this.idDetails.idDetailsForm);
    this.idDetails.idDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('familyDetails', this.familyDetails.familyDetailsForm);
    this.familyDetails.familyDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('addressDetails', this.addressDetails.addressDetailsForm);
    this.addressDetails.addressDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('educationalDetails', this.educationalDetails.educationalDetailsForm);
    this.educationalDetails.educationalDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('referenceDetails', this.referenceDetails.referenceDetailsForm);
    this.referenceDetails.referenceDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('additionalDetails', this.additionalDetails.additionalDetailsForm);
    this.additionalDetails.additionalDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('emergencyDetails', this.emergencyDetails.emergencyDetailsForm);
    this.emergencyDetails.emergencyDetailsForm.setParent(this.employeeFormGroup);

    this.employeeFormGroup.addControl('authorizationLetter', this.authorizationLetter.authorizationLetterForm);
    this.authorizationLetter.authorizationLetterForm.setParent(this.employeeFormGroup);
  }

  // Image Preview
  showPreview(event) {
    event.preventDefault();

    const [file] = event.target.files;
    this.employeeFormGroup.patchValue({
      avatar: file
    });

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    this.showPreview(event);
  }

  goToSection() {
    this.educationSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  get employeeName() {
    return this.employeeFormGroup.get('employeeName');
  }

  get employeeId() {
    return this.employeeFormGroup.get('employeeId');
  }
}
