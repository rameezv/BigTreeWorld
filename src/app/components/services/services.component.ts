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
      description: `A quality website is an essential tool for any venture in this day and age.
        Big Tree World offers professional and cutting edge web design that works on the desktop or on the go,
        along with hosting services, email, and more. Request an estimate today to see how Big Tree World
        can help you make your mark on the web!`
    },
    {
      name: 'Graphic and Logo Design',
      icon: 'palette',
      description: `From simple graphics to entire brand design guides, Big Tree World can help you deliver a
        consistent marketing experience with professional logo and graphic design.`
    },
    {
      name: 'Mobile and Desktop App Development',
      icon: 'devices',
      description: `Engage users on all devices with Big Tree World custom app development. We develop
        customized cross-platform and single-platform solutions for Android, iOS, Windows, Mac, and more.`
    },
    {
      name: 'Workflow Automation',
      icon: 'compare_arrows',
      description: `Don't sweat the minor stuff! Big Tree World can help you implement automated systems which help
        you optimize your workflow, allowing you to focus on what's important. Request an estimate to see how
        Big Tree World can make the focus of your work be your work.`
    },
    {
      name: 'Search Engine Optimization (SEO)',
      icon: 'search',
      description: `The internet is a big place! Big Tree World can help you make sure your customers or clients can find you.
        From web SEO to Google My Business, we can help you put your venture on the map, figuratively and literally!`
    }
  ];

  scrollToContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

interface Service {
  name: string;
  icon: string;
  description: string;
  selected?: boolean;
}
