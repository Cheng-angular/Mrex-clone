import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-terminal',
  templateUrl: './product-terminal.component.html',
  styleUrls: ['./product-terminal.component.css']
})
export class ProductTerminalComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
