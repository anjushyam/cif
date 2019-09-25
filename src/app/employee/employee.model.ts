export class Employee {
  // public empName: string;
  // public empId: string;

  constructor(init?: Partial<Employee>) {
    Object.assign(this, init);
  }

  // constructor() {}

  // get employeeName(): string {
  //   return this.empName;
  // }
  //
  // set employeeName(val: string) {
  //   this.empName = val;
  // }
  //
  // get employeeId(): string {
  //   return this.empId;
  // }
  //
  // set employeeId(val: string) {
  //   this.empId = val;
  // }

}
