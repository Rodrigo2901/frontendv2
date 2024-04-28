import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListItem} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatListItem, MatDivider, MatIcon],
})
export class SidenavComponent {
  showFiller= false;
}
