export class Employee {
  constructor(init?: Partial<Employee>) {
    Object.assign(this, init);
  }
}
