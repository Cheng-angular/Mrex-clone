import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  languagevalue: Boolean;
  clickEventsubscription: Subscription;
  englishoptions = {
    strings: [
      'All-in-one platform for smarter Investing', 
      'All-in-one platform for smarter Analytics', 
      'All-in-one platform for smarter Acquisitions', 
      'All-in-one platform for smarter Portfolio Management'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay:400,
    startDelay: 900,
    CursorChar: false,
    smartBakcspace: true,
    loop:true
  }
  
  frenchsoptions = 
  {
    strings:[
      'Plateforme tout-en-un pour mieux investir',
      'Plateforme tout-en-un pour mieux analysers',
      'Plateforme tout-en-un pour mieux acquérir',
      'Plateforme tout-en-un pour gérer son portefeuille'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay:400,
    startDelay: 900,
    CursorChar: false,
    smartBakcspace: true,
    loop:true
  }
  constructor(public translate: TranslateService, private sharedService: SharedService) { }

  ngOnInit(): void {
    const tyed = new Typed('.typed',this.englishoptions);
    this.clickEventsubscription = this.sharedService.getClickEvent2().subscribe(() => {
      this.languagevalue = !this.languagevalue;
      if(this.languagevalue) {
        this.englishoptions['loop'] = false;
        return;
      }
      
    })
  }

}
