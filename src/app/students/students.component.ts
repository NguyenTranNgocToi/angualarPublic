import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpsService } from '../Services/server-https.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[]= [];
  constructor(private common: CommonService, 
              private serverHttp: ServerHttpsService,
              private router: Router) { 

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
  }

  /**
   * updateStudent
   */
  public updateStudent(id) {
    this.router.navigate(['student-form',id]);
  }
}
