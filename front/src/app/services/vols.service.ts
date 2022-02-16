import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VolsService {
  public basedUrl = 'http://localhost:3000';  

  constructor(private http: HttpClient) { }
// get all vols
getAllVols(){
  return this.http.get(this.basedUrl + '/vols');
}

// search par date villeDepart & villeArrive
searchVols(date:string, villeDepart : string, villeArrive: string){
  return this.http.post(this.basedUrl+ '/vols/', {date, villeArrive, villeDepart});
}
}
