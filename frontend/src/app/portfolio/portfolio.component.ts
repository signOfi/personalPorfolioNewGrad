import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Interactive Pokemon Map',
      description: 'Uses the PokeAPI to explore the world of Pokémon.',
      extendedDescription: [
        'Fully Deployed, Developed a dynamic, user-friendly interface using Angular and SpringBoot, showcasing an interactive map of the Pokemon world. Implemented features such as region selection, zoom functionality, and clickable landmarks to enhance user engagement and exploration. With help of AWS EC2 instance for the backend.',
        'Integrated PokeAPI to fetch and display real-time data on Pokemon species, locations, and characteristics. Utilized advanced caching strategies and lazy loading techniques to optimize API calls and improve application performance, ensuring smooth navigation even with large datasets.',
      ],
      image: 'assets/pokedex.jpg',
      link: 'https://pokemon-map.netlify.app/'
    },
    {
      name: 'Video Game Price Tracker',
      description: 'Web scrapper app to get the market value of video games.',
      extendedDescription: [
        'Development of a Web Scraping Tool Using Selenium: This project involves the creation of a specialized tool that employs Selenium for web scraping to collect real-time data on Pokémon video game prices from various online marketplaces. The tool automates the process of navigating through websites, extracting relevant pricing information, and compiling it into a structured format for further analysis.',
        'Analysis of Price Trends in Pokémon Video Games: Utilizing the data acquired through web scraping, the project focuses on analyzing trends and patterns in the pricing of Pokémon video games.',
      ],
      image: 'assets/price.jpg',
      link: 'https://github.com/signOfi/PokemonPriceProject'
    },
    {
      name: 'TrailBuddy',
      description: 'Matches people who love the great outdoors.',
      extendedDescription: [
        'In Development.'
      ],
      image: 'assets/patagonia.jpg',
      link: 'https://github.com/signOfi'
    },
  ];


}
