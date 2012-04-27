#!/usr/bin/env node

var Bot = require('ttapi');

var botCred = require('./auth');

var bot = new Bot(botCred.auth, botCred.userId);

var cosmo = /^cosmo.*carl$/;

console.log(botCred.auth + "\n" + botCred.userId + "\n" + botCred.roomId);

bot.on('ready', function (data) { bot.roomRegister(botCred.roomId); });
bot.on('roomChanged', function (data) { console.log('The bot has changed rooms.', data); });
bot.on('speak', function (data) {
  var name = data.name;
  var text = data.text;

  if (name.match(cosmo)) {
    return;
  }

  if (text.match(/^\/sagansays$/)) {
    var message = "@" + name + ": " + randomSaganQuote();
    bot.speak(message);
    console.log(message);
  } else if (text.match(/^(cosmo|\/)\s*(awesome|upvote|upboat)$/) || text.match(/(:up:|:boat:|:up::boat:)/)) {
    //bot.vote('up', function () { bot.speak('Whooop!'); });
    bot.speak(":up::boat:");
    console.log("Song would be upvoted, but I don't think I'm allowed.");
  } else if (text.match(/^(cosmo|\/)\s*(lame|downvote)$/)) {
    //bot.vote('down', function () { bot.speak('Awww'); });
    console.log("Song would be downvoted, but I'm not allowed.");
  } else if (text.match(/^cosmo\ die$/)) {
    if (name.match(botCret.owner)) {
      bot.speak("I don't know where I'm going, but I'm on my way.");
      bot.roomDeregister();
      console.log("Leaving the room per your request.");
      process.exit();
    } else {
      bot.speak("Too soon, " + name + ", too soon.");
    }
  }
});

var carlSagan = require('./saganQuotes');

var randomSaganQuote = function() {
  var quotes = carlSagan.quotes;
  return quotes[Math.floor( Math.random() * quotes.length)];
};

