import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router
  ) {
  }

  public redirectToLogIn(e: any) {
    e.preventDefault();
    this.router.navigate(['login'])
  }
  public redirectToSignUp(e: any) {
    e.preventDefault();

    this.router.navigate(['signup'])
  }
  public redirectToAbout(e: any) {
    e.preventDefault();

    this.router.navigate(['about'])
  }
}
