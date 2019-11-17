import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-menu',
  template: `
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
   <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" routerLink="presentation" routerLinkActive="gras">Presentation</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="employes-list" routerLinkActive="gras">Liste Employé</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="ajout-employe" routerLinkActive="gras">Ajout Employé</a>
    </li>
  </ul>
</nav>
  `,
  styles: ['.gras{font-weight:bold;}']
})
export class MyMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
