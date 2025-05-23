import { Component, OnInit } from '@angular/core';
import SertifikatService from './certificate.service';
import CertificateService from './certificate.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-certificate',
  imports: [NgIf],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export default class Cert implements OnInit{
  imageUrl: string | null = null

  constructor(private certificateService:CertificateService ){}

  ngOnInit(){
    this.certificateService.getImage().subscribe({
      next: (blob) => {
        this.imageUrl = URL.createObjectURL(blob)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
