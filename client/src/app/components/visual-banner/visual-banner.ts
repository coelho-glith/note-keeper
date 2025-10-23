import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-visual-banner',
  imports: [MatCard],
  templateUrl: './visual-banner.html',
})
export class VisualBanner {
  @Input({ required: true }) public srcImage!: string;
}
