import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  nbtirage_liste:any;
  constructor(private service : Accueil, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getListeTiree().subscribe(data=>{
      console.log(data)
      this.accueil=data;
    })

    this.service.getNTPL().subscribe(data=>{
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
  


}
