import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SertifikatComponent from "./components/sertifikat/sertifikat.component";
import FooterComponent from "./components/footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, SertifikatComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sertifikt';
}
