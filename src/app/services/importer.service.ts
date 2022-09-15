import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImporterService implements OnInit{
  file : any;
  

  private url: string;
  constructor(http : HttpClient) { 
    this.url = 'http://localhost:8080/postulants/postulant/';
  }
  ngOnInit(): void {
    
  }
  importer(libelle: string) {
    return this.url+libelle;
  }
  
}
