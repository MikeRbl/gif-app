import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsSideMenuOptionComponent } from './gifs-side-menu-option.component';

interface MenuItem {
  icon: string;
  title: string;
  subtitle: string;
  router: string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
  imports: [
    CommonModule,
    GifsSideMenuOptionComponent
  ],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrls: ['./gifs-side-menu-options.component.css']
})
export class GifsSideMenuOptionsComponent {
   public menuOptions: MenuItem[] = [
    { icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The best gifs', router: './trending' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Search', subtitle: 'Find your gifs', router: './search' },
  ];

  userName = 'Your Name';
  userAvatar = 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80';
}