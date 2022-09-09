import { Component } from '@angular/core';
import {faHome,faRotate,faFileCirclePlus,faPlusCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonTirage';
  accueil=faHome;
  faire=faRotate;
  nouvelle=faFileCirclePlus;

}
