import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Leave } from './leave-list/leave';
import { LeaveListComponent } from './leave-list/leave-list.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesUrl = 'api/leaves';
  formData:LeaveListComponent;
  readonly rootURL="https://localhost:44353/api";

  constructor(private http: HttpClient) { }

  getLeaves(): Observable<Leave[]> {
    return this.http.get<Leave[]>(this.leavesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getLeave(id: number): Observable<Leave> {
    if (id === 0) {
      return of(this.initializeLeave());
    }
    const url = `${this.leavesUrl}/${id}`;
    return this.http.get<Leave>(url)
      .pipe(
        tap(data => console.log('getLeave: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createLeave(leave: Leave): Observable<Leave> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    leave.id = null;
    return this.http.post<Leave>(this.leavesUrl, leave, { headers })
      .pipe(
        tap(data => console.log('createLeave: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteLeave(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leavesUrl}/${id}`;
    return this.http.delete<Leave>(url, { headers })
      .pipe(
        tap(data => console.log('deleteLeave: ' + id)),
        catchError(this.handleError)
      );
  }

  updateLeave(leave: Leave): Observable<Leave> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.leavesUrl}/${leave.id}`;
    return this.http.put<Leave>(url, leave, { headers })
      .pipe(
        tap(() => console.log('updateLeave: ' + leave.id)),
        // Return leave on an update
        map(() => leave),
        catchError(this.handleError)
      );
  }

  private handleError(err) {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeLeave(): Leave {
    // Return an initialized object
    return {
      id: 0,
      leavename:null,
      numberOfDays:null

    };
  }
}
