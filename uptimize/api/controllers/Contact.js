const sgKey = require("../../config/keys").sgApiKey;
const sg = require("@sendgrid/mail");
sg.setApiKey(sgKey);

// Contact Model
const Contact = require("../models/Contact");

function err(error, res) {
  res.status(500).json({ message: error });
}

exports.submitContact = (req, res) => {
  let test = req.body.test;

  const contact = new Contact({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    questions: req.body.questions
  });
  contact
    .save()
    .then(() => {
      let questions = req.body.questions || "none";

      const htmlBody = `
                <h2>New Lead</h2>
                <p>Full Name: ${req.body.fullName}</p>
                <p>Email: ${req.body.email}</p>
                <p>Phone: ${req.body.phone}</p>
                <p>Questions: ${questions}</p>
                `;
      const msg = {
        from: "Uptimize <wadealsmith@gmail.com>", // sender address
        to: "uptimizedm@gmail.com", // receiver
        subject: "New Lead", // Subject line
        html: htmlBody
      };
      if (!test) {
        sg.send(msg)
          .then(() => {
            res.status(201).json({
              message: "Successfully made a new contact",
              contact: contact,
              status: 201
            });
          })
          .catch(error => err(error, res));
      }
    })

    .catch(error => err(error, res));
};
