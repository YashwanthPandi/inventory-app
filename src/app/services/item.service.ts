import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private collectionName = 'items';
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<Item>(this.collectionName);
  }

  // getItems(): Observable<Item[]> {
  //   return this.itemsCollection.valueChanges({ idField: 'id' });
  // }

  addItem(item: Item): Promise<void> {
    const id = this.firestore.createId();
    return this.itemsCollection.doc(id).set({ ...item, id });
  }

  updateItem(item: Item): Promise<void> {
    return this.itemsCollection.doc(item.id).update(item);
  }

  deleteItem(id: string): Promise<void> {
    return this.itemsCollection.doc(id).delete();
  }
}
