import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit { //OnInit é o que eue quero que seja executado no começo da página quando ela é carregada

 remediolId: string;

  titulo: string = 'Dipirona';
  foto: string = '../../assets/img/dipirona.jpg';


  description: string = 'Este medicamento é indicado como analgésico (para dor) e antitérmico (para febre).';
  description2: string = 'Dipirona Monoidratada 500mg 10 comprimidos Medley Genérico';
  warnings: string = 'SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. NÃO USE ESTE MEDICAMENTO DURANTE A GRAVIDEZ E EM CRIANÇAS MENORES DE TRÊS MESES DE IDADE.';


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.remediolId = params.get('id') ?? '';
    });
  }

}
