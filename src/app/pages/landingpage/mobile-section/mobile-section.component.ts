import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-mobile-section',
  templateUrl: './mobile-section.component.html',
  styleUrls: ['./mobile-section.component.css']
})
export class MobileSectionComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  goToWaitList() {
    this.sharedService.sendClickEventtoWaitList();
  }

}
