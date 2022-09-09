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
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
