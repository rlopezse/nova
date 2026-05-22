import { Component } from '@angular/core';
//import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class FilterComponent {
  categories: string[] = ['apple', 'samsung', 'xiaomi', 'huawei'];
  ordenarPor: string[] = ['menor precio', 'mayor precio'];
  //filterService = inject(FilterService);
}
