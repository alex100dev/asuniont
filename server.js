process.env.NTBA_FIX_319 = 1;
const fs = require('fs'); 
const telegramAPI = require('node-telegram-bot-api');
const token = '5595225109:AAF1Zr9lWFE7hCajnVqg-mhc8L530o8PwjY';
const bot = new telegramAPI(token, { polling: true });

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
    name: 'Подключение к базе бота',
    user_id: 1632569299,
    time: null
  }
];
const user = [
  {
    id: 163256929,
    is_bot: false,
    first_name: 'Alexandr',
    last_name: 'Astashov',
    username: 'lifecruisetothesky',
    language_code: 'ru'
  }
];

const opts = {
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: [[]]
  }
};
service.forEach((e, i) => {
  opts.reply_markup.inline_keyboard[i].push({ text: e.name, callback_data: e.id });
});

bot.on('message', (message) => {
  // если чата нет в базе сохранить чат и данные пользователя в базе - msg.chat 
  
  //bot.sendPhoto(msg.chat.id, 'url', { caption: 'text' });
  //bot.sendMessage(msg.chat.id, "Welcome", {
    //"reply_markup": {
      //"keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    //}
  //});
  //bot.sendMessage(msg.chat.id, "<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>", { parse_mode: "HTML" });
  /*
    <b>bold</b>, <strong>bold</strong>
    <i> italic </i>, <em>italic</em>
    <a href="http://www.example.com/">inline URL</a> 
    <code> inline fixed - width code </code> 
    <pre> pre - formatted fixed - width code block </pre>
  */
  //bot.sendLocation(msg.chat.id,44.97108, -104.27719);
  //sendVenue sendContact getUserProfilePhotos
  
  if (message.text == '/start') {
    
    for (var i in user) {
      if (user[i].id == message.from.id) {
        
        break;
      } else {
        if (i == user.length - 1) {
          user.push(message.from);
        }
      } 
    };
    console.log(user);
    bot.sendMessage(message.chat.id, `Привет, <b>${message.chat.first_name}</b>!\n<b>Спасибо что установили наш бот!</b>\nГлавное меню - /start \nВыберите услугу:`, opts);
  } 
});
bot.on('callback_query', (query) => {
  if (query.data == 0 || query.data == 1) {
    bot.sendMessage(message.chat.id, JSON.stringify(query));
    // bot.sendContact(query.message.chat.id, '+77056355871', query.message.chat.first_name + ' ' + query.message.chat.last_name);
  } 
});

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
