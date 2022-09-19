import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accueil } from '../services/acueil.service';
import { Liste } from './liste';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.css']
})

export class DetailsListeComponent implements OnInit {
  detailsliste:any;
  page:number=1;
  nomliste!:Liste
  constructor(private service: Accueil, private route:ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.detailsliste=this.service.getTirageParListe(id);
    this.service.getTirageParListe(id).subscribe(data=>{
      this.detailsliste = data;
      console.log(data);
    })
    this.nomliste=this.service.getListeById(id);
    this.service.getListeById(id).subscribe((data: Liste)=>{
      this.nomliste = data;
      console.log(data)
    })
  }
}