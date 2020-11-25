import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-tradelab',
  templateUrl: './product-tradelab.component.html',
  styleUrls: ['./product-tradelab.component.css']
})
export class ProductTradelabComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
