import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class  ServicesComponent {
  services: Service[] = [
    {
      name: 'Professional Web Design',
      icon: 'web',
      description: 'Lorem Ipsum'
    },
    {
      name: 'Graphic and Logo Design',
      icon: 'palette',
      description: 'Lorem Ipsum'
    },
    {
      name: 'Mobile and Desktop App Development',
      icon: 'devices',
      description: 'Lorem Ipsum'
    },
    {
      name: 'Workflow Automation',
      icon: 'compare_arrows',
      description: 'Lorem Ipsum'
    }
  ];
}

interface Service {
  name: string;
  icon: string;
  description: string;
  selected?: boolean;
}
