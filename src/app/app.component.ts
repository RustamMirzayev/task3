import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Cert from "./components/certificate/certificate.component";
import Buttonscomponent from "./components/buttons/buttons.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Cert, Buttonscomponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sertifikt';
}
