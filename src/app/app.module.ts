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

//Creation de lien pour la naviguation entre les differents onglets
const routes: Routes = [
  { path:'accueil', component:AccueilComponent },
  { path:'details-liste', component:DetailsListeComponent },
  { path:'details-postulants-tires', component:DetailsPostulantsTiresComponent },
  { path:'details-tirage', component:DetailsTirageComponent },
  { path:'importer', component:ImporterComponent },
  { path:'tirage', component:TirageComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TirageComponent,
    ImporterComponent,
    DetailsListeComponent,
    DetailsTirageComponent,
    DetailsPostulantsTiresComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FontAwesomeModule,
=======
    RouterModule.forRoot(routes),
<<<<<<< HEAD
    FontAwesomeModule,
    HttpClientModule
=======
    FontAwesomeModule
>>>>>>> 46b367b083af4515742cd2c88ee79700d08fa65d
>>>>>>> b82c56a2151d2d38d21ccb8f2c059dc581fe28c1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
