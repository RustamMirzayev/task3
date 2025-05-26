import { Component, Input, OnInit } from '@angular/core';
import CertificateService from '../certificate/certificate.service';


@Component({
  standalone: true,
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export default class Buttonscomponent {
  @Input() imageBlobUrl: string | null = null;
   telegram = window.Telegram?.WebApp;
     constructor(private certificateService: CertificateService) {}
   

  downloadImage(linkElement: HTMLAnchorElement): void {
    if (!this.imageBlobUrl) {
      alert('Rasm hali yuklanmadi');
      return;
    }
    linkElement.href = this.imageBlobUrl;
    linkElement.download = 'sertifikat.jpg';
  }

  link: string = 'https://picsum.photos/200/300';

  copyLink() {
    navigator.clipboard
      .writeText(this.link)
      .then(() => {
        alert('Havola nusxalandi: ' + this.link);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  ngOnInit() {
    if (this.telegram) {
      this.telegram.ready();
      this.telegram.MainButton.setText("Yuborish");
      this.telegram.MainButton.show();
      this.telegram.MainButton.onClick(() => {
        alert('Telegram MainButton bosildi!');
      });
    }
  }

  sendData() {
    if (this.telegram) {
      alert('Ma\'lumot yuborildi');
    }
  }

  toTelegram(){
    console.log(this.certificateService.imgLink.getValue());
    let str = "";
    this.certificateService.imgLink.subscribe(v=>{
      str = v?.split("/")[4] + "a444444444" +  v?.split("=")[1];

    })
    console.log(str);
    return str;
  }
  encodeUrl(originalUrl: string): string {
    return btoa(originalUrl); // base64-encode
  }

  ngOnDestroy() {
    if (this.telegram) {
      this.telegram.MainButton.hide();
    }
  }
}
