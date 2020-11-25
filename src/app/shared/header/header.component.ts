import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  toggleheader = true;
  scrollposzero: Boolean;
  langs = ['en', 'fr'];

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs);
  }

  public ngOnInit(): void {
    this.scrollposzero = true;
    this.scrollEffect();
  }

   scrollEffect() {
    let scrollPos = 0;
     window.addEventListener("scroll", (event) => {
      if ((document.body.getBoundingClientRect()).top == 0) {
        this.scrollposzero = true;
      } else if(document.body.getBoundingClientRect().top > scrollPos ) {
        scrollPos = (document.body.getBoundingClientRect()).top;
        this.scrollposzero = false;
        this.toggleheader = true;
      } else if(document.body.getBoundingClientRect().top < scrollPos ) {
        scrollPos = (document.body.getBoundingClientRect()).top;
        this.toggleheader = false;
        console.log("Down");
      }
    })
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

  public changeLang() {
    const lang_value = document.getElementById('setlang_btn');
    if(lang_value.textContent === 'Français') {
      console.log(lang_value.textContent);
      this.translate.use(this.langs[1]);
    } else {
      this.translate.use(this.langs[0]);
    }
  }
}
