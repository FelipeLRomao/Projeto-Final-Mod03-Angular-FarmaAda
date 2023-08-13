import { Component } from '@angular/core';
import { NgFor, NgIf,} from '@angular/common';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { SlideComponent } from '../slide/slide.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, SlideComponent, NgFor, NgIf, MatIconModule,],
})
export class HomeComponent {

 constructor(private router: Router){}

 verDetalhe(remedioId: string) {
  this.router.navigate(['/detalhes', remedioId]);
 }

 toogleFavorito(index: number): void {
   this.remedios[index].favorito = !this.remedios[index].favorito
 }

 nome: string = 'Felipe';
 remedios: Array<any> = [
  {
    id: 1,
    titulo: 'Dipirona',
    foto: '../../assets/img/dipirona.jpg',
    laboratorio: 'Medley',
    quantidade: '10',
    ref: '1029-ADA',
    preco: '15,00',
    favorito: true,
  },
  {
    id: 2,
    titulo: 'Amoxilina',
    foto: '../../assets/img/amoxilina.jpg',
    laboratorio: 'Medley',
    quantidade: '100ml',
    ref: '4569-GY',
    preco: '17,00',
    favorito: true,
  },
  {
    id: 3,
    titulo: 'Rinosoro',
    foto: '../../assets/img/rinosoro.jpg',
    laboratorio: 'Medley',
    quantidade: '100ml',
    ref: '3309-TR',
    preco: '26,00',
    favorito: true,
  },
  {
    id: 4,
    titulo: 'Metformina',
    foto: '../../assets/img/mediformina.jpg',
    laboratorio: 'Medley',
    quantidade: '30',
    ref: '3988-DB',
    preco: '52,00',
    favorito: true,
  },
  {
    id: 5,
    titulo: 'Allegra',
    foto: '../../assets/img/allegra.png',
    laboratorio: 'Sanofi',
    quantidade: '150ml',
    ref: '2718-AT',
    preco: '80,99',
    favorito: false,
  },
  {
    id: 6,
    titulo: 'Buscopan',
    foto: '../../assets/img/buscopan.jpg',
    laboratorio: 'Boehringer',
    quantidade: '20',
    ref: '7817-DB',
    preco: '19,40',
    favorito: false,
  },
  {
    id: 7,
    titulo: 'Cimegripe',
    foto: '../../assets/img/cimegripe.jpg',
    laboratorio: 'Cimed',
    quantidade: '30',
    ref: '4381-DB',
    preco: '11,90',
    favorito: false,
  },
  {
    id: 8,
    titulo: 'Dorflex',
    foto: '../../assets/img/dorflex.jpg',
    laboratorio: 'Sanofi Aventis',
    quantidade: '10',
    ref: '0314-DB',
    preco: '30,39',
    favorito: false,
  },

 ];
}
