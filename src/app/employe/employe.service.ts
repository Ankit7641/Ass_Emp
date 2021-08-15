import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from './employe.model';

@Injectable()
export class EmployeService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Get List Of user Detail 
  public getuserdetails(): Observable<Employe> {
    console.log(Employe)
    return this.http.get<Employe>(this.apiURL + '/employe')
  }

  // Add user Detail
  public adduserdetail(employ: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiURL + '/employe/', employ)

  }


  // Delete user Detail by ID
  public deleteuserdetail(id: number) {
    return this.http.delete<Employe>(this.apiURL + '/employe/' + id)

  }

  // Get Method to fetch Data
  getuser(id: string): Observable<Employe> {
    return this.http.get<Employe>(this.apiURL + '/employe/' + id)
  }

  // Update user Detail
  updateuserdetail(id: string, employ: any): Observable<Employe> {
    return this.http.put<Employe>(this.apiURL + '/employe/' + id, (employ))
  }


  //sort
  getUsersAll(key:string,order:string):Observable<any>{
    debugger
    return this.http.get<any>(`${this.apiURL+'/employe/'}?q=&_sort=${key}&_order=${order}`)
  }

}
