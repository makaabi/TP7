import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployesService} from '../employes.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-ajout-employe',
  template: `
   <h1>Ajout d'un Employé</h1>

   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <div class="form-group ml-4">
    <label for="mat">
    Identifiant du produit
    </label>
  <input   required type="text" id="mat" [(ngModel)]="nom" name="nid" class="form-control">
    </div>

    <div class="form-group ml-4">
    <label for="mat">
    Fonction
    </label>
  <select  id="fonction" [(ngModel)]="fonction" name="fonction" class="form-control">
  <option value="Directeur">Directeur</option>
  <option value="Ingenieur">Ingénieur</option>
  <option value="Secretaire">Secrétaire</option>
  </select>
  <input type="checkbox" [(ngModel)]="expert">Expert
    </div>
    
    

 <input type="submit" value="Enregistrer" class="btn btn-success" [disabled]="f.invalid" >
 <input type="reset" value="Vider" class="btn btn-danger">
 </form>
 
  `,
  styles: [
    'input.ng-valid{ border-left: 2px solid green;}',
    'input.ng-invalid{ border-left: 2px solid red;}',
  ]
})
export class AjoutEmployeComponent implements OnInit {
  nom:string;
  fonction:string="Ingnieur";
  expert:boolean;
  message:string;
 

  constructor(private router:Router,private employeService:EmployesService) { }
  onListEmployes()
 {
 this.router.navigate(['/employes-list']);
 }

  ngOnInit() {
  }

  onSubmit(f:NgForm)
 { 
  this.employeService.addEmploye(this.nom,this.fonction,this.expert);

}

}
