import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

export interface Project {
  imgUrl: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string;
  usedStack: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      imgUrl: 'https://i.ibb.co/hDCf6dy/store.png',
      title: 'Store 🛍️',
      description:
        'My store project is a responsive e-commerce platform built with Angular and NgRx, offering seamless product browsing and efficient state management for an optimized shopping experience on any device.',
      repoUrl: 'https://github.com/Aristocrat4/Store-Project',
      demoUrl: 'https://store-project-rose.vercel.app/',
      usedStack: 'angular,rxjs,html,tailwind',
    },
    {
      imgUrl: 'https://i.ibb.co/nM3csQj/tv.png',
      title: 'City Squad📺',
      description:
        'The City Squad project is a responsive website developed with Angular and SCSS. It serves as an informational hub for a local TV Mounting Service provider in Brooklyn, NYC. The site enables users to estimate the cost of potential orders and schedule appointments, catering to those seeking convenient and reliable service solutions in the city.',
      repoUrl: 'https://github.com/Aristocrat4/city-squad',
      demoUrl: 'https://city-squad-hzxd.vercel.app/',
      usedStack: 'angular,html,scss',
    },
  ];
}
