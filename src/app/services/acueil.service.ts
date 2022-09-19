import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liste } from '../details-liste/liste';

@Injectable({
  providedIn: 'root'
})
export class Accueil {

  constructor(private http:HttpClient) { }
  getListe(): Observable<object> {

   return this.http.get(`http://localhost:8080/liste/lister`);
  }

  getListeTiree(): Observable<object> {

    return this.http.get(`http://localhost:8080/liste/tiree`);
   }

  getNombreTirageParListe(libelle: String): Observable<object> {
    return this.http.get(`http://localhost:8080/tirage/tirageparliste/${libelle}`);
  }
  getNTPL():Observable<Object>{
    return this.http.get(`http://localhost:8080/tirage/ntpl`)
  }
  getNombreliste():Observable<Object>{
    return this.http.get(`http://localhost:8080/liste/nombreliste`);
  }
  getNombreTirage():Observable<Object>{
    return this.http.get(`http://localhost:8080/tirage/nombretirage`);
  }

  getNombreListeTiree():Observable<Object>{
    return this.http.get(`http://localhost:8080/tirage/nombrelistetiree`);
  }
  getTirageParListe(id: number):Observable<Object>{
    return this.http.get(`http://localhost:8080/tirage/tiragesuruneliste/${id}`)
  }
  getPostulantParTirage(libelletirage: String):Observable<Object>{
    return this.http.get(`http://localhost:8080/tire/afficherpostulanttire/${libelletirage}`)
  }
  getListeById(idliste:number):any {
    return this.http.get(`http://localhost:8080/liste/affichernomliste/${idliste}`)
  }
  getTirageParLibelle(libelletirage : String) : any {
    return this.http.get(`http://localhost:8080/tirage/tirageparnom/${libelletirage}`)
  }
}
