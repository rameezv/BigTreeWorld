import * as functions from 'firebase-functions';
import * as sendgrid from '@sendgrid/mail';
import * as cors from 'cors';
const corsHandler = cors({origin: true});

// export const httpEmail = functions.https.onCall((data, context) => {

//     const msg = {
//       to: "virji4life@gmail.com",
//       from: "no-reply@myemail.com",
//       subject: `new message`,
//       text: 'aa',
//       html: 'aa'
//     };

//     sendgrid.send(msg).then(() => {}, error => {
//       console.error(error);
//     });

//     // Handle errors here

//     // Response must be JSON serializable
//     return { success: true };

// });

// function parseBody(body) {
//   const helper = sendgrid.mail;
//   const fromEmail = new helper.Email(body.from);
//   const toEmail = new helper.Email(body.to);
//   const subject = body.subject;
//   const message = new helper.Content('text/html', body.message);
//   const mail = new helper.Mail(fromEmail, subject, toEmail, message);
//   return mail.toJSON();
// }

// export const httpEmail = functions.https.onRequest((req, res) => {
//   // corsHandler(req, res, () => {
//   //   sendgrid.setApiKey(functions.config().sendgrid.apikey);
//   //   if (req.method !== 'POST') {
//   //     return Promise.resolve().then(() => {
//   //       return res.status(405).send('Only POST requests are accepted');
//   //     });
//   //   }

//   //   const request = sendGridClient.emptyRequest({
//   //     method: 'POST',
//   //     path: '/v3/mail/send',
//   //     body: parseBody(req.body)
//   //   });

//   //   return sendGridClient.API(request).then(() => {
//   //     return res.status(200).send({'message': 'Email sent successfully'});
//   //   }).catch(err => {
//   //     return res.status(500).send(err.message);
//   //   });
//   // });

// })

export const httpEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    sendgrid.setApiKey(functions.config().sendgrid.apikey);
    const msg = {
      to: req.body.to,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.message,
    };
    sendgrid.send(msg).then(() => {
      return res.status(200).send({'message': 'Email sent successfully'});
    }).catch(err => {
      return res.status(500).send(err.message);
    });
  });
});
