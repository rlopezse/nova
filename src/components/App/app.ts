import { Component, signal } from '@angular/core';
import { FilterComponent } from '../Filter/filter';

@Component({
  selector: 'app-root',
  imports: [FilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nova');
}
