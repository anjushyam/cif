import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonalDetailsComponent } from './employee/personal-details/personal-details.component';
import { IdDetailsComponent } from './employee/id-details/id-details.component';
import { FamilyDetailsComponent } from './employee/family-details/family-details.component';
import { CurrentAddressComponent } from './employee/address-details/current-address/current-address.component';
import { PermanentAddressComponent } from './employee/address-details/permanent-address/permanent-address.component';
import { AuthorizationLetterComponent } from './employee/authorization-letter/authorization-letter.component';
import { EmergencyDetailsComponent } from './employee/emergency-details/emergency-details.component';
import { AdditionalInformationComponent } from './employee/additional-information/additional-information.component';
import { ReferenceDetailsComponent } from './employee/reference-details/reference-details.component';
import { EducationDetailsComponent } from './employee/education-details/education-details.component';
import { EmploymentDetailsComponent } from './employee/employment-details/employment-details.component';
import { AddressDetailsComponent } from './employee/address-details/address-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    PersonalDetailsComponent,
    IdDetailsComponent,
    FamilyDetailsComponent,
    CurrentAddressComponent,
    PermanentAddressComponent,
    AuthorizationLetterComponent,
    EmergencyDetailsComponent,
    AdditionalInformationComponent,
    ReferenceDetailsComponent,
    EducationDetailsComponent,
    EmploymentDetailsComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
