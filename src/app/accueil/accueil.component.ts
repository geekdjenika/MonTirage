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
  NombreListe:any;
  NombreTirage:any;
  NombreListeTiree:any;
  constructor(private service : Accueil) { }



  ngOnInit(): void {

    this.service.getListe().subscribe(data=>{
      console.log(data)
      this.accueil=data;
    })

    this.service.getNombreTirageParListe('liste1').subscribe(data=>{
    this.nbtirage_liste = data
  })
  this.service.getNombreliste().subscribe({next: data=>{
    this.NombreListe=data
  },error:(e)=>{
    this.NombreListe="null";
    }

  })

  this.service.getNombreTirage().subscribe({next: data=>{
    this.NombreTirage=data;
  },error:(e)=>{
     this.NombreTirage="null";
  }
  
  })
  this.service.getNombreListeTiree().subscribe({next: data=>{
    this.NombreListeTiree=data;
    }, error:(e)=>{
      this.NombreListeTiree="null"
    }
  })

  }
  liste=faList;
  nbtirage_liste!: Object;


}
