import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Student } from '../models/Student';
@Injectable({
  providedIn: 'root'
})

export class ServerHttpsService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private REST_API_SERVER ='http://localhost:3000';
  // private REST_API_SERVER_SPRING ='http://localhost:8080/demo3/api';
  private REST_API_SERVER_SPRING ='http://localhost:8080/Spring/api';
  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
         `Backend returned code ${error.status}, body was: `, error.error);
      
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }  
  public getProfile(): Observable<any>{
    const url=`${this.REST_API_SERVER}/profile`;
    return this.httpClient
                          .get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 
  public getComments(): Observable<any>{
    const url=`${this.REST_API_SERVER}/comments`;
    return this.httpClient
                          .get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 
  public getPosts(): Observable<any>{
    const url=`${this.REST_API_SERVER}/posts`;
    return this.httpClient
                          .get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 
  public addPosts(data){
    const url=`${this.REST_API_SERVER}/posts`;
    return this.httpClient
                          .post<any>(url,data, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 


  // student fake json
  // public getStudent(): Observable<any>{
  //   const url=`${this.REST_API_SERVER}/students`;
  //   return this.httpClient
  //                         .get<any>(url, this.httpOptions)
  //                         .pipe(catchError(this.handleError));
  // } 
  // public addStudent(data: Student){
  //   const url=`${this.REST_API_SERVER}/students`;
  //   return this.httpClient
  //                         .post<any>(url,data, this.httpOptions)
  //                         .pipe(catchError(this.handleError));
  // } 

  // public deleteStudent(id) {
  //   const url=`${this.REST_API_SERVER}/students/`+id;
  //   return this.httpClient
  //                         .delete<any>(url)
  //                         .pipe(catchError(this.handleError));
  // }
  // public getStudentById(id): Observable<any>{
  //   const url=`${this.REST_API_SERVER}/students/`+id;
  //   return this.httpClient
  //                         .get<any>(url, this.httpOptions)
  //                         .pipe(catchError(this.handleError));
  // } 

  // public  UpdateStudent(id: number,data: Student){
  //   const url=`${this.REST_API_SERVER}/students/`+id;
  //   return this.httpClient
  //                         .put<any>(url,data, this.httpOptions)
  //                         .pipe(catchError(this.handleError));
  // } 
  //api spring
  public getStudent(): Observable<any>{
    const url=`${this.REST_API_SERVER_SPRING}/students`;
    return this.httpClient
                          .get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 
  public addStudent(data: Student){
    const url=`${this.REST_API_SERVER_SPRING}/students`;
    return this.httpClient
                          .post<any>(url,data, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 

  public deleteStudent(id) {
    const url=`${this.REST_API_SERVER_SPRING}/students/`+id;
    return this.httpClient
                          .delete<any>(url)
                          .pipe(catchError(this.handleError));
                  
  }
  public getStudentById(id): Observable<any>{
    const url=`${this.REST_API_SERVER_SPRING}/students/`+id;
    return this.httpClient
                          .get<any>(url, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 

  public  UpdateStudent(id: number,data: Student){
    const url=`${this.REST_API_SERVER_SPRING}/students/`+id;
    return this.httpClient
                          .put<any>(url,data, this.httpOptions)
                          .pipe(catchError(this.handleError));
  } 
  
}
