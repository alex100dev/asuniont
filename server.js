process.env.NTBA_FIX_319 = 1;
const port = process.env.PORT;
const host = process.env.HOST;
const fs = require('fs');
const date = new Date();
const telegramAPI = require('node-telegram-bot-api');
const token = '5595225109:AAF1Zr9lWFE7hCajnVqg-mhc8L530o8PwjY';
const bot = new telegramAPI(token, { webHook: { port: port, host: host } });


const order = [
  {
    id: 0,
    user_id: 1632569299, 
    service_id: 0,
    date: ''
  }
];
const service = [
  {
    id: 0,
    name: 'Очередь к парихмахеру',
    user_id: 16325692,
    time: null
  },
  {
    id: 1,
    name: 'Очередь на ногти',
    user_id: 163256929,
    time: null
  }, 
  { 
    id: 2,
    name: 'Подключение к базе бота',
    user_id: 1632569299,
    time: null
  } 
  
];
const user = [
  {
    id: 1632569299,
    is_bot: false,
    first_name: 'Alexandr',
    last_name: 'Astashov',
    username: 'lifecruisetothesky',
    mobile: '+77751906501',
    language_code: 'ru'
  }
];

const opts = {
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: []
  }
};
for (var i in service) {
  opts.reply_markup.inline_keyboard.push([{ text: service[i].name, callback_data: service[i].id }]);
}  

bot.setWebHook('https://astuniont.herokuapp.com/' + token);
bot.on('message', (message) => {
  if (message.text == '/start') {
    for (var i in user) {
      if (user[i].id == message.from.id) {
        break;
      } 
      else {
        if (i == user.length - 1) {
          user.push(message.from);
        }
      } 
    };
    bot.sendMessage(message.chat.id, `Привет, <b>${message.chat.first_name}</b>!\nГлавное меню - /start\nВыберите услугу:`, opts);
  } 
});
bot.on('callback_query', (query) => {
  if (query.data == 2) {
      order.push({ id: order.length, user_id: query.message.from.id, service_id: query.data, date: new Date().toISOString() });
      for (var i in service) {
      if (service[i].id == query.data) {
        bot.sendContact(query.message.chat.id, '+77751906501', service[i].name + ' Activ');
        bot.sendContact(query.message.chat.id, '+77056355871', service[i].name + ' Beeline');
        bot.sendMessage(service[i].user_id, `Новый заказ:\n${query.message.from.first_name} ${query.message.from.last_name}\n${service[i].name} - ${new Date().toISOString()}`);
      }
    }
  }
  else {
    
  } 
  console.log(order);
});

/*  {+1
    id: '7011831750756888275',
    from: {
      id: 1632569299,
      is_bot: false,
      first_name: 'Alexandr',
      last_name: 'Astashov',
      username: 'lifecruisetothesky',
      language_code: 'ru'
    },
    message: {
      message_id: 173,
      from: {
        id: 5595225109,
        is_bot: true,
        first_name: 'KushokyBot',
        username: 'KushokyBot'
      },
      chat: {
        id: 1632569299,
        first_name: 'Alexandr',
        last_name: 'Astashov',
        username: 'lifecruisetothesky',
        type: 'private'
      },
      date: 1656532562,
      text: 'Привет, Alexandr!\n' +
        'Спасибо что установили наш бот!\n' +
        'Главное меню - /start \n' +
        'Выберите услугу:',
      entities: [ [Object], [Object], [Object] ],
      reply_markup: { inline_keyboard: [Array] }
    },
    chat_instance: '-6725942240407492736',
    data: '0'
  } */

