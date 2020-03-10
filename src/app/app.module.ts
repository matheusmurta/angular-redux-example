import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipamentsListComponent } from './equipaments/components/equipaments-list/equipaments-list.component';
import { EquipamentItemComponent } from './equipaments/components/equipament-item/equipament-item.component';
import { EquipamentsComponent } from './equipaments/equipaments/equipaments.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipamentsListComponent,
    EquipamentItemComponent,
    EquipamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
