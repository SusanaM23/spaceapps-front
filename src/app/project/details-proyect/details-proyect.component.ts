import { Component } from '@angular/core';

@Component({
  selector: 'app-details-proyect',
  templateUrl: './details-proyect.component.html',
  styleUrls: ['./details-proyect.component.scss']
})
export class DetailsProyectComponent {
  project: any;

  ngOnInit() {
    this.project = {
      title: 'Proyecto 1',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: 'Autor 1',
      members: ['members 1', 'members 2', 'members 3', 'members 4', 'members 5'],
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Searching for participants'
    };
  }

  getSeverity(status: string) {
    switch (status) {
      case 'In progress':
        return 'success';
      case 'Seeking funding':
        return 'warning';
      case 'Searching for participants':
        return 'danger';
      default:
        return 'error';
    }
  }
}
