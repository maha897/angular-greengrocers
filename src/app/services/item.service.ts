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
  total: number = 0

  async getItems(): Promise<Item> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}`));
  }
  
  async getCart() {
    return this.cartItems;
  }

  async addToCart(item: Item) {
    const index = this.cartItems.findIndex((i) => i.id === item.id);
    if (index > -1) {
      this.cartItems[index].quantity += 1;
    } else {
      const cartItem: CartItem = { ...item, quantity: 1 };
      this.cartItems.push(cartItem);
    }
    this.calculateTotal();
  }

  updateQuantity(id: string, quantity: number) {
    const index = this.cartItems.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.cartItems[index].quantity = quantity;

      if (this.cartItems[index].quantity <= 0) {
        this.cartItems.splice(index, 1);
      }
    }
    this.calculateTotal()
  }

  calculateTotal(): number {
    this.total = 0;
    for (const item of this.cartItems) {
      this.total += item.price * item.quantity;
    }
    return this.total;
  }
}
