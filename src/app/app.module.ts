import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { CommunitiesListComponent } from './list/components/communities-list/communities-list.component';
import { DateFormatPipe } from './list/pipes/date-format.pipe';
import { CalculateMembersPipe } from './list/pipes/calculate-members.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ContactComponent,
    CommunitiesListComponent,
    DateFormatPipe,
    CalculateMembersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
