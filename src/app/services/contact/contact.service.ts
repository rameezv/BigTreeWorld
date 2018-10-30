import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService {
  apiBaseUrl = `https://us-central1-bigtreeworld-6f699.cloudfunctions.net`;

  constructor(private http: HttpClient) {}

  sendMessage(fromEmail: string, fromName: string, message: string, phoneNumber: string) {
    const body = {
      from: `"${fromName}" <${fromEmail}>`,
      to: '"Big Tree World" <contact@bigtreeworld.com>',
      subject: 'Big Tree World contact form submission',
      message: `Submission on Big Tree World contact form:
        <br />
        <hr>
        <ul>
          <li>
            From: ${fromName} (${fromEmail})
          </li>
          <li>
            Phone number: ${phoneNumber ? phoneNumber : 'Unspecified'}
          </li>
          <li>
            Message: ${message}
          </li>
        </ul>
      `
    };
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiBaseUrl}/httpEmail`, body, {headers: headers});
  }
}
