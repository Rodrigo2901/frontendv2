import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, NgIf],
})
export class SupportComponent {
  isVisible = true;
  closeSupport() {
    this.isVisible = false;
  }
}
