import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-message',
  templateUrl: './product-message.component.html',
  styleUrls: ['./product-message.component.css']
})
export class ProductMessageComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
