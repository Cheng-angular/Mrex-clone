import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-investor',
  templateUrl: './about-investor.component.html',
  styleUrls: ['./about-investor.component.css']
})
export class AboutInvestorComponent implements OnInit {

  constructor( private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
