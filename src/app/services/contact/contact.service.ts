import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService {
  mailGunApiKey = '63329e4ed18fbc08ad8e278d02b9c587-c9270c97-118949ce';
  apiBaseUrl = `https://api.mailgun.net/v3/mg.bigtreeworld.com`;

  constructor(private http: HttpClient) {}

  sendMessage(fromEmail: string, fromName: string, message: string, phoneNumber: string) {
    const body = {
      from: `"${fromName}" <${fromEmail}>`,
      to: '"Big Tree World" <contact@bigtreeworld.com>',
      subject: 'Big Tree World contact form submission',
      html: `Submission on Big Tree World contact form:
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
    const bodyJson = Object.keys(body).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`).join('&');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${window.btoa('api:' + this.mailGunApiKey)}`);
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${this.apiBaseUrl}/messages`, bodyJson, {headers: headers});
  }
}
