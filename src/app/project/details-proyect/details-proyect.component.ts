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
      description: 'Lorem Ipsum',
      author: 'Autor 1',
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
