import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatDivider],
})
export class ProfileCardComponent {

}
