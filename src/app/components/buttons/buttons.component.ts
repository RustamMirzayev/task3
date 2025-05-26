import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export default class Buttonscomponent {
  @Input() imageBlobUrl: string | null = null;

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
}
