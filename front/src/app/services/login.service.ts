import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public basedUrl = 'http://localhost:8081';  

  constructor(private http: HttpClient) {}

  //** Login  */
login ( username: string,  password: string){
  return this.http.post(this.basedUrl+ '/api/v1/auth/login', {username, password })
}


}
