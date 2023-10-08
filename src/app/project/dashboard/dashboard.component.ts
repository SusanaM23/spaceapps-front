import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  projects = [
    {
      title: 'Proyecto 1',
      description: 'Lorem Ipsum',
      author: 'Autor 1',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Searching for participants'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      author: 'Autor 2',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Searching for participants'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      author: 'Autor 3',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Searching for participants'
    },
    {
      title: 'Proyecto 4',
      description: 'Descripción del proyecto 4',
      author: 'Autor 4',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Seeking funding'
    },
    {
      title: 'Proyecto 5',
      description: 'Descripción del proyecto 5',
      author: 'Autor 5',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'Seeking funding'
    },
    {
      title: 'Proyecto 6',
      description: 'Descripción del proyecto 6',
      author: 'Autor 6',
      imageUrl: 'assets/img/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png',
      status: 'In progress'
    },
    // Agrega más proyectos según sea necesario
  ];

  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
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
