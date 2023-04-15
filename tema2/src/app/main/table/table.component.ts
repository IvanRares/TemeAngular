import { Component } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  data: Item[] = [];
  itemsPerPage = 8;
  isModalVisible = false;

  constructor(private dataService: DataService) {
    this.loadData();
  }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  loadData() {
    this.dataService.dataSubject.subscribe((res) => {
      console.log(res);
      this.data = [...res];
    });
  }

  openAddModal(): void {
    this.isModalVisible = true;
  }

  openEditModal(item: Item): void {
    this.isModalVisible = true;
    this.dataService.setItem(item);
  }

  handleModalClose(shouldRefresh: boolean): void {
    this.isModalVisible = false;
    if (shouldRefresh) {
      this.loadData();
    }
  }
}
