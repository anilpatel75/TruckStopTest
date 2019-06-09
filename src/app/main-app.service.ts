import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, Observable, throwError, BehaviorSubject } from 'rxjs';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';




@Injectable({
  providedIn: 'root'
})
export class MainAppService {

  //observable Subject for handling event
  ItemSubject = new Subject();
  errorSubject = new Subject();

  constructor(private http: HttpClient) { }

  // requesting character of films.
  getJsonData() {
    return this.http.get("../assets/character.json")
      .pipe(
        catchError(this.errorHandle)
      );

  }

  // requesting  films based on the click of character
  getSelectedItem(Item: string) {
    return this.http.get(Item)
      .pipe(
        catchError(this.errorHandle)
      );
  }
  
  // function for error handler
   errorHandle(error: HttpErrorResponse) {
    return throwError(error.message);
  
  }
} 
