exports.handler = (context, event, callback) => {
  const { PHONE_NUMBER, TWILIO_NUMBER } = context;
  const client = context.getTwilioClient();
  client.messages
    .create({
      to: PHONE_NUMBER,
      from: TWILIO_NUMBER,
      body: `New idea: ${event.TranscriptionText}`,
    })
    .then((message) => {
      console.log(`Sent message: ${message.sid}`);
      callback(null, `Sent message: ${message.sid}`);
    })
    .catch((error) => {
      console.log(`Uh oh: ${error}`);
      callback(error);
    });
};
