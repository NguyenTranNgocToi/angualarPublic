import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public name= new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  public updateName(){
    this.name.setValue("Nguyễn Tới");
  }
  public onSubmit(){
    console.log("submit:",this.profileForm);
    console.log("name:", this.profileForm.value.firstName);
    console.log("lastname:", this.profileForm.value.lastName);
    
  }
}
