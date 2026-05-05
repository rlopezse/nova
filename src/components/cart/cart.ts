import { Component, inject } from '@angular/core';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  filterService = inject(FilterService);
}
