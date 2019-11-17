import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { ErrorComponent } from './error/error.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    PresentationComponent,
    EmployesListComponent,
    SelectedEmployeComponent,
    AjoutEmployeComponent,
    ErrorComponent,
    EmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
