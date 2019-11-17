import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ajout-employe',
  template: `
   <h1>Ajout Employé</h1>
   <p>cette application permet de ajouter les employés</p>
   <button (click)="onListEmployes()">List Employes</button>

  `,
  styles: []
})
export class AjoutEmployeComponent implements OnInit {

  constructor(private router:Router) { }
  onListEmployes()
 {
 this.router.navigate(['/employes-list']);
 }

  ngOnInit() {
  }

}
