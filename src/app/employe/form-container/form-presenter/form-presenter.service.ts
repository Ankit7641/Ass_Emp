import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormPresenterService {

  public employData: Subject<any> = new Subject();
  public employData$: Observable<any>

  constructor(private fb: FormBuilder) { 
    this.employData$ = this.employData.asObservable();
  }

  public bindForm(){
     return this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      birthdate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required])
    });
  }

   // Data will get
   public userdetail(userForm: FormGroup) {
    if (userForm.valid) {
      this.employData.next(userForm.value);/*  */
    } else {
    }
  }

}
