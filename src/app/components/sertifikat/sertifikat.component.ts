import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sertifikat',
  imports: [],
  templateUrl: './sertifikat.component.html',
  styleUrls: ['./sertifikat.component.scss'],
})
export default class SertifikatComponent {
  src: string = 'http://localhost:4200/images/sertifikat.png';
}
