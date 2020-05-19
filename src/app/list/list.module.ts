import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommunitiesListComponent } from './components/communities-list/communities-list.component';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    CommunitiesListComponent,
    DateFormatPipe,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule
  ]
})
export class ListModule { }
