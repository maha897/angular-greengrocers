import { Component, inject } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemService = inject(ItemService);
  cartItems: any;

  ngOnInit() {
    this.cartItems = this.itemService.getCart();
  }

  increaseQuantity(cartItem: CartItem) {
    this.itemService.updateQuantity(cartItem.id, cartItem.quantity + 1)
  }

  decreaseQuantity(cartItem: CartItem) {
    this.itemService.updateQuantity(cartItem.id, cartItem.quantity - 1)
  }
}
