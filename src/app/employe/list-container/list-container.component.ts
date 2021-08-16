import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeService } from '../employe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  public employlist$: Observable<any> = of();

  //sort
  public orderAs!: string;
  public fieldName!: string;

  constructor( private userservice: EmployeService,
    private location: Location
    ) {
      this.employlist$ = this.userservice.getuserdetails();
     }

  ngOnInit(): void {
  }

  // DAta will be deleted
  public onDeleteId(id: number) {
    this.employlist$=this.userservice.deleteuserdetail(id)
    this.location.back();
  }
  private getUsers(): void {
    this.employlist$ = this.userservice.getUsersAll( this.fieldName, this.orderAs);
  }

  public sort(value:any): void {
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getUsers();
  }
  
}
