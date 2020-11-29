import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactModalService {
  private serverUrl = 'https://api.hsforms.com/submissions/v3/integration/submit/62515/fcc69886-915b-4fef-b35f-27850ef461e1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accss-Control-Allow-Origin': this.serverUrl,
    })
  };

  constructor(private http: HttpClient) { }

  public sendFormData(formdata) {
    console.log(formdata);
    // const url = `${this.serverUrl}`;
    // return this.http.post(url, formdata, this.httpOptions).pipe ( tap((res: any) => {
    //   return res;
    // }, (err: any) => {return err;})
    // );
  }

}
