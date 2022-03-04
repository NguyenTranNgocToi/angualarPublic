import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name ='Toi';
  public age;
  public vehicles =['toyata', 'honda','yamaha', 'suzuki'];

  constructor(private common: CommonService) {
    this.age = common.age;
   }

  ngOnInit(): void {
  }
  public tangTuoi(){
    this.common.tangTuoi();
    this.age = this.common.age;
  }

}
