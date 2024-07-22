import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
//componentes de angular
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './componentes/card/card.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule
  ]
})
export class InicioModule { }
