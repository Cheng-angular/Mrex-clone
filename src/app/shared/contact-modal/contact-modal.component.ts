import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ContactModalService } from '../contact-modal.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {
  modaltoggle: Boolean;
  waitListsubscription: Subscription;
  joinForm: FormGroup;
  emptyusername = false;
  emptyemail = false;
  emptymessage = false;
  submitted = false;

  constructor(public translate: TranslateService, private sharedService: SharedService, public formbuilder: FormBuilder, private contactservice: ContactModalService) {
    this.createForm();
  }
    
  ngOnInit(): void {
    this.waitListsubscription = this.sharedService.getClickEventfromBtn().subscribe(() => {
      this.modaltoggle = !this.modaltoggle;
    })
  }

  createForm() {
    this.joinForm = this.formbuilder.group({
      username: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]],
      message: ['', [ Validators.required ]]
    })
  }

  onSubmit() {
    if(this.joinForm.value) {
      let data = this.joinForm.value;
      this.contactservice.sendFormData(data);
    }
  }

  closeModal() {
    this.modaltoggle = !this.modaltoggle;
    this.createForm();
  }
}
