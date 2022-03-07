import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpsService } from '../Services/server-https.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[]= [];
  readonly APP_URL = 'http://localhost:8080/demo3/api';
  myresponse: any;
  
  constructor(private common: CommonService, 
              private serverHttp: ServerHttpsService,
              private router: Router,
              private _http: HttpClient) { 

    }

  ngOnInit(): void {
    this.loadData();
  }
  public AddStudent(){
    this.router.navigate(['student-form',0]);
  }
  /**
   * deleteStudent()
   */
  public deleteStudent(id){
    console.log("xóa sinh viên",id );
    this.serverHttp.deleteStudent(id).subscribe((data)=>{
      console.log("delete data",data);
    });
    this.loadData();
  }
  /**
   * loadData
   */
  public loadData() {
    this.serverHttp.getStudent().subscribe((data)=>{
      console.log(data);
      this.students= data;
    });
    // this._http.get(this.APP_URL + '/students').subscribe(
    //   data => {
    //     this.myresponse = data;
    //     console.log("my response",this.myresponse );
    //   },
    //   error => {
    //     console.log('Error occured', error);
    //   }
    // );
  }

  /**
   * updateStudent
   */
  public updateStudent(id) {
    this.router.navigate(['student-form',id]);
  }
}
