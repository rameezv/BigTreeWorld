import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Create Cafe 3D Printing',
      url: 'http://createcafe.ca',
      imageUrl: '/assets/images/modern-web.jpg',
      description: ''
    },
    {
      title: 'Create Cafe 3D Printing',
      url: 'http://createcafe.ca',
      imageUrl: '/assets/images/modern-web.jpg',
      description: ''
    },
    {
      title: 'Create Cafe 3D Printing',
      url: 'http://createcafe.ca',
      imageUrl: '/assets/images/modern-web.jpg',
      description: ''
    }
  ];

  ngOnInit() {
  }

}

interface Project {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
}
