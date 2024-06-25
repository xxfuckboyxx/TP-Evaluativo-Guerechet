// IMPORTAMOS INTERFAZ
import { Computadoras } from 'src/app/models/computadoras';

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Computadoras[];
  
   constructor(){
     this.info = [
       {
        id:1,
        procesador:"AMD Ryzen 7 5800X",
        placa_grafica:"NVIDIA GeForce RTX 3070, 8GB GDDR6",
        ram:"hyperx fury 32GB DDR4 3200MHz",
        fuente_de_poder:"80 Plus Gold Semi-modular de 1000w",
        placa_madre:"ASUS ROG Strix B550-F Gaming",
        disco_duro:"Samsung 970 EVO Plus 1TB NVMe SSD",
        precio:"US700",
        imagen:"",
        descripcion:"",
        categoria:"",
        alt: "foto de la pc gamer"
       },
       {
        id:2,
        procesador:"",
        placa_grafica:"",
        placa_madre:"",
        ram: "",
        fuente_de_poder:"",
        disco_duro:"",
        precio:"",
        imagen:"",
        descripcion:"",
        categoria:"",
        alt: "Chanchito"
       },
       {
        id:3,
        procesador:"",
        placa_grafica:"",
        placa_madre:"",
        ram: "",
        fuente_de_poder:"",
        disco_duro:"",
        precio:"",
        imagen:"",
        descripcion:"",
        categoria:"",
        alt: "Chanchito"
       },
       {
        id:4,
        procesador:"",
        placa_grafica:"",
        placa_madre:"",
        ram: "",
        fuente_de_poder:"",
        disco_duro:"",
        precio:"",
        imagen:"",
        descripcion:"",
        categoria:"",
        alt: "Chanchito"
       }
     ]
   }
}
