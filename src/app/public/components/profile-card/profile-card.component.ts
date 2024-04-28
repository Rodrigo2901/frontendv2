import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider],
})
export class ProfileCardComponent {

}
