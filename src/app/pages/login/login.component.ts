import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isVisibility: boolean = false;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() { }

  goToHome(): void {
    this._router.navigate(['/home']);
  }

  handleVisibility(): void {
    this.isVisibility = !this.isVisibility;
  }

}
