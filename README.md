Purpose
=======

This is a TurnTable.fm chatbot who responds to '/sagansays' with a quote from world renowned astronomer, author, and _Cosmos_ host Carl Sagan.

Quotes Source
=============

The quotes come from the [Carl Sagan Wikiquote page](http://en.wikiquote.org/wiki/Carl_Sagan), copied and pasted, and then converted to a javascript array using the parseQuoteFile.rb script.

The script separates most of the quotes from the non-quote (attributions, citations) with only a few exceptions.  A manual skim was also required to fix multi-line quotations and other unpatterned non-quotations.

To Use
======

If you wish to use this chatbot, please follow all of the rules for the room you are in. I'm not sure about the general rules on voting bots on ttfm, so bot voting is disabled by default. This software is offered as-is. Do with it what you will, but if you do modify it and use it, please give credit where credit is due.  I might work up an official license, but probably not.  Use freely, but use responsibly.

To use this you need to have node.js installed.  Rename the `auth_template.js` file to `auth.js` and fill in the user information for your bot and your own ttfn DJ name for the `owner` field (allows you to kill the bot from chat).

Run ./sagansays from the command line. Type in `/sagansays` in the ttfm chat box, and you should see a Sagan quote if everything's set up properly.

Future Development
==================

Not really sure what else I'm going to do with cosmo carl. I've seen some /catfacts and other factbots, and I thought this would be a fun one to have in the [Coding Soundtrack](http://turntable.fm/coding_soundtrack3) room.

If anything I'll probably just keep trying to optimize him, maybe give him some more personality.  Maybe I'll even let him DJ.  Science themed music only.  We'll see.

