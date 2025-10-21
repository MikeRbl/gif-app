import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-option',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './gifs-side-menu-option.component.html',
  styleUrls: ['./gifs-side-menu-option.component.css']
})
export class GifsSideMenuOptionComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public subtitle!: string;
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public router!: string;
}