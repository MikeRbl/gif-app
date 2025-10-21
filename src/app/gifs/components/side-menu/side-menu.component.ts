import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    GifsSideMenuHeaderComponent, 
    GifsSideMenuOptionsComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent { }