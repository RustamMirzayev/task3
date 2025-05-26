import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CertificateService {
  constructor(private http: HttpClient) {}

  img:BehaviorSubject<any> = new BehaviorSubject<Blob | undefined>(undefined);

  getImage(): Observable<Blob>{
    let a = this.http.get("https://picsum.photos/1000/500", {responseType: 'blob'});
    this.img.next(a);
    return a;
  }
}
