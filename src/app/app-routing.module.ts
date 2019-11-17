import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { ErrorComponent } from './error/error.component';
import { EmpComponent } from './emp/emp.component';




const routes: Routes = [
  {path:'employes-list', component:EmployesListComponent},
{path:'ajout-employe', component:AjoutEmployeComponent},
{path:'presentation', component:PresentationComponent},
{path:'employes-list/:matricule', component:EmpComponent},
{path:'', redirectTo:'presentation', pathMatch:'full'},
{path:'**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
