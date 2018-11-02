import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Create Cafe 3D Printing',
      url: 'http://createcafe.ca',
      imageUrl: '/assets/images/projects/create-cafe.jpg',
      description: 'A web app for a 3D printing coffee shop in Saskatoon, with an integrated e-commerce store'
    },
    {
      title: 'Moledina Consulting',
      url: 'http://moledinaconsulting.com',
      imageUrl: '/assets/images/projects/moledina-consulting.png',
      description: 'A simple informational website for a management consulting company'
    },
    {
      title: 'The Montessori Child',
      url: 'http://themontessorichild.com',
      imageUrl: '/assets/images/projects/tmc.png',
      description: 'An informational website for a pre-school with content management'
    }
  ];

}

interface Project {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
}
