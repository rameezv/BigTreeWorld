import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: UntypedFormGroup;
  reCaptchaSiteKeyEncrypted = 'NkxjclZYY1VBQUFBQVAxWTlhMXpxTHBmc1FxVXJNNTlERF9Tclc0YQ==';
  reCaptchaSiteKey: string;
  formSubmitting = false;

  constructor(private fb: UntypedFormBuilder, private contactService: ContactService, private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.reCaptchaSiteKey = window.atob(this.reCaptchaSiteKeyEncrypted);
    this.form = this.fb.group({
      'name': new UntypedFormControl(null, Validators.required),
      'email': new UntypedFormControl(null, [Validators.email, Validators.required]),
      'phone': new UntypedFormControl(null, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)),
      'message': new UntypedFormControl(null, Validators.required),
      'recaptcha': new UntypedFormControl(null, Validators.required)
    });
  }

  sendMessage() {
    if (this.form.valid) {
      this.formSubmitting = true;
      this.contactService.sendMessage(
        this.form.value['email'],
        this.form.value['name'],
        this.form.value['message'],
        this.form.value['phone']
      ).subscribe(() => {
        this.snackBar.open('Message sent! We will try to get back to you within 48 hours.', null, {duration: 3000});
        this.form.reset();
        this.form.markAsPristine();
        this.formSubmitting = false;
      }, err => {
        console.error(err);
        this.snackBar.open('There was an unknown error submitting the form.\
         If this problem persists, please shoot an email to contact@bigtreeworld.com', null, {duration: 5000});
        this.formSubmitting = false;
      });
    } else {
      this.snackBar.open('Please make sure all fields are valid!', null, {duration: 2000});
    }
  }
}
