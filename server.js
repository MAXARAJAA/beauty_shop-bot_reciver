const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const port = 3000;

// Змініть на свій токен бота
const bot = new TelegramBot("6943167735:AAHOAmOhVLGbRVOMQH9BLrDjSdXBPWTzXyE", {
  polling: false,
});
// Змініть на свій ID чату
const chatId = "-4119578927";

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const message = `Нова заявка:\nІм'я: ${formData["user-name"]}\nТелефон: ${formData["user-tel"]}\nEmail: ${formData["user-email"]}`;

  bot
    .sendMessage(chatId, message)
    .then(() => console.log("Message sent to Telegram"))
    .catch(error =>
      console.error("Error while sending message to Telegram:", error)
    );

  res.status(200).send("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
