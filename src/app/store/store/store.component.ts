import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  items: any;
  itemService = inject(ItemService)

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  addToCart(item: Item) {
    this.itemService.addToCart(item)
  }
}