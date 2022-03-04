import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name ='';
  public altherEgo='';
  public vehicle ='';
  public vehicles =['toyata', 'honda','yamaha', 'suzuki'];

  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    console.log("submit");
    console.log('name:'+ this.name);
    console.log('altherEgo:'+ this.altherEgo);
    console.log('Vehicle:'+ this.vehicle);
  }
  public selectVehicle(event){
    this.vehicle = event.target.value ;
  }

}
