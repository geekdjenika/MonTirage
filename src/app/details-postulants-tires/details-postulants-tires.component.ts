import { faList } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accueil } from '../services/acueil.service';

@Component({
  selector: 'app-details-postulants-tires',
  templateUrl: './details-postulants-tires.component.html',
  styleUrls: ['./details-postulants-tires.component.css']
})
export class DetailsPostulantsTiresComponent implements OnInit {
  libelletirage!:String;
  detailPostulant:any;

  page:number=1;
  constructor(private service: Accueil, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let libelletirage = this.route.snapshot.params['libelle'];
    this.detailPostulant=this.service.getPostulantParTirage(libelletirage)
    this.service.getPostulantParTirage(libelletirage).subscribe(data=>{
      this.detailPostulant=data;
      console.log(data);

    })
  }
  liste=faList;

}
