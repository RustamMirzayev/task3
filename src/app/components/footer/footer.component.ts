import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export default class FooterComponent {
  constructor(private http: HttpClient) {}

  downloadImage(event: MouseEvent) {
    // this.http.head
  }
}
