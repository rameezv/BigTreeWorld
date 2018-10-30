import * as functions from 'firebase-functions';
import * as sendgrid from 'sendgrid';
import * as cors from 'cors';
const corsHandler = cors({origin: true});

const sendGridClient = sendgrid(functions.config().sendgrid.apikey);

function parseBody(body) {
  const helper = sendgrid.mail;
  const fromEmail = new helper.Email(body.from);
  const toEmail = new helper.Email(body.to);
  const subject = body.subject;
  const message = new helper.Content('text/html', body.message);
  const mail = new helper.Mail(fromEmail, subject, toEmail, message);
  return mail.toJSON();
}

export const httpEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    if (req.method !== 'POST') {
      return Promise.resolve().then(() => {
        return res.status(405).send('Only POST requests are accepted');
      });
    }

    const request = sendGridClient.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: parseBody(req.body)
    });

    return sendGridClient.API(request).then(() => {
      return res.status(200).send({'message': 'Email sent successfully'});
    }).catch(err => {
      return res.status(500).send(err.message);
    });
  });
})
