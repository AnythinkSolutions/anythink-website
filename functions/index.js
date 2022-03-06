const admin = require('firebase-admin');
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//TODO: when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require('cors')({ origin: true });
// const cors = require('cors')({origin: 'https://anythink-website.web.app'});

admin.initializeApp();

//create and config transporter
const transportConfig = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PWD,
  },
};
// console.log("transport config: ", transportConfig);
let transporter = nodemailer.createTransport(transportConfig);

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
  
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  // if (req.method === 'OPTIONS') {
  //   // Send response to OPTIONS requests
  //   res.set('Access-Control-Allow-Methods', 'POST');
  //   res.set('Access-Control-Allow-Headers', 'Content-Type');
  //   res.set('Access-Control-Max-Age', '3600');
  //   return res.status(204).send('');
  // } 

  console.log('from sendEmail function. The request body is:', req.body);
  console.log('data: ', req.body.data);
  console.log('email address: ', req.body.data.email);
  //enable CORS using the `cors` express middleware.
  cors(req, res, () => {
    //get contact form data from the req and then assigned it to variables
    const email = req.body.data.email;
    const name = req.body.data.name;
    const phone = req.body.data.phone;
    const message = req.body.data.message;

    //config the email message
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: 'Anythink Website Contact Request',
      text: `${name}, with email ${email} and phone ${phone} says: ${message}`,
    };

    // console.log("mail to be sent with options: ", mailOptions);

    //call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: 'sent',
        },
      });
    });
  });
});