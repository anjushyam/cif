import { FormControl, FormGroup, FormArray } from '@angular/forms';

export class AdditionalInformation {
    public disabilities;
    public courtProceeding;
    public previousInterview;
    public hobbies;
    public interests;
    public goal;
    public principals;
    public strengths;
    public weakness;
    public willingTravel;
    public employeeRelation;
    public publication;
    public trainingAttended;
    public trainingToAttend;
    public suggestion;
  
    constructor() {
      this.disabilities = new FormControl();
      this.courtProceeding = new FormControl();
      this.previousInterview = new FormGroup({
        when: new FormControl(),
        position: new FormControl(),
        outcome: new FormControl()
      });
      this.hobbies = new FormControl();
      this.interests = new FormControl();
      this.goal = new FormControl();
      this.principals = new FormControl();
      this.strengths = new FormArray([]);
      this.weakness = new FormArray([]);
      this.willingTravel = new FormGroup({
        india: new FormControl(),
        abroad: new FormControl(),
        restrictions: new FormControl(),
      });
      this.employeeRelation = new FormControl();
      this.publication = new FormControl();
      this.trainingAttended = new FormControl();
      this.trainingToAttend = new FormControl();
      this.suggestion = new FormControl();
    }
  
  }