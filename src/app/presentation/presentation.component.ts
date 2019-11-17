import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  template: `
  <h1>Présentation de l'application</h1>
  <p>cette application permet de gérer les employés</p>
  `,
  styles: []
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
