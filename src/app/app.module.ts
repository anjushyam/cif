import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/header/header.component';
import { FooterComponent } from '@app/footer/footer.component';
import { EmployeeComponent } from '@employee/employee.component';
import { PersonalDetailsComponent } from '@employee/personal-details/personal-details.component';
import { IdDetailsComponent } from '@employee/id-details/id-details.component';
import { FamilyDetailsComponent } from '@employee/family-details/family-details.component';
import { AuthorizationLetterComponent } from '@employee/authorization-letter/authorization-letter.component';
import { EmergencyDetailsComponent } from '@employee/emergency-details/emergency-details.component';
import { AdditionalInformationComponent } from '@employee/additional-information/additional-information.component';
import { ReferenceDetailsComponent } from '@employee/reference-details/reference-details.component';
import { EducationDetailsComponent } from '@employee/education-details/education-details.component';
import { EmploymentDetailsComponent } from '@employee/employment-details/employment-details.component';
import { AddressDetailsComponent } from '@employee/address-details/address-details.component';
import { PreviewDetailsComponent } from '@employee/preview-details/preview-details.component';
import { ValidateDirective } from '@app/directive/validate.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'dashboard', component: DashboardComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    PersonalDetailsComponent,
    IdDetailsComponent,
    FamilyDetailsComponent,
    AuthorizationLetterComponent,
    EmergencyDetailsComponent,
    AdditionalInformationComponent,
    ReferenceDetailsComponent,
    EducationDetailsComponent,
    EmploymentDetailsComponent,
    AddressDetailsComponent,
    PreviewDetailsComponent,
    ValidateDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
