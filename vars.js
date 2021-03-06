var vars = new Object();

//server settings
vars.wildPokemonBot = "PSMMO-Bot";
vars.server = "psmmo.glitch.me"; //link to your Pokemon Showdown server / ip address [THIS IS NOT A .psim.us address]
vars.serverName = "Hello World"; //name of your server on the PS registry [IF nameles: set equal to vars.server]
vars.port = 80; //default showdown port (8000)

//game settings
vars.startItems = {
	pokeball: 10,
	greatball: 3,
	ultraball: 1
};

//add custom pokemon to a map
//poke.rarity = 0-4, where 0 = least rare, & 4 = most rare
/*vars.mapAdditives = {  mapName: [( poke.name + poke.rarity ),  ...]
						 ...
					  };                                                 */
vars.mapAdditives = {
	start: ["pikachu3", "metapod1", /*  ...  */]
};

//client variables
if (window.location.host === "localhost" && vars.server !== "psmmo.glitch.me") {
	vars.server = 'localhost';
	vars.serverName = 'localhost';
}
vars.x = 0;
vars.y = 0;
vars.players = new Object();
vars.map = new Array();
vars.mapName = "start";
vars.fps = 1000 / 10;
vars.block = {
	x: 40, //amount on x axis (26 on pokemmo)
	y: 30, //amount on y axis (14 on pokemmo)
	width: 16,
	height: 16,
};
vars.blockTypes = {
	blank: 0,
	blockwalk: 1,
	door: 2,
	grass: 3,
	water: 4,
};
vars.spritesURL = "./sprites.png";
vars.character = {
	direction: false,
	cycle: 0,
	cycleType: "walk",
	width: 14,
	height: 19,
	x: 481,
	y: 387,
	directionsOrder: ["down", "left", "up", "right", /* walk */ "down", "left", "up", "right" /* run */],
	walk: new Object(),
	run: new Object(),
};
vars.popups = new Array();
vars.rooms = new Object();
vars.heldKeys = new Object();
vars.rates = {
	encounterRate: [1.25, 3.33, 6.75, 8.5, 10],
};
vars.items = new Object();
vars.team = new Array();
vars.box = new Array();
vars.expDivision = new Object();
vars.focusedInput = false;
vars.windowFocus = true;
vars.anims = new Array();
vars.focusing = false;
vars.startedAnims = false;
(function() {
	for (var step = 0; step < 24; step++) {
		var walkOrRunStep = "walk";
		if (step > 11) walkOrRunStep = "run";
		var direction = vars.character.directionsOrder[Math.floor(step / 3)];
		if (Math.floor(step / 3) == step / 3) vars.character[walkOrRunStep][direction] = new Array();
		var currentX = vars.character.x + (vars.block.width * step);
		var currentY = vars.character.y;
		vars.character[walkOrRunStep][direction].push({
			x: currentX,
			y: currentY
		});
	}
})()