import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<string>();
  private subject1 = new Subject<string>();
  private subject2 = new Subject<string>();
  private waitlist_subject = new Subject<string>();
  constructor() { }

  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<string> {
    return this.subject.asObservable();
  }

  sendClickEvent1() {
    this.subject1.next();
  }
  getClickEvent1(): Observable<string> {
    return this.subject1.asObservable();
  }

  sendClickEvent2() {
    this.subject2.next();
  }
  getClickEvent2(): Observable<string> {
    return this.subject2.asObservable();
  }

  sendClickEventtoWaitList() {
    this.waitlist_subject.next();
  }
  getClickEventfromBtn(): Observable<string> {
    return this.waitlist_subject.asObservable();
  }
}
