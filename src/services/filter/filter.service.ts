import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  theme = signal('dark'); // 👈 equivalente al useState

  toggleTheme() {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }
}
