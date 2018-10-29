import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  reCaptchaSiteKeyEncrypted = 'NkxjclZYY1VBQUFBQVAxWTlhMXpxTHBmc1FxVXJNNTlERF9Tclc0YQ==';
  reCaptchaSiteKey: string;

  constructor(private fb: FormBuilder, private contactService: ContactService, private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.reCaptchaSiteKey = window.atob(this.reCaptchaSiteKeyEncrypted);
    this.form = this.fb.group({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'phone': new FormControl(null, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)),
      'message': new FormControl(null, Validators.required),
      'recaptcha': new FormControl(null, Validators.required)
    });
  }

  sendMessage() {
    if (this.form.valid) {
      this.contactService.sendMessage(
        this.form.value['email'],
        this.form.value['name'],
        this.form.value['message'],
        this.form.value['phone']
      ).subscribe(null, err => {
        this.snackBar.open('There was an unknown error submitting the form.\
         If this problem persists, please shoot an email to contact@bigtreeworld.com', null, {duration: 5000});
      });
    } else {
      this.snackBar.open('Please make sure all fields are valid!', null, {duration: 2000});
    }
  }
}
