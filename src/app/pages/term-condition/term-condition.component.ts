import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.css']
})
export class TermConditionComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
