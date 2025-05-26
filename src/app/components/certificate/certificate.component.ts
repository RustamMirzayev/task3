import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import SertifikatService from './certificate.service';
import CertificateService from './certificate.service';
import { NgIf } from '@angular/common';
import AppComponent from '../../app.component';

@Component({
  standalone: true,
  selector: 'app-certificate',
  imports: [NgIf],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export default class CertificateComponent implements OnInit {
  @Output() imageReady = new EventEmitter<string>();
  imageUrl: string | null = null;

  constructor(private certificateService: CertificateService) {}

  ngOnInit() {
  this.certificateService.getImageWithUrl()
    .then(({ blob, url }) => {
      console.log('Redirected URL:', url);

      this.imageUrl = URL.createObjectURL(blob);
      this.imageReady.emit(this.imageUrl);
    })
    .catch(error => console.error(error));
  }
}
