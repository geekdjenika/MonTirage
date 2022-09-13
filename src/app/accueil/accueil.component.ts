import { Component, OnInit } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { Accueil } from '../services/acueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  accueil:any;
  constructor(private service : Accueil) { }



  ngOnInit(): void {

    this.service.getListe().subscribe(data=>{
      console.log(data)
      this.accueil=data;
    })

    this.service.getNombreTirageParListe('liste1').subscribe(data=>{
    this.nbtirage_liste = data
  })

  }
  liste=faList;
  nbtirage_liste!: Object;


}
