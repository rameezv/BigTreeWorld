import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {}
  ngOnInit() {
    this.form = this.fb.group({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'phone': new FormControl(null, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)),
      'message': new FormControl(null, Validators.required)
    });
  }

  sendMessage() {
    if (this.form.valid) {
      this.contactService.sendMessage(
        this.form.value['email'],
        this.form.value['name'],
        this.form.value['message'],
        this.form.value['phone']
      ).subscribe(console.log);
    } else {
      window.alert('Not valid');
    }
  }
}
