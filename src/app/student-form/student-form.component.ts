import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpsService } from '../Services/server-https.service';
import { load } from 'mime';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public id =0;
  public name= new FormControl('');

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    code: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    
  });
  constructor(private common: CommonService, 
    private serverHttp: ServerHttpsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id>0){
      this.loaddata(this.id);
    }
  }
  public onSubmit(){
    // console.log("submit:",this.studentForm);
    const newStudent = {};
    for(const control in this.studentForm.controls){
      if(control){
        newStudent[control] =this.studentForm.controls[control].value;
      }
    }


    if(this.id>0){
        this.serverHttp.UpdateStudent(this.id,newStudent as Student).subscribe((data)=>{
        // console.log("student added",data);
       
      })
    }else{
      this.serverHttp.addStudent(newStudent as Student).subscribe((data)=>{
        // console.log("student added",data);
       
      })
    }
    
    this.router.navigate(["students"]);  
  }  
  private loaddata(id){
    // console.log("load id", id);
    this.serverHttp.getStudentById(id).subscribe((data)=>{
      console.log("data",data);
      for(const control in this.studentForm.controls){
        if(control){
          this.studentForm.controls[control].setValue(data[control]);
        }
      }
    })
  }
  private createNewData() {
    const newStudent = {};
    for(const control in this.studentForm.controls){
      if(control){
        newStudent[control] =this.studentForm.controls[control].value;
      }
    }
  }
    
    
    
}
