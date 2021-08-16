import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { EmployeService } from '../../employe.service';

@Injectable()
export class ListPresenterService {

  public userId: Subject<any> = new Subject();
  public userId$!: Observable<any>;
  employe: any=[];
  clss!: string;
  msg!: string;

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
    console.log('delete', id);
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteuserdetail(id).subscribe(data => {
        this.loaduserdetail()
      })
    }
  }

  // Sort
  public order(order: string): string {
    if (order === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }

  // Multiple Delete Record

  checkAllCheckBox(ev: { target: { checked: any; }; }) {
		this.employe.forEach((x: { checked: any; }) => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.employe.every((p: { checked: any; }) => p.checked);
	}
	
	deleteEmploy(): void {
		const selectedEmploye = this.employe.filter((employ: { checked: any; }) => employ.checked).map((p: { id: any; }) => p.id);
		//console.log (selectedProducts);
		
		if(selectedEmploye && selectedEmploye.length > 0) {
			this.restApi.deleteEmploy(selectedEmploye)
				.subscribe((res: any) => {
					this.clss = 'grn';
					this.msg = 'Employes successfully deleted';
					}, (err: any) => {
                        this.clss = 'rd';
						this.msg = 'Something went wrong during deleting Employe';
                    }
                );
		} else {
			
		}
	}
  
}
