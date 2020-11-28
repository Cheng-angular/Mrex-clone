import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    console.log(window.scroll(0, 0))
  }

}
