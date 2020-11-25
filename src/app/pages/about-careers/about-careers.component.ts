import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-careers',
  templateUrl: './about-careers.component.html',
  styleUrls: ['./about-careers.component.css']
})
export class AboutCareersComponent implements OnInit {

  constructor( private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