/* TelegramBot */ /*

Kind: global class
See: https: //core.telegram.org/bots/api

  TelegramBot
new TelegramBot(token, [options])
instance
  .on(event, listener)
  .startPolling([options])⇒ Promise
  .initPolling([options])⇒ Promise
  .stopPolling([options])⇒ Promise
  .isPolling()⇒ Boolean
  .openWebHook()⇒ Promise
  .closeWebHook()⇒ Promise
  .hasOpenWebHook()⇒ Boolean
  .getMe([options])⇒ Promise
  .setWebHook(url, [options], [fileOptions])⇒ Promise
  .deleteWebHook([options])⇒ Promise
  .getWebHookInfo([options])⇒ Promise
  .getUpdates([options])⇒ Promise
  .processUpdate(update)
  .sendMessage(chatId, text, [options])⇒ Promise
  .answerInlineQuery(inlineQueryId, results, [options])⇒ Promise
  .forwardMessage(chatId, fromChatId, messageId, [options])⇒ Promise
  .sendPhoto(chatId, photo, [options], [fileOptions])⇒ Promise
  .sendAudio(chatId, audio, [options], [fileOptions])⇒ Promise
  .sendDocument(chatId, doc, [options], [fileOptions])⇒ Promise
  .sendSticker(chatId, sticker, [options], [fileOptions])⇒ Promise
  .sendVideo(chatId, video, [options], [fileOptions])⇒ Promise
  .sendVideoNote(chatId, videoNote, [options], [fileOptions])⇒ Promise
  .sendVoice(chatId, voice, [options], [fileOptions])⇒ Promise
  .sendChatAction(chatId, action, [options])⇒ Promise
  .kickChatMember(chatId, userId, [options])⇒ Promise
  .unbanChatMember(chatId, userId, [options])⇒ Promise
  .restrictChatMember(chatId, userId, [options])⇒ Promise
  .promoteChatMember(chatId, userId, [options])⇒ Promise
  .exportChatInviteLink(chatId, [options])⇒ Promise
  .setChatPhoto(chatId, photo, [options], [fileOptions])⇒ Promise
  .deleteChatPhoto(chatId, [options])⇒ Promise
  .setChatTitle(chatId, title, [options])⇒ Promise
  .setChatDescription(chatId, description, [options])⇒ Promise
  .pinChatMessage(chatId, messageId, [options])⇒ Promise
  .unpinChatMessage(chatId, [options])⇒ Promise
  .answerCallbackQuery(callbackQueryId, [options])⇒ Promise
  .editMessageText(text, [options])⇒ Promise
  .editMessageCaption(caption, [options])⇒ Promise
  .editMessageReplyMarkup(replyMarkup, [options])⇒ Promise
  .getUserProfilePhotos(userId, [options])⇒ Promise
  .sendLocation(chatId, latitude, longitude, [options])⇒ Promise
  .editMessageLiveLocation(latitude, longitude, [options])⇒ Promise
  .stopMessageLiveLocation([options])⇒ Promise
  .sendVenue(chatId, latitude, longitude, title, address, [options])⇒ Promise
  .sendContact(chatId, phoneNumber, firstName, [options])⇒ Promise
  .getFile(fileId, [options])⇒ Promise
  .getFileLink(fileId, [options])⇒ Promise
  .getFileStream(fileId, [options])⇒ stream.Readable
  .downloadFile(fileId, downloadDir, [options])⇒ Promise
  .onText(regexp, callback)
  .removeTextListener(regexp)⇒ Object
  .onReplyToMessage(chatId, messageId, callback)⇒ Number
  .removeReplyListener(replyListenerId)⇒ Object
  .getChat(chatId, [options])⇒ Promise
  .getChatAdministrators(chatId, [options])⇒ Promise
  .getChatMembersCount(chatId, [options])⇒ Promise
  .getChatMember(chatId, userId, [options])⇒ Promise
  .leaveChat(chatId, [options])⇒ Promise
  .setChatStickerSet(chatId, stickerSetName, [options])⇒ Promise
  .deleteChatStickerSet(chatId, [options])⇒ Promise
  .sendGame(chatId, gameShortName, [options])⇒ Promise
  .setGameScore(userId, score, [options])⇒ Promise
  .getGameHighScores(userId, [options])⇒ Promise
  .deleteMessage(chatId, messageId, [options])⇒ Promise
  .sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, [options])⇒ Promise
  .answerShippingQuery(shippingQueryId, ok, [options])⇒ Promise
  .answerPreCheckoutQuery(preCheckoutQueryId, ok, [options])⇒ Promise
  .getStickerSet(name, [options])⇒ Promise
  .uploadStickerFile(userId, pngSticker, [options], [fileOptions])⇒ Promise
  .createNewStickerSet(userId, name, title, pngSticker, emojis, [options], [fileOptions])⇒ Promise
  .addStickerToSet(userId, name, pngSticker, emojis, [options], [fileOptions])⇒ Promise
  .setStickerPositionInSet(sticker, position, [options])⇒ Promise
  .deleteStickerFromSet(sticker, [options])⇒ Promise
  .sendMediaGroup(chatId, media, [options])⇒ Promise
static
  .errors: Object
  .messageTypes: Array. < String >
  .Promise 
*/
/*
// Mine object
const func = {
  readFileSync: function(path) {
    var encoding;
    if (path.split('.')[1] == 'html') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'css') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'js') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'ico') {
      encoding = 'utf8';
    }
    return fs.readFileSync(path);
  }
};

const port = process.env.PORT || 5000;
const host = process.env.HOST;

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  if (request.method == 'GET') {
    if (request.url == '/') {
      response.setHeader("Content-Type", "text/html");
      response.end(func.readFileSync(__dirname + '/dist/index.html'));
    }
    if (request.url == '/style.css') {
      response.setHeader("Content-Type", "text/css");
      response.end(func.readFileSync(__dirname + '/dist/style.css'));
    }
    if (request.url == '/script.js') {
      response.setHeader("Content-Type", "text/javascript");
      response.end(func.readFileSync(__dirname + '/dist/script.js'));
    }
    if (request.url == '/favicon.ico') {
      response.setHeader('Content-Type' , 'image/ico');
      response.end(func.readFileSync(__dirname + '/dist/favicon.png'));
    }
    
  } 
});

server.listen(port, () => { console.log(`Server port ${port}`); });
*/


// завести машину без ключей чтобы не заклинило руль
// сделать заборы маленький б Вали и покрасить оба калиткой
