import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../models/item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {

  item = {
    name: '',
    category: '',
    description: '',
    price: 0,
  };

  constructor(public activeModal: NgbActiveModal) {}

  saveItem() {
    this.activeModal.close(this.item);
  }
  
  }
