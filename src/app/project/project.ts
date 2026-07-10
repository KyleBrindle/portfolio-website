import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
}