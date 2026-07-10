import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  @Input({ required: true }) linkedInUrl = '';
  @Input({ required: true }) githubUrl = '';
}

