import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CertificateService {
  constructor(private http: HttpClient) {}

  getImage(): Observable<Blob>{
    return this.http.get("https://picsusm.photos/200/300", {responseType: 'blob'})
  }
}
