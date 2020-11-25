import { Component, OnInit } from '@angular/core';
import { TranslateService }from '@ngx-translate/core';
import *as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'daqurbeClone1';
  langs = ['en', 'fr'];
  
  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs);
    translate.setDefaultLang(this.langs[1]);
  }

  ngOnInit(): void {
    AOS.init();
    const currLang = this.translate.getBrowserLang();
    switch (currLang) {
      case 'en': {
        this.translate.use(this.langs[0]);
        break;
      }
      case 'fr': {
        this.translate.use(this.langs[1]);
        break;
      }
    }
  }

  onActivate(event: any) :void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if(pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
    window.scroll(0, 0);
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
