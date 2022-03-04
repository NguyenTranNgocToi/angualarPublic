import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './Services/common.service';
import { ServerHttpsService } from './Services/server-https.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp:ServerHttpsService  
  ) {}

  ngOnInit(): void {
    
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}

