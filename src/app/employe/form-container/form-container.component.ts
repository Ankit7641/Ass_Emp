import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employe } from '../employe.model';
import { EmployeService } from '../employe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  public employlistbyId$:Observable<any> = of();
  

  constructor(
    public actRoute: ActivatedRoute,
    private restApi: EmployeService,
    private location: Location
  ) {
    this.employlistbyId$= this.restApi.getuser(this.id)
   }

  ngOnInit() {
  }
  // Data will add to employeService
  public adduserdetail(user: Employe) {
    if(this.id){
      
      this.restApi.updateuserdetail(this.id,user).subscribe(()=>{
        this.restApi.getuserdetails();
        this.location.back();
      })
    
    }
    else
    {
    this.restApi.adduserdetail(user).subscribe((user: any) => {
      this.restApi.getuserdetails();
      this.location.back();
    })
  }

  }

}