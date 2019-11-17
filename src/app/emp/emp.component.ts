import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Employe } from 'src/Employe';
import {EmployesService} from '../employes.service';



@Component({
  selector: 'app-emp',
  template: `
    <h2>Détail employé</h2>
    <ul class="list-group">
    <li class="list-group-item" ><strong>{{obj.matricule}}</strong></li>
    <li class="list-group-item" >{{obj.nom}}</li>
    <li class="list-group-item" >{{obj.fonction}}</li>
    <li class="list-group-item" ><input type="checkbox" [checked]="obj.expert" />Expert</li>
    </ul>
    <button class="btn btn-primary" (click)="onListEmployes()">Retour</button>

  `,
  styles: []
})
export class EmpComponent implements OnInit {
  obj:Employe;
  matricule:number;

  constructor(private activatedRoute:ActivatedRoute,private employeService:EmployesService,private router:Router) { }

  ngOnInit() {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
    this.obj=this.employeService.getEmployeByMatricule(this.matricule);
    console.log(this.matricule)
  }

  onListEmployes()
  {
  this.router.navigate(['/employes-list']);
  }

}
