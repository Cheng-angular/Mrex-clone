import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  producttoggle: Boolean;
  abouttoggle: Boolean;
  mobiledropdown: Boolean;
  aboutnavshow: Boolean;
  productsnavshow: Boolean;
  constructor() { }

  ngOnInit(): void {
  }

  enterProduct() {
    this.abouttoggle = false;
    this.producttoggle = true;
  }

  leaveProduct() {
    this.producttoggle = false;
  }

  enterAbout() {
    this.producttoggle = false;
    this.abouttoggle = true;
  }

  leaveAbout() {
    this.abouttoggle = false;
  }

  dropdowntoggle() {
    this.mobiledropdown = !this.mobiledropdown;
    if (this.mobiledropdown == false ) {
      this.aboutnavshow = false;
      this.productsnavshow = false;
    }
  }
  burgerAboutusDropdown() {
    this.aboutnavshow = !this.aboutnavshow;
  }

  burgerProductDropdown() {
    this.productsnavshow = !this.productsnavshow;
    this.aboutnavshow = false;
  }

}
