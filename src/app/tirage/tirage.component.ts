import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Accueil } from '../services/acueil.service';
import { HttpClient } from '@angular/common/http';
import {faHome,faRotate,faFileCirclePlus,faPlusCircle, faCaretDown} from '@fortawesome/free-solid-svg-icons';


export interface TirageModel{
  idtirage: number,
  libelletirage: string
}
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {
  libelleliste:String='';
  nombreatire!:number;
  formulaireTirage! : FormGroup;
  
  tirageOjet: TirageModel = {
    idtirage: 0,
  libelletirage: ''
  }
nomtirage:any;
  liste:any;
  constructor(private service : Accueil, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
      console.log(data)
      this.liste=data;
    })
  }
  public tirer() {
    const url='http://localhost:8080/tirage/createTirage';
    this.tirageOjet.libelletirage = this.nomtirage
    
    this.http.post(`${url}/${this.libelleliste}/${this.nombreatire}`,this.tirageOjet).subscribe({
      next: data=> {
        alert('Tirage effectué avec succès!');
        this.libelleliste='';
      },
      error: (e) => {
        alert('Problème survenu lors du tirage !')
      }
    })


  }
  bare=faCaretDown

}
