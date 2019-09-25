import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Employee } from '@employee/employee.model';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewDetailsComponent implements OnInit {
  @Input() employeeFormGroup: FormGroup;
  @Input() imageURL: string;
  employee: Employee = new Employee();
  @Output() employeeEvent = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  addEmployee() {
    // if (this.employeeFormGroup.valid) {
      this.employee = new Employee(this.employeeFormGroup.value);
      console.log(this.employee);
    // }
  }

  openPreview(candidateDetails) {
    this.modalService.open(candidateDetails, { scrollable: true, centered: true, size: 'xl' });
  }

  editDetails() {
    this.modalService.dismissAll('Edit Details');
    this.employeeEvent.emit('goToSection');
  }
}
