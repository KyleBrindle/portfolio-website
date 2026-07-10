import { Component } from '@angular/core';

import { ContactComponent } from './contact/contact';
import { HeaderComponent } from './header/header';
import { ProjectComponent, Project } from './project/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent, HeaderComponent, ProjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly name = 'Kyle Brindle';
  readonly linkedInUrl = 'https://www.linkedin.com/in/kyle-brindle-cs305';
  readonly githubUrl = 'https://github.com/KyleBrindle';

  readonly projects: Project[] = [
    {
      title: 'Intrusion Detection System for Industrial Control Systems',
      description:
        'Machine Learning powered Intrusion Detection for ICS trained on the SWaT dataset',
      technologies: ['Python', 'Scikit-learn', 'Machine Learning'],
      link: 'https://github.com/KyleBrindle/cis5370-final-project',
    },
    {
      title: 'Project Manager (WIP)',
      description:
        'A full-stack project manager',
      technologies: ['Angular', 'Java', 'MySQL', 'TypeScript', 'CSS', 'HTML'],
      link: 'https://github.com/KyleBrindle/project_manager',
    },
    {
      title: 'Portfolio Website',
      description:
        'This website! Made using standalone Angular Components to showcase my programming work.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML'],
      link: 'https://github.com/KyleBrindle/portfolio-website',
    },
  ];
}
