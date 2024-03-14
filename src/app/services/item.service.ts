import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  http = inject(HttpClient);
  cartItems: CartItem[] = [];

  async getItems(): Promise<Item> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}`));
  }

  async addToCart(item: Item) {
    const cartItem = {... item, quantity: 1}
    this.cartItems.push(cartItem)
  }

  async getCart() {
    return this.cartItems;
  }

}
