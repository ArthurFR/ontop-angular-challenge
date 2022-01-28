import { Component, OnInit } from '@angular/core';
import { NavbarItems } from './navbar-items.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems = NavbarItems;

  constructor() { }

  ngOnInit(): void {
  }

}
