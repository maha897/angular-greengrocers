import { Component, inject } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(public itemService: ItemService) {}
}
