import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FrontpageComponent} from "./frontpage/frontpage.component";
import {ContactmeComponent} from "./contactme/contactme.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NavbarComponent, FrontpageComponent, ContactmeComponent,
  PortfolioComponent],
})
export class AppComponent {
  title = 'web1';
  skills = [
    { category: 'Front End Technologies', technologies: 'Angular, React, CSS, HTML, TypeScript', icon: 'fas fa-code' },
    { category: 'Back End Technologies', technologies: 'Springboot, Spring Security, Java, Python', icon: 'fas fa-server' },
    { category: 'Cloud Technologies', technologies: 'Amazon Web Services (AWS), Docker', icon: 'fas fa-cloud' },
    { category: 'Other Technologies', technologies: 'Mockito Unit Testing, Git Version Control, Agile', icon: 'fas fa-tools' }
  ];
}
