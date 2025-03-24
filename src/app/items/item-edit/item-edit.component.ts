import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './item-edit.component.html',
  styleUrl: './item-edit.component.css'
})
export class ItemEditComponent {

  constructor(public activeModal: NgbActiveModal ){}
cancel() {
  this.activeModal.dismiss();
}
item: any;
save() {
  this.activeModal.close(this.item); // return edited item to parent
}

}
