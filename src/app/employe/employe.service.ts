import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return this.http.get<any>(`${this.apiURL+'/employe/'}?q=&_sort=${key}&_order=${order}`)
  }

  // Delete Multiple records
  deleteEmploy(id: number[]) {
	  if (confirm("Are you sure to delete?")) {
		const data = {'id' : id};
		const url = `${this.apiURL}/delete/employe`;
		const options = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		
		const resp = this.http.post<any>(url, data, options);//.map(resp => {return resp;}).catch(err => {console.log(err);});
		
		//console.log('resp: ' + resp);
		
		return resp;
	  }
	  
	  return of({});
  }

}
