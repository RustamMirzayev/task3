import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import GenerateCertificateComponent from "./components/generate-certificate/generate-certificate.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, GenerateCertificateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export default class AppComponent {
  
}
