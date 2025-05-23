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
    this.certificateService.getImage().subscribe({
      next: (blob) => {
        this.imageUrl = URL.createObjectURL(blob);
        this.imageReady.emit(this.imageUrl);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
