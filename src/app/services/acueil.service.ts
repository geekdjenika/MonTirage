import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Accueil {

  constructor(private http:HttpClient) { }
  getListe(): Observable<object> {

   return this.http.get(`http://localhost:8080/liste/lister`);
  }
  getNombreTirageParListe(libelle: Object): Observable<Object> {
    return this.http.get('http://localhost:8080/tirage/tirageparliste/'+{libelle});
  }
}
