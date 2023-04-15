import { Injectable } from '@angular/core';
import { Item } from '../_models/item';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [
    {
      name: 'Popescu Andrei',
      grade1: 4,
      grade2: 6,
      grade3: 10,
      average: 20 / 3,
    },
    {
      name: 'Ionescu Maria',
      grade1: 7,
      grade2: 9,
      grade3: 6,
      average: 22 / 3,
    },
    {
      name: 'Dumitrescu Ion',
      grade1: 5,
      grade2: 8,
      grade3: 7,
      average: 20 / 3,
    },
    {
      name: 'Marinescu Ana',
      grade1: 9,
      grade2: 4,
      grade3: 6,
      average: 19 / 3,
    },
    {
      name: 'Petrescu Dan',
      grade1: 8,
      grade2: 7,
      grade3: 5,
      average: 20 / 3,
    },
    {
      name: 'Nicolae Roxana',
      grade1: 6,
      grade2: 9,
      grade3: 8,
      average: 23 / 3,
    },
    {
      name: 'Florescu Raluca',
      grade1: 7,
      grade2: 5,
      grade3: 9,
      average: 21 / 3,
    },
    {
      name: 'Mihai Radu',
      grade1: 6,
      grade2: 8,
      grade3: 7,
      average: 21 / 3,
    },
    {
      name: 'Luca Cristina',
      grade1: 9,
      grade2: 6,
      grade3: 5,
      average: 20 / 3,
    },
    {
      name: 'Constantinescu Gabriela',
      grade1: 5,
      grade2: 7,
      grade3: 8,
      average: 20 / 3,
    },
  ];
  dataSubject=new Subject<Item[]>();
  private currentItem: Item | null = null;

  constructor() {}

  get data() {
    console.log(this.items);
    return this.items;
  }

  set data(dataToSet:any){
    this.items=dataToSet;
    this.dataSubject.next(dataToSet);
  }

  setItem(item: Item | null): void {
    this.currentItem = item;
  }

  getItem(): Item | null {
    return this.currentItem;
  }

  saveItem(item: Item): void {
    if (this.currentItem != null) {
      const index = this.items.findIndex(
        (i) => i.name === this.currentItem?.name
      );
      if (index >= 0) {
        this.items[index] = { ...this.currentItem, ...item };
        this.dataSubject.next(this.items);
      }
    } else {
      let newItem: Item = { ...item };
      newItem.average = (newItem.grade1 + newItem.grade2 + newItem.grade3) / 3;
      this.items.push(newItem);
      this.dataSubject.next(this.items);
      console.log(this.items);
    }
    this.currentItem = null;
  }
}
