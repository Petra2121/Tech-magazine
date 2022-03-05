import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokusajListRoutingModule } from './pokusaj-list-routing.module';
import { PokusajListComponent } from './pokusaj-list.component';



@NgModule({
  declarations: [PokusajListComponent],
  imports: [
    CommonModule,
    PokusajListRoutingModule
  ]
})
export class PokusajListModule { }
