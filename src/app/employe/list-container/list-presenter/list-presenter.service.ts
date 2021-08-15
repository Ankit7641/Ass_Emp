import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { EmployeService } from '../../employe.service';

@Injectable()
export class ListPresenterService {

  public userId: Subject<any> = new Subject();
  public userId$!: Observable<any>;
  employe: any=[];

  constructor(public restApi:EmployeService) { 

    this.userId$ = this.userId.asObservable();
    
  }

  public bindForm() {
    return new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      birthdate: new FormControl(),
      gender: new FormControl(),
      department: new FormControl(),
      contactno: new FormControl()
    });
  }
  // Display data in List
  public loaduserdetail() {
    return this.restApi.getuserdetails().subscribe((data: any) => {
      this.employe = data;
    })

  }


  // Delete user detail 
  public deleteuserdetail(id: number) {
    debugger
    console.log('delete', id);
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteuserdetail(id).subscribe(data => {
        this.loaduserdetail()
      })
    }
  }

  // Sort
  public order(order: string): string {
    debugger
    if (order === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }
  
}
