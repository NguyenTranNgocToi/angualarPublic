import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpsService } from '../Services/server-https.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age;
  public name;
  public comments;
  public posts;
  constructor(private common: CommonService, 
              private serverHttp: ServerHttpsService) { 
    this.age = common.age;
  }

  ngOnInit(): void {
    // this.serverHttp.getProfile().subscribe((data)=>{
    //     console.log(data);
    //     this.name = data.name;
    //   });
    
    //   this.serverHttp.getComments().subscribe((data)=>{
    //     console.log(data);
    //     this.comments = data;  
      
    //   });
    //   this.serverHttp.getPosts().subscribe((data)=>{
    //     console.log(data);
    //     this.posts = data;  
      
    //   });
     
  }
  public tangTuoi(){
    this.common.tangTuoi();
    this.age = this.common.age;
  }
  public addPost(){
    const newData = { title: "json-server", author: "typicode"};
    this.serverHttp.addPosts(newData).subscribe((data)=>{
      console.log("addpost", data);
      this.posts.push(data);
    });
  }
}
