import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TableComponent } from './table/table.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzPaginationModule,
    NzTableModule,
    NzModalModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzIconModule,
    NzPageHeaderModule
  ]
})
export class MainModule { }
