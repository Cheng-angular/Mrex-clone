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
        'All-in-one platform for smarter Trading', 
        'All-in-one platform for smarter Anlytics', 
        'All-in-one platform for smarter Messaging'
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay:500,
      startDelay: 1000,
      CursorChar: false,
      smartBakcspace: true,
      loop:true
    }
    const tyed = new Typed('.typed', options);
  }

}
