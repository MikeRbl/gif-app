import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from "../components/side-menu/side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptionsComponent } from "../components/side-menu/side-menu-options/gifs-side-menu-options.component";
import { SideMenuComponent } from "../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
