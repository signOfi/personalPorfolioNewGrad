import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClipboardService } from "../services/clipboard.service";

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FrontpageComponent {
  email = "anthonylam14@gmail.com";

  projects = [
    { title: 'Trail-Buddy', description: 'Matches people who loves the great outdoors', link: '#' },
    { title: 'Interactive Pokemon Map', description: 'Uses the PokeAPI to explore the world of pokemon', link: 'https://pokemon-map.netlify.app/' },
    { title: 'Pokemon Price Tracker', description: 'Web Scrapper app to get the market value of video games', link: '#' }
  ];

  skills = [
    { category: 'Front End Technologies', technologies: 'Angular, React, CSS, HTML, TypeScript', icon: 'fas fa-code' },
    { category: 'Back End Technologies', technologies: 'Springboot, Spring Security, Java, Python', icon: 'fas fa-server' },
    { category: 'Cloud Technologies', technologies: 'Amazon Web Services (AWS), Docker', icon: 'fas fa-cloud' },
    { category: 'Other Technologies', technologies: 'Mockito Unit Testing, Git Version Control, Agile', icon: 'fas fa-tools' }
  ];

  constructor(private clipboardService: ClipboardService) {}

  copyToClipboard() {
    this.clipboardService.copyToClipboard(this.email);
  }
}