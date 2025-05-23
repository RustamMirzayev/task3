import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export default class Buttonscomponent {
  constructor(private http: HttpClient) {}

  downloadImage(event: MouseEvent) {
    // this.http.head
  }
}
