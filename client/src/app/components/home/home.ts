import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VisualBanner } from '../visual-banner/visual-banner';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, VisualBanner],
  templateUrl: './home.html',
})
export class Inicio {}
