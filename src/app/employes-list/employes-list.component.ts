import { Component, OnInit } from '@angular/core';
import {EmployesService} from '../employes.service';

import { Employe } from '../../Employe';



@Component({
  selector: 'app-employes-list',
  template: `
  <!--
  <h1>Liste Employé</h1>
  <p>cette application permet de afficher les employés</p>
  -->
  <h1>Employés de l'entreprise</h1>
  <ul class="list-group">
  <li class="list-group-item" *ngFor="let t of lesemployes">
  {{t.matricule}} {{t.nom}}

  <a [routerLink]="['/employes-list',t.matricule]"><button class="btn btn-primary">Infos</button></a>
  </li>

  </ul>

  `,
  styles: []
})
export class EmployesListComponent implements OnInit {
  lesemployes:Employe[];

  constructor(private employeService:EmployesService) { }

  ngOnInit() {
    this.lesemployes = this.employeService.lesEmployes;
  }

}
