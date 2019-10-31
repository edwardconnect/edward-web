import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems = [
    {
      name: 'Home',
      routerLink: '/'
    },
    {
      name: 'Gallery',
      routerLink: '/gallery'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
