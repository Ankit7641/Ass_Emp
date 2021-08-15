import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employe } from '../../employe.model';
import { ListPresenterService } from '../list-presenter/list-presenter.service';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.component.html',
  styleUrls: ['./list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders:[ListPresenterService]
})
export class ListPresentationComponent implements OnInit {


  //sort
  public  reverse!: boolean;
  public orderType!: string;
  public key!: string;

  @Input() public set employlist( id: Employe[]) {
    if (id) {
      this._employelist = id
    }
  }

  public get employlist(): Employe[] {
    return this._employelist
  }

  //sort
  @Output() public sort: EventEmitter<any>=new EventEmitter();

  @Output() public deleteId: EventEmitter<any> = new EventEmitter();


  private _employelist: Employe[] = [];
  public bankGroup: FormGroup;


  constructor(
    private userservice: ListPresenterService
  ) { 
    this.employlist = [];
    this.bankGroup = this.userservice.bindForm();
  }

  ngOnInit() : void {
    this.userservice.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    });
  }

  public deleteuserdetail(id: number) {
    this.userservice.deleteuserdetail(id)
  }
//sort
  public sortData(key: string): void {
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.userservice.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }

}
