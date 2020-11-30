import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main-today',
  templateUrl: './main-today.component.html',
  styleUrls: ['./main-today.component.css']
})
export class MainTodayComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  goToWaitList() {
    this.sharedService.sendClickEventtoWaitList();
  }
}
