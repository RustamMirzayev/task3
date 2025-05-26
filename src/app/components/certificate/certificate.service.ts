import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CertificateService {
  constructor(private http: HttpClient) {}

  imgLink:BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);


  getImageWithUrl(): Promise<{ blob: Blob; url: string }> {
  return fetch("https://picsum.photos/1000/500", { method: 'GET', redirect: 'follow' })
    .then(async (response) => {
      const url = response.url;
      this.imgLink.next(url); 
      const blob = await response.blob();
      return { blob, url };
    });
}
}
