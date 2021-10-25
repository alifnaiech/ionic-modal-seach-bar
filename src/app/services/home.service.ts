import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }
  
  public getProvince(): Observable<any>{
    const headers = new HttpHeaders({'Accept': 'application/json','Content-Type': 'application/json'})
    return this.httpClient.get(environment.APIURL, {headers: headers});
  }

}
