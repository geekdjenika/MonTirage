import { Component, OnInit } from '@angular/core';
import { faList} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  liste=faList;

}
