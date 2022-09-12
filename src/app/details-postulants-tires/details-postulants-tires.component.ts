import { faList } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-postulants-tires',
  templateUrl: './details-postulants-tires.component.html',
  styleUrls: ['./details-postulants-tires.component.css']
})
export class DetailsPostulantsTiresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  liste=faList;

}
