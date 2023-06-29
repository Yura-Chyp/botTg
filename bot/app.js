const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const token = '6320873995:AAFi1PvSo8d3kxcZBvFMPQBULPk0w5vMgJI';
const app = express();
const PORT = 3000;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});
app.listen(PORT,()=>{
    console.log(`Server is runnig on port:${PORT}`)
})
app.post(`/bot${token}`,(req,res)=>{

})