import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncomeDisplay } from './income-display/income-display.component';
import { IncomeListComponent } from './income-list/income-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeDisplay,
    IncomeListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
