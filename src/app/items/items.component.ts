// items.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService, Item } from '../services/item.service';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    CommonModule,
    ItemCreateComponent,
    ItemEditComponent,
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private modalService: NgbModal,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  openCreateModal() {
    const modalRef = this.modalService.open(ItemCreateComponent, { centered: true });
    modalRef.result.then((result: Omit<Item, 'id'>) => {
      if (result) {
        this.itemService.addItem(result).subscribe(() => this.loadItems());
      }
    });
  }

  openEditModal(item: Item) {
    const modalRef = this.modalService.open(ItemEditComponent, { centered: true });
    modalRef.componentInstance.item = { ...item };
    modalRef.result.then((result: Item) => {
      if (result) {
        this.itemService.updateItem(result).subscribe(() => this.loadItems());
      }
    });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).subscribe(() => this.loadItems());
  }
}
