import { EquipamentService } from './../services/equipament.service';
import { EquipamentItemComponent } from './../components/equipament-item/equipament-item.component';
import { EquipamentsListComponent } from './../components/equipaments-list/equipaments-list.component';
import { EquipamentsComponent } from './equipaments.component';
import { EquipamentsRoutingModule } from './equipaments-routing-module';
import { EquipamentStoreModule } from './../store/equipament-store.module';
import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { EquipamentFormComponent } from './components/equipament-form/equipament-form.component';



@NgModule({
  imports: [
    CommonModule,
    EquipamentsRoutingModule,
    SharedModule,
    EquipamentStoreModule
  ],
  declarations: [
    EquipamentsComponent,
   // EquipamentFormComponent,
    EquipamentsListComponent,
    EquipamentItemComponent
  ],
  providers: [EquipamentService]
})
export class TasksModule { }
