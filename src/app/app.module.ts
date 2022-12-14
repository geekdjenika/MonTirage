import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { ImporterComponent } from './importer/importer.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { DetailsPostulantsTiresComponent } from './details-postulants-tires/details-postulants-tires.component';
import { Liste } from './details-liste/liste';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


//Creation de lien pour la naviguation entre les differents onglets
const routes: Routes = [
  { path:'accueil', component:AccueilComponent },
  { path:'details-liste/:id', component:DetailsListeComponent },
  { path:'details-postulants-tires/:libelle', component:DetailsPostulantsTiresComponent },
  { path:'details-tirage', component:DetailsTirageComponent },
  { path:'importer', component:ImporterComponent },
  { path:'tirage', component:TirageComponent },
  { path: '', component:AccueilComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TirageComponent,
    ImporterComponent,
    DetailsListeComponent,
    DetailsTirageComponent,
    DetailsPostulantsTiresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
