# psmmo
A pokemon mmo using pokemonshowdown's server.

How to setup PSMMO
-----
PART 1 - SETUP POKEMON SHOWDOWN
1. Download & Install Pokemon Showdown
2. In the root directory add bot.js & mmo.js from this repo's "serverpsjs" folder
3. Add these lines to the very end of the "chat-commands.js" file
	- const Bot = require('./bot').setup(exports.commands);
	- const MMO = require('./mmo').setup(exports.commands);
3. Replace sockets.js from the root with the "serverpsjs" folders's sockets.js

Part 2 - SETUP PSMMO
1. Download PSMMO
2. Add to a webserver OR add to /static/ folder in Pokemon-Showdown
	- if using /static/ set the port = 80 in vars.js
3. Change pokemon showdown server @ vars.js and change vars.server to your ip address && vars.port, if needed


Info
-----
Changes to Pokemon Showdown:
   - bot.js - comes with bot that battles
   - mmo.js - mmo commands (encounter pokemon, moving in maps, chat, etc.)
   - sockets.js - snippet of code for bot.js to work (hackish)

Bot
-----
- Change its name on client @ vars.js - vars.wildPokemonBot
- Change its name on server @ bot.js - bot.name

Don't forget to run the command below on your server, otherwise nothing will work.
 /makechatroom psmmo