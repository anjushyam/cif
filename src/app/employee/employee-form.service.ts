import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeFormService {
  private employeeForm: BehaviorSubject<FormGroup> = 
  new BehaviorSubject(this.fb.group(new Employee()));

  constructor(private fb: FormBuilder) { }

  employeeForm$: Observable<FormGroup> = this.employeeForm.asObservable();
}
