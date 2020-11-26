import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    const options = {
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
    const tyed = new Typed('.typed', options);
  }

}
