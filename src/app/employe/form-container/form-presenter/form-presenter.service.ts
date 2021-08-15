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
     // Value wiil be bind from fromdata
     return this.fb.group({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required, Validators.email]),
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
