import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

  libelle:String='';

  constructor() { }

  ngOnInit(): void {
  }

  newtirage(f:NgForm){

  }
}
