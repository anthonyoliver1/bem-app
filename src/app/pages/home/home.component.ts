import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public codeExemple1: string =
    `
    <ul class="list">
      <li class="list__item">
        <h2 class="list__title">My publication</h2>
        <p class="list__author>Julio Lozovei</p>
        <p class="list__text">A publication using BEM :)</p>
      </li>
    </ul>
  `;

  constructor() { }

  ngOnInit() { }

}
