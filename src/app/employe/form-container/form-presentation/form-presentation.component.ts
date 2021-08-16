import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employe } from '../../employe.model';
import { FormPresenterService } from '../form-presenter/form-presenter.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [FormPresenterService]
})
export class FormPresentationComponent implements OnInit {

  // validation Variable is declared 
  submitted = false;

  private _employlistbyId: Employe[] = [];

  @Input() public set employlistbyId(id: Employe[]) {
    if (id) {
      if (window.confirm('Are you sure, you want to Edit?')) {
      this._employlistbyId = id
      this.userForm.patchValue(this.employlistbyId)
    }
  }
  }

  public get employlistbyId(): Employe[] {
    return this._employlistbyId
  }

  @Output() userData: EventEmitter<any> = new EventEmitter();

  public userForm: FormGroup = this.userService.bindForm();

  constructor(
    private userService: FormPresenterService
  ) {
    this.employlistbyId = [];
   }

  ngOnInit() {

    // It call data from usermanagFormPresenterService
    this.userService.employData$.subscribe((userData: any) => {
      this.userData.emit(userData)
    })
  }
   // Control for [fromgroup]
   get userFormControl() {
    return this.userForm.controls;
  }

  // Clicking on submit buttom Data will come from form
  public onSubmit() {
    this.userService.userdetail(this.userForm)
  }

}
