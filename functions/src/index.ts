import * as functions from 'firebase-functions';
import * as sendgrid from '@sendgrid/mail';

export const httpEmail = functions.https.onRequest((req, res) => {
  sendgrid.setApiKey(functions.config().sendgrid.apikey);
  const msg = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    html: req.body.message,
  };
  sendgrid.send(msg).then(() => {
    return res.status(200).send({'message': 'Email sent successfully'});
  }).catch(err => {
    return res.status(500).send(err.message);
  });

  return {'message': 'Email sent successfully'};
});
