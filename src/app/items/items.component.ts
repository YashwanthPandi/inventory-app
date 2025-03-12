// items.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items = [
    { name: 'Item 1', category: 'Category 1', description: 'Description 1', price: 10 },
    { name: 'Item 2', category: 'Category 2', description: 'Description 2', price: 20 },
  ];

  constructor(private modalService: NgbModal) {}

  openCreateModal() {
    const modalRef = this.modalService.open(ItemCreateComponent, { centered: true });
    modalRef.result.then((result) => {
      if (result) {
        this.items.push(result);
      }
    });
  }

  openEditModal(item: any) {
    const modalRef = this.modalService.open(ItemEditComponent, { centered: true });
    modalRef.componentInstance.item = { ...item };
    modalRef.result.then((result) => {
      if (result) {
        const index = this.items.findIndex((i) => i.name === item.name);
        if (index > -1) {
          this.items[index] = result;
        }
      }
    });
  }

  deleteItem(item: any) {
    this.items = this.items.filter((i) => i !== item);
  }
}