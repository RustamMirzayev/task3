import { Component, EventEmitter, Output } from '@angular/core';
import Buttonscomponent from "../buttons/buttons.component";
import CertificateComponent from "../certificate/certificate.component";
import CertificateService from '../certificate/certificate.service';

@Component({
  standalone: true,
  selector: 'app-generate-certificate',
  imports: [Buttonscomponent, CertificateComponent],
  templateUrl: './generate-certificate.component.html',
  styleUrls: ['./generate-certificate.component.scss']
})
export default class GenerateCertificateComponent {
imageUrl: string | null = null;

  onImageReady(url: string) {
    this.imageUrl = url;
  }
}
