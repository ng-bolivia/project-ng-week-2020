import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CommunitiesListComponent } from './components/communities-list/communities-list.component';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { CalculateMembersPipe } from './pipes/calculate-members.pipe';
import { CommunitiesListVscrollComponent } from './communities/communities-list-vscroll/communities-list-vscroll.component';

@NgModule({
  declarations: [
    CommunitiesListComponent,
    DateFormatPipe,
    ListComponent,
    CalculateMembersPipe,
    CommunitiesListVscrollComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule,
    ScrollingModule
  ]
})
export class ListModule { }
