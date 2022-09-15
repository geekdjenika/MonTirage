import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

  libelle:String='';
  fichier:any;
  formulaireImporter! : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // this.formulaireImporter = this.formBuilder.group({
    //   libelle : ['', Validators.required],
    //   file : ['', Validators.required],
    //})
  }
  televerser(event : any){
    this.fichier = event.target["files"][0];
  }
  public importerList() {
    const url = 'http://localhost:8080/postulants/postulant';
    let formData = new FormData();
    formData.append('file',this.fichier);
    console.log(this.fichier)
     this.http.post(`${url}/${this.libelle}`,formData).subscribe({next: data=>{
      alert("fichier importer avec success")
      this.libelle = ''
      
     }, error: (e) =>{
      alert("Veuillez verifier les differents champs")
     }    });
  }
}
