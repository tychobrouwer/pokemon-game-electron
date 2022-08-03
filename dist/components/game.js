"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const tiles_png_1 = __importDefault(require("../assets/tiles.png"));
const character_png_1 = __importDefault(require("../assets/character.png"));
const battle_assets_png_1 = __importDefault(require("../assets/battle_assets.png"));
const choose_starter_png_1 = __importDefault(require("../assets/choose_starter.png"));
const pokemon_1st_generation_png_1 = __importDefault(require("../assets/pokemon_1st_generation.png"));
const pokemon_2st_generation_png_1 = __importDefault(require("../assets/pokemon_2st_generation.png"));
const pokemon_3st_generation_png_1 = __importDefault(require("../assets/pokemon_3st_generation.png"));
const font_png_1 = __importDefault(require("../assets/font.png"));
const building_assets_png_1 = __importDefault(require("../assets/building_assets.png"));
const player_1 = require("./player");
const map_1 = require("./map");
const loader_1 = require("../utils/loader");
const camera_1 = require("./camera");
const avatar_1 = require("./avatar");
const pokemon_battle_1 = require("./pokemon_battle");
const constants_1 = require("../utils/constants");
const keyboard_1 = require("../utils/keyboard");
const helper_1 = require("../utils/helper");
class Game {
    constructor(gameCtx, overlayCtx) {
        this.player = new player_1.Player();
        this.loader = new loader_1.Loader();
        this._previousElapsed = 0;
        this.dirx = 0;
        this.diry = 0;
        this.direction = 0;
        this.animation = 0;
        this.currentPlayerCol = 0;
        this.currentPlayerRow = 0;
        this.gameStatus = 'game';
        this.selectedStarter = 1;
        this.selectedConfirm = true;
        this.keyDown = false;
        // Set the canvas rendering contexts to the supplied
        this.gameCtx = gameCtx;
        this.overlayCtx = overlayCtx;
        // Get playerData and gameTriggers from localStorage
        let playerData = this.player.getStoredPlayerData('playerData');
        let gameTriggers = this.player.getStoredPlayerData('gameTriggers');
        // If playerData in localStorage does not have data, create new player
        if (!playerData.location) {
            playerData = this.player.createNewPlayer(true);
        }
        // If gameTriggers in localStorage does not have data, create gameTriggers object
        if (!gameTriggers.chooseStarter) {
            gameTriggers = {
                chooseStarter: false,
            };
        }
        // Set the currentMap to location retrieved from localStorage
        this.currentMap = playerData.location;
        // Set the gameTriggers
        this.gameTriggers = gameTriggers;
        // Promise for loading images into the Loader class
        const p = this.load();
        Promise.all(p).then(() => {
            // Running function to start key eventlistener and set necessary images
            this.init();
            // Create map object with the currentMap
            this.map = new map_1.Map(constants_1.c.MAPS[playerData.location]);
            // Create avatar object with the loader and the map object
            this.avatar = new avatar_1.Avatar(this.loader, this.map);
            // Create camera object with the currentMap and the width and height for the game
            this.camera = new camera_1.Camera(constants_1.c.MAPS[playerData.location], constants_1.c.GAME_WIDTH, constants_1.c.GAME_HEIGHT);
            // Set the camera object to follow the avatar object
            this.camera.follow(this.avatar);
            // Update the map object to the currentMap's properties
            this.map.updateMap(this.currentMap);
            // Load the adjacent maps
            this.loadAdjacentMaps(true);
            // Set the player position to the correct current location
            this.avatar.loadMapUpdate(this.map, playerData.position.x, playerData.position.y);
            // Interval for saving the playerData to localStorage 
            setInterval(() => this.saveToLocalStorage(), 1000);
            // Start the tick loop with a canvas animation request
            window.requestAnimationFrame(this.tick.bind(this));
        });
    }
    load() {
        return [
            this.loader.loadImage('tiles', tiles_png_1.default),
            this.loader.loadImage('avatar', character_png_1.default),
            this.loader.loadImage('battleAssets', battle_assets_png_1.default),
            this.loader.loadImage('starterAssets', choose_starter_png_1.default),
            this.loader.loadImage('pokemonGeneration1', pokemon_1st_generation_png_1.default),
            this.loader.loadImage('pokemonGeneration2', pokemon_2st_generation_png_1.default),
            this.loader.loadImage('pokemonGeneration3', pokemon_3st_generation_png_1.default),
            this.loader.loadImage('font', font_png_1.default),
            this.loader.loadImage('buildingAtlas', building_assets_png_1.default),
        ];
    }
    init() {
        // Start the eventListeners for the supplied keys
        keyboard_1.keyboard.listenForEvents([keyboard_1.keyboard.LEFT, keyboard_1.keyboard.RIGHT, keyboard_1.keyboard.UP, keyboard_1.keyboard.DOWN, keyboard_1.keyboard.ENTER]);
        // Set the necessary images to class variables
        this.tileAtlas = this.loader.loadImageToCanvas('tiles', constants_1.c.ASSETS_TILES_HEIGHT, constants_1.c.ASSETS_TILES_WIDTH);
        this.starterAtlas = this.loader.loadImageToCanvas('starterAssets', constants_1.c.ASSETS_STARTER_HEIGHT, constants_1.c.ASSETS_STARTER_WIDTH);
        this.font = this.loader.loadImageToCanvas('font', constants_1.c.ASSETS_FONT_HEIGHT, constants_1.c.ASSETS_FONT_WIDTH);
        this.buildingAtlas = this.loader.loadImageToCanvas('buildingAtlas', constants_1.c.ASSETS_BUILDING_TILES_HEIGHT, constants_1.c.ASSETS_BUILDING_TILES_WIDTH);
    }
    tick(elapsed) {
        return __awaiter(this, void 0, void 0, function* () {
            // Calculate the delta between the ticks
            let delta = (elapsed - this._previousElapsed) / 1000.0;
            delta = Math.min(delta, 0.25); // maximum delta of 250 ms
            this._previousElapsed = elapsed;
            // check for gameStatus to decide what to render
            if (this.gameStatus === 'chooseStarter' || this.gameStatus === 'confirmStarter') {
                // Render chooseStarter sequence
                this.chooseStarter(delta);
            }
            else {
                // Clear the canvases
                this.overlayCtx.clearRect(0, 0, constants_1.c.GAME_WIDTH, constants_1.c.GAME_HEIGHT);
                this.gameCtx.clearRect(0, 0, constants_1.c.GAME_WIDTH, constants_1.c.GAME_HEIGHT);
                // Update the game (movement and actions)
                this.update(delta);
                // Render layers to canvas.
                this.render(delta);
                // Find pokemon function
                yield this.findPokemon();
            }
            // Request new animation frame
            window.requestAnimationFrame(this.tick.bind(this));
        });
    }
    saveToLocalStorage() {
        if (this.avatar) {
            this.player.setPlayerPosition(this.currentMap, this.avatar.x, this.avatar.y);
            const playerData = this.player.getPlayerData();
            (0, helper_1.setLocalStorage)('playerData', playerData);
            (0, helper_1.setLocalStorage)('gameTriggers', this.gameTriggers);
        }
    }
    findPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            // Get current column and row of the avatar
            const column = Math.floor(this.avatar.x / constants_1.c.MAP_TSIZE);
            const row = Math.floor(this.avatar.y / constants_1.c.MAP_TSIZE);
            // Check if avatar has entered new tile
            if (column !== this.currentPlayerCol || row !== this.currentPlayerRow) {
                // Get the tile identity number from the map object
                const tile = this.map.getTile(0, this.currentPlayerCol, this.currentPlayerRow);
                // Get a random number for deciding if pokemon has been found
                const randomNumber = (0, helper_1.randomFromMinMax)(0, 2879);
                if (tile === 2 && randomNumber < constants_1.c.GRASS_ENCOUNTER_NUMBER) {
                    // Define new pokemon battle
                    const pokemonBattle = new pokemon_battle_1.PokemonBattle(this.overlayCtx, this.loader, this.player, this.currentMap, 0);
                    // Start new pokemon battle and wait for result
                    const battleResult = yield pokemonBattle.battle();
                    if (battleResult) {
                        console.log('battle with ' + battleResult.pokemon.pokemonName + ' won!');
                        // this.player.addPokemon(foundPokemon);
                    }
                }
                // Update current player column and row
                this.currentPlayerCol = column;
                this.currentPlayerRow = row;
            }
        });
    }
    chooseStarter(delta) {
        // Increment animation counter
        this.animation = this.animation < 9.94 ? this.animation + 10 * delta : 0;
        // Set the default x source of the three pokeballs
        let pokeballSource0 = 110;
        let pokeballSource1 = 110;
        let pokeballSource2 = 110;
        if (this.animation < 4) {
            // According to the value of the animation counter and selectedStarter set the x source
            pokeballSource0 = (this.selectedStarter === 0) ? 110 + (this.animation << 0) * 23 : 110;
            pokeballSource1 = (this.selectedStarter === 1) ? 110 + (this.animation << 0) * 23 : 110;
            pokeballSource2 = (this.selectedStarter === 2) ? 110 + (this.animation << 0) * 23 : 110;
        }
        // Set the coordinates of the selector hand according to the current selected starter
        const handX = (this.selectedStarter === 0) ? 48 : (this.selectedStarter === 1) ? 108 : 169;
        const handY = (this.selectedStarter === 1) ? 33 : 9;
        // Draw the background
        this.overlayCtx.drawImage(this.starterAtlas, 0, 0, constants_1.c.GAME_WIDTH, constants_1.c.GAME_HEIGHT, 0, 0, constants_1.c.GAME_WIDTH, constants_1.c.GAME_HEIGHT);
        // Draw professors bag
        this.overlayCtx.drawImage(this.starterAtlas, 0, 160, 110, 64, 65, 8, 110, 64);
        // Draw the dialogue box
        this.overlayCtx.drawImage(this.starterAtlas, 0, 244, 206, 46, 17, 113, 206, 46);
        // Draw first, most left pokeball
        this.overlayCtx.drawImage(this.starterAtlas, pokeballSource0, 160, 23, 20, 50, 54, 23, 20);
        // Draw second, middle pokeball
        this.overlayCtx.drawImage(this.starterAtlas, pokeballSource1, 160, 23, 20, 110, 78, 23, 20);
        // Draw third, most right pokeball
        this.overlayCtx.drawImage(this.starterAtlas, pokeballSource2, 160, 23, 20, 170, 54, 23, 20);
        // Draw the selector hand
        this.overlayCtx.drawImage(this.starterAtlas, 202, 160, 25, 27, handX, handY, 25, 27);
        if (this.gameStatus === 'chooseStarter') {
            if (this.selectedStarter === 0) {
                // Draw the background for the pokemon text
                this.overlayCtx.globalAlpha = 0.4;
                this.overlayCtx.beginPath();
                this.overlayCtx.rect(0, 72, 108, 32);
                this.overlayCtx.fill();
                this.overlayCtx.globalAlpha = 1;
                // Draw the upper part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 0, 224, 86, 10, 6, 76, 86, 10);
                // Draw the lower part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 0, 234, 42, 10, 31, 92, 42, 10);
            }
            else if (this.selectedStarter === 1) {
                // Draw the background for the pokemon text
                this.overlayCtx.globalAlpha = 0.4;
                this.overlayCtx.beginPath();
                this.overlayCtx.rect(132, 80, 104, 32);
                this.overlayCtx.fill();
                this.overlayCtx.globalAlpha = 1;
                // Draw the upper part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 86, 224, 62, 10, 140, 82, 62, 10);
                // Draw the lower part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 86, 234, 42, 10, 186, 98, 42, 10);
            }
            else {
                // Draw the background for the pokemon text
                this.overlayCtx.globalAlpha = 0.4;
                this.overlayCtx.beginPath();
                this.overlayCtx.rect(60, 32, 112, 32);
                this.overlayCtx.fill();
                this.overlayCtx.globalAlpha = 1;
                // Draw the upper part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 148, 224, 75, 10, 78, 36, 75, 10);
                // Draw the lower part of the pokemon text
                this.overlayCtx.drawImage(this.starterAtlas, 148, 234, 42, 10, 98, 52, 42, 10);
            }
            // Draw the dialogue text to the box
            (0, helper_1.drawText)(this.overlayCtx, this.font, 'PROF. BIRCH is in trouble!', 0, 0, 24, 121);
            (0, helper_1.drawText)(this.overlayCtx, this.font, 'Release a POKéMON and rescue him!', 0, 0, 24, 137);
            // if key is pressed and not yet down, increment selectedStarter accordingly
            if (!this.keyDown) {
                if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.LEFT) && this.selectedStarter !== 0) {
                    this.selectedStarter--;
                    this.keyDown = true;
                }
                else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.RIGHT) && this.selectedStarter !== 2) {
                    this.selectedStarter++;
                    this.keyDown = true;
                }
                else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.ENTER)) {
                    // Enter next gameStatus to confirm starter choice
                    this.gameStatus = 'confirmStarter';
                    this.keyDown = true;
                }
            }
            // Reset the selectedConfirm to the default of true
            this.selectedConfirm = true;
        }
        else if (this.gameStatus === 'confirmStarter') {
            // Draw conformation question to the dialogue box
            (0, helper_1.drawText)(this.overlayCtx, this.font, 'Do you choose this POKéMON?', 0, 0, 24, 121);
            // The x and y pixel for the center of the pokemon preview circle
            const xPixel = 120;
            const yPixel = 65;
            // Get the assets for the currently selected starter
            const pokemonId = (this.selectedStarter === 0) ? 252 : (this.selectedStarter === 1) ? 255 : 258;
            const generation = 2;
            const pokemonSprite = this.loader.loadImageToCanvas('pokemonGeneration' + (generation + 1), constants_1.c.ASSETS_POKEMON_HEIGHT[generation], constants_1.c.ASSETS_POKEMON_WIDTH);
            const xSource = (pokemonId - constants_1.c.ASSETS_GENERATION_OFFSET[generation] - 1) % 3 * constants_1.c.POKEMON_SPRITE_WIDTH;
            const ySource = (((pokemonId - constants_1.c.ASSETS_GENERATION_OFFSET[generation] - 1) / 3) << 0) * constants_1.c.POKEMON_SIZE;
            // Draw the pokemon preview circle
            this.overlayCtx.fillStyle = '#ffffff';
            this.overlayCtx.beginPath();
            this.overlayCtx.arc(xPixel, yPixel, 40, 0, 2 * Math.PI);
            this.overlayCtx.fill();
            this.overlayCtx.fillStyle = '#000000';
            // Draw the pokemon preview to the center of the circle
            this.overlayCtx.drawImage(pokemonSprite, xSource, ySource, constants_1.c.POKEMON_SIZE, constants_1.c.POKEMON_SIZE, (xPixel - constants_1.c.POKEMON_SIZE / 2) << 0, (yPixel - constants_1.c.POKEMON_SIZE / 2) << 0, constants_1.c.POKEMON_SIZE, constants_1.c.POKEMON_SIZE);
            // Draw the yes/no conformation box
            this.overlayCtx.drawImage(this.starterAtlas, 206, 244, 54, 46, 170, 58, 54, 46);
            // The offset for the selection box
            const yOffset = (!this.selectedConfirm) ? 16 : 0;
            // Draw the selector rectangle
            this.overlayCtx.beginPath();
            this.overlayCtx.moveTo(177, 64.5 + yOffset);
            this.overlayCtx.lineTo(216, 64.5 + yOffset);
            this.overlayCtx.moveTo(216.5, 65 + yOffset);
            this.overlayCtx.lineTo(216.5, 78 + yOffset);
            this.overlayCtx.moveTo(216, 78.5 + yOffset);
            this.overlayCtx.lineTo(177, 78.5 + yOffset);
            this.overlayCtx.moveTo(176.5, 78 + yOffset);
            this.overlayCtx.lineTo(176.5, 65 + yOffset);
            this.overlayCtx.lineWidth = 1;
            this.overlayCtx.globalAlpha = 1;
            this.overlayCtx.strokeStyle = '#f86058';
            this.overlayCtx.stroke();
            // if key is pressed and not yet down, change selectedConfirm accordingly
            if (!this.keyDown) {
                if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.DOWN) && this.selectedConfirm !== false) {
                    this.selectedConfirm = false;
                    this.keyDown = true;
                }
                else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.UP) && this.selectedConfirm !== true) {
                    this.selectedConfirm = true;
                    this.keyDown = true;
                }
                else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.ENTER)) {
                    // Continue back to game or return to starter selection screen accordingly
                    if (!this.selectedConfirm) {
                        this.gameStatus = 'chooseStarter';
                    }
                    else {
                        // Add the chosen starter to the players inventory (level = 5)
                        this.player.addPokemon(pokemonId, [5, -1]);
                        this.gameStatus = 'game';
                        this.gameTriggers.chooseStarter = true;
                    }
                    this.keyDown = true;
                }
            }
        }
        // Reset keyDown variable if not down anymore
        if (!keyboard_1.keyboard.isDown(keyboard_1.keyboard.LEFT) && !keyboard_1.keyboard.isDown(keyboard_1.keyboard.RIGHT) &&
            !keyboard_1.keyboard.isDown(keyboard_1.keyboard.UP) && !keyboard_1.keyboard.isDown(keyboard_1.keyboard.DOWN) &&
            !keyboard_1.keyboard.isDown(keyboard_1.keyboard.ENTER)) {
            this.keyDown = false;
        }
    }
    loadAdjacentMaps(fromDirection = false) {
        // get list of adjacent map objects
        const Adjacent = this.map.getAdjacent(this.currentMap);
        // Construct list of added map strings
        const addedAreas = Adjacent.map(a => a.position);
        // Initiate variable for return object
        let updatedData;
        // Foreach adjacent map add map to loaded map
        for (const adjacentMap of Object.values(Adjacent)) {
            updatedData = this.map.addMap(adjacentMap.name, adjacentMap.position, 0);
        }
        if (updatedData) {
            // Update camera maxX and maxY variables to the updated map
            this.camera.updateMap(updatedData.currentMap);
            // Initiate variable for the tiles added above and to the left of the currentMap
            const addedTiles = [0, 0];
            // THIS SHOULD MAYBE BE UPDATED!!
            if (addedAreas.includes('top') && addedAreas.includes('bottom') && fromDirection === 'top') {
                addedTiles[1] = updatedData.diff[1];
            }
            else if (addedAreas.includes('top') && !addedAreas.includes('bottom') && fromDirection === 'bottom') {
                addedTiles[1] = updatedData.diff[1];
            }
            if (addedAreas.includes('left') && addedAreas.includes('bottom') && fromDirection === 'top') {
                addedTiles[0] = updatedData.diff[0];
            }
            else if (addedAreas.includes('bottom') && addedAreas.includes('top') && fromDirection === 'bottom') {
                addedTiles[0] = updatedData.diff[0];
            }
            // /////////////////////////// //
            return addedTiles;
        }
    }
    update(delta) {
        this.dirx = 0;
        this.diry = 0;
        // Get the new moving direction from pressed keys
        if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.LEFT)) {
            this.dirx = -1;
        }
        else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.RIGHT)) {
            this.dirx = 1;
        }
        else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.UP)) {
            this.diry = -1;
        }
        else if (keyboard_1.keyboard.isDown(keyboard_1.keyboard.DOWN)) {
            this.diry = 1;
        }
        // Check if the player entered a new map
        const isNextMap = this.map.isNextMap(this.avatar.x, this.avatar.y);
        // If new map is entered, update accordingly
        if (typeof isNextMap !== 'boolean') {
            console.log('Entered new area: ' + this.currentMap);
            // Set the new entered map to currentMap
            this.currentMap = isNextMap[0];
            // Update the map object to the currentMap's properties
            this.map.updateMap(this.currentMap);
            // Load the adjacent maps and retrieve the tiles added above and to the left of the currentMap
            const addedTiles = this.loadAdjacentMaps(isNextMap[1]);
            if (addedTiles) {
                // Correct the avatars coordinates for the added adjacent maps
                this.avatar.newAreaMapUpdate(this.map, addedTiles);
            }
            if (this.currentMap === 'route 101' && this.gameTriggers.chooseStarter === false) {
                this.gameStatus = 'chooseStarter';
                // await this.chooseStarter();
            }
        }
        // Move the avatar accordingly
        this.avatar.move(delta, this.dirx, this.diry);
        // Update the camera position according to the new avatar position
        this.camera.update();
    }
    render(delta) {
        // Draw bottom, background layer of the game
        this.drawLayer(0);
        // Draw the full avatar spite
        this.drawPlayer(delta, false);
        // Draw middle layer of the game
        this.drawLayer(1);
        // Draw only the bottom of the avatar sprite
        this.drawPlayer(delta, true);
        // Draw top layer of the game
        this.drawLayer(2);
    }
    drawLayer(layer) {
        // get the render boundaries from the camera position
        const startCol = Math.floor(this.camera.x / constants_1.c.MAP_TSIZE);
        const endCol = startCol + (this.camera.width / constants_1.c.MAP_TSIZE);
        const startRow = Math.floor(this.camera.y / constants_1.c.MAP_TSIZE);
        const endRow = startRow + (this.camera.height / constants_1.c.MAP_TSIZE);
        const offsetX = -this.camera.x + startCol * constants_1.c.MAP_TSIZE;
        const offsetY = -this.camera.y + startRow * constants_1.c.MAP_TSIZE;
        // Loop through columns and rows
        for (let col = startCol; col <= endCol; col++) {
            for (let row = startRow; row <= endRow; row++) {
                // Get the tile identity number to draw
                let tile = this.map.getTile(layer, col, row);
                if (tile === -1)
                    break;
                // Get the x and y coordinates of the tile location
                const x = (col - startCol) * constants_1.c.MAP_TSIZE + offsetX;
                const y = (row - startRow) * constants_1.c.MAP_TSIZE + offsetY;
                let atlas;
                // Tile numbers 0-499 for general tiles and tiles 500-> for building tiles
                // Select atlas appropriately
                if (500 <= tile) {
                    atlas = this.buildingAtlas;
                    tile = tile - 500;
                }
                else {
                    atlas = this.tileAtlas;
                }
                // Draw tile to screen
                if (tile !== 0 && atlas) {
                    this.gameCtx.drawImage(atlas, (tile - 1) % 16 * constants_1.c.MAP_TSIZE, Math.floor((tile - 1) / 16) * constants_1.c.MAP_TSIZE, constants_1.c.MAP_TSIZE, constants_1.c.MAP_TSIZE, Math.round(x), Math.round(y), constants_1.c.MAP_TSIZE, constants_1.c.MAP_TSIZE);
                }
            }
        }
    }
    drawPlayer(delta, onlyDrawTop) {
        if (!onlyDrawTop) {
            // Set player direction and increment animation counter
            this.direction = this.diry === 1 ? 0 : this.dirx === -1 ? 1 : this.diry === -1 ? 2 : this.dirx === 1 ? 3 : this.direction;
            if (this.diry === 0 && this.dirx === 0) {
                this.animation = 0;
            }
            else {
                this.animation = this.animation < 3.95 ? this.animation + 6 * delta : 0;
            }
        }
        // Set the height of sprite to be drawn
        const height = onlyDrawTop ? 0.75 * constants_1.c.AVATAR_HEIGHT : constants_1.c.AVATAR_HEIGHT;
        // Set the x pixel of the source from the direction and animation
        const xSource = this.direction * constants_1.c.AVATAR_WIDTH * 4 + (this.animation << 0) * constants_1.c.AVATAR_WIDTH;
        if (this.avatar.avatarAsset) {
            // Drawn the avatar sprite
            this.gameCtx.drawImage(this.avatar.avatarAsset, xSource, 0, constants_1.c.AVATAR_WIDTH, height, (0.5 + this.avatar.screenX - constants_1.c.AVATAR_WIDTH / 2) << 0, (0.5 + this.avatar.screenY - constants_1.c.AVATAR_HEIGHT / 2 + (((1 < this.animation && this.animation < 2) || (3 < this.animation && this.animation < 4)) ? 1 : 0)) << 0, constants_1.c.AVATAR_WIDTH, height);
        }
    }
}
exports.Game = Game;
Game.GAME_WIDTH = constants_1.c.GAME_WIDTH;
Game.GAME_HEIGHT = constants_1.c.GAME_HEIGHT;
//# sourceMappingURL=game.js.map