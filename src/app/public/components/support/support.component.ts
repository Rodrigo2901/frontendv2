import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class SupportComponent {

}
