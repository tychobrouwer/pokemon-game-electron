import { MapsType, SizeTableType } from '../utils/types';

const GAME_HEIGHT = 160;
const GAME_WIDTH = 240;
const MAP_TSIZE = 16;
const CAMERA_HEIGHT = 10 * MAP_TSIZE;
const CAMERA_WIDTH = 15 * MAP_TSIZE;

const CHAR_IN_FONT = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  ',',
  'é',
  '|', // caret
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '\'',
  '`', // high dot
  '!',
  '?',
  '-',
  '^', // female
  '#', // male
  '/',
  ':', // double lower dot
  '“',
  '”',
  '‘',
  '’',
  '_', // full letter space
]

const ASSETS_TILES_HEIGHT = 256;
const ASSETS_TILES_WIDTH = 256;

const ASSETS_AVATAR_HEIGHT = 192;
const ASSETS_AVATAR_WIDTH = 384;

const ASSETS_BATTLE_HEIGHT = 720;
const ASSETS_BATTLE_WIDTH = 720;

const ASSETS_POKEMON_HEIGHT = [ 3264, 2760, 2944 ]
const ASSETS_POKEMON_WIDTH = 1728;
const ASSETS_GENERATION_OFFSET = [ 0, 151, 251 ];

const ASSETS_STARTER_HEIGHT = 290;
const ASSETS_STARTER_WIDTH = 260;

const ASSETS_HEALTH_OFFSET = 512;
const ASSETS_ENEMY_HEALTH_HEIGHT = 28;
const ASSETS_ENEMY_HEALTH_WIDTH = 100;

const ASSETS_PLAYER_HEALTH_HEIGHT = 36;
const ASSETS_PLAYER_HEALTH_WIDTH = 103;

const ASSETS_FONT_HEIGHT = 104;
const ASSETS_FONT_WIDTH = 241;

const ASSETS_BUILDING_TILES_HEIGHT = 112;
const ASSETS_BUILDING_TILES_WIDTH = 192;

const AVATAR_HEIGHT = 20;
const AVATAR_WIDTH = 14;
const AVATAR_SPEED_WALK = MAP_TSIZE * 4;
const AVATAR_BATTLE_HEIGHT = 48;
const AVATAR_BATTLE_WIDTH = 76;
const AVATAR_BATTLE_OFFSET = 288;

const BATTLE_ARENA_HEIGHT = 112;

const BATTLE_SCENE_HEIGHT = 32;
const BATTLE_SCENE_WIDTH = 128;

const POKEBALL_SIZE = 16;
const POKEBALL_OFFSET_X = 4 * BATTLE_SCENE_WIDTH;
const POKEBALL_OFFSET_Y = 3 * BATTLE_ARENA_HEIGHT;

const ACTION_BOX_HEIGHT = 48;
const ACTION_BOX_WIDTH = 104;

const FONT_HEIGHT = [ 14, 8];
const FONT_WIDTH = [ 6, 5 ];

const POKEMON_SIZE = 64;
const POKEMON_SPRITE_WIDTH = 288;
const POKEMON_ALTERNATIVE_OFFSET = 3 * POKEMON_SPRITE_WIDTH;

const GRASS_ENCOUNTER_NUMBER = 320;
const CAVES_ENCOUNTER_NUMBER = 160;
const WATER_ENCOUNTER_NUMBER = 320;
const SEAWEED_ENCOUNTER_NUMBER = 320;

const MAPS: MapsType = {
  "littleroot town": {
    COLS: 20,
    ROWS: 20,

    layers: [[
      12, 13, 12, 13, 12, 13, 12, 13, 12, 13,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11, 10, 11,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13,
      10, 11,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 28, 
      28,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 28,  1, 
       1, 28,  1,  1,  1, 44,  1,  1,  1,  1,  1,  1,  1,  1, 44,  1,  1,  1,  1, 28,
      28,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 28,  1, 28,  1, 
       1,  1,  1, 28,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13,
       1,  1,  1, 28, 28, 28,  1, 44,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11,
      12, 13,  1, 28, 28, 28,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13, 
      10, 11,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,549,550,551,552,553,  0,  0,  0,  0,  0,  0,581,582,583,584,585,  0, 29, 
      29,  0,565,566,567,568,569, 30,  0,  0,  0,  0, 30,597,598,599,600,601, 29,  0, 
       0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29, 
      29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29,  0, 29,  0, 
       0,  0,  0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 30,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,554,555,556,557,558,559,560,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0,  0,570,571,572,573,574,575,576,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 
      14, 15,  0, 29, 29, 29, 30,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,  
      31, 32,  0, 29, 29, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32,  0,  0, 
      14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,501,502,503,504,505,  0,  0,  0,  0,  0,  0,501,502,503,504,505,  0,  0, 
       0,  0,517,518,519,520,521,  0,  0,  0,  0,  0,  0,517,518,519,520,521,  0,  0, 
       0,  0,533,534,535,536,537,  0,  0,  0,  0,  0,  0,533,534,535,536,537,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,506,507,508,509,510,511,512,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,522,523,524,525,526,527,528,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,538,539,540,541,542,543,544,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0
    ]],
  },
  "route 101": {
    COLS: 20,
    ROWS: 20,

    layers: [[
      12, 13, 12, 13, 12, 13, 12, 13, 21, 17, 20,  1, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11, 24, 19, 25,  1, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2, 12, 13, 12, 13,
      10, 11,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2, 10, 11, 10, 11, 
       2,  2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2, 12, 13,
       2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2, 10, 11, 
      12, 13,  2,  2,  1,  1,  5,  3,  3,  3,  4, 12, 13,  2,  2,  2,  2,  1,  1,  1, 
      10, 11,  7,  3,  3,  3,  6,  1,  1,  1,  1, 10, 11, 12, 13,  1,  1, 22, 23,  1,
      12, 13,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13, 10, 11,  1, 22, 17, 20,  1, 
      10, 11, 12, 13,  1,  1,  1, 22, 18, 23,  1, 10, 11,  2,  2,  1, 24, 17, 17, 23, 
      12, 13, 10, 11,  1, 22, 18, 17, 17, 20,  1,  2,  2,  2,  2,  2,  1, 24, 17, 20,
      10, 11, 12, 13,  1, 24, 17, 17, 17, 25,  1,  2,  2,  2,  2,  2,  2,  1, 24, 25, 
      12, 13, 10, 11,  1,  1, 24, 19, 25,  1,  1,  2,  2,  2,  2,  2,  2,  1,  1,  1,
      10, 11,  2,  2,  1,  1,  1,  1,  7,  3,  3,  4,  2,  2,  2,  2,  2,  1,  1,  1,
       2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1, 12, 13,  2,  2,  1,  1, 12, 13,
       2,  2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1, 10, 11,  2,  2,  1,  1, 10, 11,
      12, 13,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13, 12, 13, 12, 13, 12, 13, 12, 13,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11, 10, 11,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,
       0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,
       0,  0, 16,  0, 16, 16,  0,  0,  0,  0,  0,  0, 16,  0,  0, 16,  0,  0, 14, 15,
      16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0, 16,  0, 16, 16, 16, 16,  0,  0,
      26, 27, 16, 16, 16,  0,  0,  0,  0,  0,  0, 14, 27, 16, 16, 16, 16, 16,  0,  0,
      31, 32, 16, 16,  0,  0,  0,  0,  0,  0,  0, 31, 32, 26, 27, 16, 16,  0,  0,  0, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 31, 32,  0,  0,  0,  0,  0,
       0,  0, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16,  0,  0,  0,  0,  0, 
       0,  0, 14, 15,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16, 16,  0,  0,  0,  0, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16,  0,  0,  0, 
       0,  0, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0, 26, 27, 16, 16, 16,  0, 14, 15, 
      16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0, 31, 32, 16, 16,  0,  0, 31, 32, 
      26, 27, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0, 14, 15, 26, 27, 14, 15, 14, 15,
       0,  0, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 31, 32,  0,  0,
      14, 15, 26, 27, 26, 15, 14, 15, 14, 15,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15,
       0,  0, 31, 32, 31, 32, 31, 32, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15, 14, 15, 14, 15, 14, 15, 14, 15,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15,
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0
    ]],
  },
  "oldale town": {
    COLS: 20,
    ROWS: 20,

    layers: [[
      12, 13, 12, 13, 12, 13, 12, 13,  1, 22, 23,  1, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11, 22, 17, 20,  1, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13, 12, 13,  1,  1,  1,  1, 21, 17, 17, 23,  1,  1,  1,  1, 12, 13, 12, 13,
      10, 11, 10, 11,  1,  1,  1,  1, 21, 17, 17, 20,  1,  1,  1,  1, 10, 11, 10, 11, 
      12, 13,  1,  1,  1,  1,  1,  1, 21, 17, 17, 20,  1,  1,  1,  1,  1,  1, 12, 13,
      10, 11,  1, 28,  1,  1,  1,  1, 21, 17, 17, 17, 23,  1,  1,  1,  1,  1, 10, 11, 
      12, 13, 28,  1,  1,  1,  1,  1, 21, 17, 17, 17, 20,  1,  1,  1,  1,  1, 12, 13, 
      10, 11,  1, 28,  1,  1,  1,  1, 21, 19, 19, 19, 17, 18, 18, 18, 18, 23, 10, 11,
      12, 13, 28,  1,  1, 22, 18, 18, 20,  1,  1, 28, 21, 17, 17, 17, 17, 17, 23,  1, 
      10, 11,  1, 22, 18, 17, 17, 17, 20, 28,  1,  1, 21, 17, 17, 17, 17, 17, 25,  1, 
       1,  1, 22, 17, 17, 17, 17, 17, 20,  1, 28,  1, 21, 17, 17, 17, 17, 25,  1,  1,
       1,  1, 24, 19, 19, 17, 17, 17, 17, 18, 18, 18, 17, 17, 17, 19, 25,  1,  1,  1, 
      12, 13,  1,  1,  1, 24, 19, 17, 17, 17, 17, 17, 17, 17, 20,  1,  1,  1, 12, 13,
      10, 11,  1,  1,  1,  1,  1, 21, 17, 17, 17, 17, 17, 19, 25,  1,  1,  1, 10, 11,
      12, 13,  1,  1,  1,  1,  1, 24, 19, 17, 17, 17, 20,  1,  1,  1,  1,  1, 12, 13,
      10, 11,  1,  1,  1,  1,  1,  1,  1, 21, 17, 17, 20,  1,  1,  1,  1,  1, 10, 11,
      12, 13, 12, 13,  1,  1,  1,  1,  1, 21, 17, 17, 25,  1,  1,  1,  1,  1, 12, 13,
      10, 11, 10, 11,  1,  1,  1, 22, 18, 17, 17, 20,  1,  1,  1,  1,  1,  1, 10, 11,
      12, 13, 12, 13,  1,  1,  1, 21, 17, 17, 17, 20,  1,  1,  1,  1, 12, 13, 12, 13,
      10, 11, 10, 11,  1,  1,  1, 24, 17, 17, 17, 25,  1,  1,  1,  1, 10, 11, 10, 11
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15,  0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15,  0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0, 29,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 30,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
      31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 
      14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,  
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32,  0,  0, 
      14, 15, 14, 15, 14, 15, 14, 15,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0
    ]],
  },
  "route 102": {
    COLS: 50,
    ROWS: 20,

    layers: [[
      12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13, 12, 13, 12, 13, 12, 13,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13,  2,  2,  2,  2, 37, 38, 38, 39, 12, 13, 12, 13, 12, 13,
      10, 11, 10, 11, 10, 11, 10, 11,  2,  2,  2,  1,  1,  1, 22, 18, 18, 23,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11,  2,  2,  2,  2, 41, 36, 36, 40, 10, 11, 10, 11, 10, 11,
      12, 13,  2,  2,  2,  2,  2,  2,  2,  2,  2,  1, 22, 18, 17, 17, 17, 17, 18, 23,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 28, 34,  1,  2,  2,  2,  2, 41, 36, 36, 42, 38, 39, 12, 13, 12, 13,
      10, 11,  2,  2,  2,  2,  2,  2,  2,  2,  1, 22, 17, 17, 19, 19, 19, 19, 19, 25,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 28,  1, 33,  1,  1,  2,  2,  2, 41, 36, 36, 36, 36, 40, 10, 11, 10, 11,
       1,  1,  1,  2,  2,  2,  2,  2,  2,  2,  1, 21, 17, 25, 12, 13,  7,  4,  1,  1,  7,  3,  3,  3,  3,  4,  1,  1,  1,  1, 12, 13,  1, 28, 33,  1,  1,  1,  2,  2, 41, 36, 36, 36, 36, 40, 12, 13, 12, 13,
       1,  1,  1,  1,  2,  2,  2,  2,  1,  1,  1, 24, 25,  1, 10, 11,  1,  1,  1,  1,  2,  2,  2,  2,  2,  1, 12, 13, 12, 13, 10, 11,  1,  1, 33,  1,  1,  1,  1,  1, 43, 43, 43, 43, 43, 43, 10, 11, 10, 11,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13,  1,  1,  2,  2,  2,  2,  2,  2,  2,  1, 10, 11, 10, 11, 12, 13, 12, 13, 35,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11,  1,  2,  2,  2,  2,  2,  2,  2,  1,  1, 12, 13, 12, 13, 10, 11, 10, 11,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11,
      12, 13, 12, 13, 12, 13, 12, 13,  1,  1,  1,  1, 12, 13, 12, 13,  2,  2,  2,  2,  2,  2,  1,  1,  1,  1, 10, 11, 10, 11, 12, 13, 12, 13, 12, 13,  1,  1,  1,  1,  1, 22, 18, 18, 23,  1,  1,  1,  1,  1,
      10, 11, 10, 11, 10, 11, 10, 11,  1,  1, 12, 13, 10, 11, 10, 11,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13, 10, 11, 10, 11, 10, 11,  1,  1, 22, 18, 18, 17, 17, 17, 20,  1,  1,  1,  1,  1,
      12, 13, 12, 13, 12, 13,  2,  2,  1,  1, 10, 11, 12, 13, 12, 13,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11,  2,  2, 12, 13, 12, 13, 22, 18, 17, 17, 17, 17, 17, 19, 25,  1,  1,  1, 12, 13,
      10, 11, 10, 11, 10, 11,  2,  2,  7,  3,  3,  4, 10, 11, 10, 11,  2,  2,  1,  1,  1, 12, 13,  1,  1,  1,  1,  1,  2,  2,  2,  2, 10, 11, 10, 11, 21, 17, 17, 17, 17, 19, 25,  1,  1,  1,  1,  1, 10, 11,
      12, 13, 12, 13, 12, 13,  2,  2,  2,  1,  1,  1, 12, 13, 12, 13, 12, 13,  1,  1,  1, 10, 11, 12, 13,  1,  1,  1,  2,  2,  2,  2,  2,  1,  1, 22, 17, 17, 19, 19, 25,  1,  1,  1, 12, 13, 12, 13, 12, 13, 
      10, 11, 10, 11, 10, 11,  2,  2,  2,  1,  1,  1, 10, 11, 10, 11, 10, 11,  1,  1,  2,  2,  2, 10, 11,  1,  1,  1,  1,  2,  2,  2,  1,  1,  1, 24, 19, 25,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11, 10, 11,
      12, 13, 12, 13, 12, 13,  2,  2,  2,  2, 12, 13, 12, 13, 12, 13, 12, 13,  1,  2,  2,  2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 
      10, 11, 10, 11, 10, 11,  2,  2,  2,  2, 10, 11, 10, 11, 10, 11, 10, 11,  1,  2,  2,  2,  2,  2,  2,  2,  2,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11,
      12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13,  2,  2,  2,  2,  1,  1,  1,  1, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 
      10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11,  2,  2,  2,  2,  1,  1,  1,  1, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15, 14, 15, 14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 
       0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0, 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15,  0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 
       0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 29,  0,  0, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 29,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 
       0,  0,  0, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 31, 32,  0, 29,  0,  0,  0,  0, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0, 16, 16, 16, 16,  0,  0,  0,  0, 14, 15, 14, 15,  0,  0,  0,  0, 16, 16, 16, 16, 16,  0, 31, 32, 31, 32, 14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16,  0, 14, 15, 14, 15,  0,  0, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15, 14, 15, 14, 15, 14, 15,  0,  0,  0,  0, 14, 15, 14, 15,  0, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,  0,  0,  0,  0,  0,  0, 30,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      31, 32, 31, 32, 31, 32, 31, 32,  0,  0, 14, 15,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0, 14, 15, 14, 15,  0,  0,  0,  0, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      14, 15, 14, 15, 14, 15,  0,  0,  0,  0, 31, 32, 14, 15, 14, 15, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15,
       0,  0,  0,  0,  0,  0, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0, 14, 15,  0,  0,  0,  0,  0,  0,  0, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32,
      14, 15, 14, 15, 14, 15, 16, 16,  0,  0,  0,  0, 14, 15, 14, 15, 26, 27,  0,  0,  0, 31, 32, 14, 15,  0,  0,  0, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 
       0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0, 31, 32,  0,  0,  0,  0,  0, 31, 32,  0,  0,  0, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 31, 32,  0,  0, 
      14, 15, 14, 15, 14, 15, 16, 16, 16,  0, 14, 15, 14, 15, 14, 15,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 
       0,  0,  0,  0,  0,  0, 16, 16, 16, 16, 31, 32,  0,  0,  0,  0,  0,  0,  0, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 31, 32,  0,  0,  0,  0,  0,  0, 
      14, 15, 14, 15, 14, 15, 26, 27, 26, 27, 14, 15, 14, 15, 14, 15, 14, 15, 14, 27, 26, 27, 26, 27, 16, 16, 16,  0,  0,  0,  0,  0, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 
       0,  0,  0,  0,  0,  0, 31, 32, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0, 31, 32, 31, 32, 31, 32, 16, 16, 16, 16,  0,  0,  0,  0, 31, 32, 31, 32, 31, 32, 31, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 
      14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15
    ], [
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
       0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0
    ]],
  }
}

const SIZE_TABLE: SizeTableType = {
  9: {
    x: 290,
    y: 1,
    z: 0,
  },
  109: {
    x: 300,
    y: 1,
    z: 10,
  },
  309: {
    x: 400,
    y: 2,
    z: 110,
  },
  709: {
    x: 500,
    y: 4,
    z: 310,
  },
  2709: {
    x: 600,
    y: 20,
    z: 710,
  },
  7709: {
    x: 700,
    y: 50,
    z: 2710,
  },
  17709: {
    x: 800,
    y: 100,
    z: 7710,
  },
  32709: {
    x: 900,
    y: 150,
    z: 17710,
  },
  47709: {
    x: 1000,
    y: 150,
    z: 32710,
  },
  57709: {
    x: 1100,
    y: 100,
    z: 47710,
  },
  62709: {
    x: 1200,
    y: 50,
    z: 57710,
  },
  64709: {
    x: 1300,
    y: 20,
    z: 62710,
  },
  65209: {
    x: 1400,
    y: 5,
    z: 64710,
  },
  65409: {
    x: 1500,
    y: 2,
    z: 65210,
  },
  65535: {
    x: 1700,
    y: 1,
    z: 65410,
  },
}

const POKEMON_PERSONALITIES = {
  increase: {
    attack: [ 1, 2, 3, 4 ],
    defense: [ 5, 7, 8, 9 ],
    specialAttack: [ 15, 16, 17, 19 ],
    specialDefense: [ 20, 21, 22, 23 ],
    speed: [ 10, 11, 13, 14 ],
  },
  decrease: {
    attack: [ 5, 10, 15, 20 ],
    defense: [ 1, 11, 16, 21 ],
    specialAttack: [ 3, 8, 13, 23 ],
    specialDefense: [ 4, 9, 14, 19 ],
    speed: [ 2, 7, 17, 22 ],
  },
}

const TYPES = [
  'normal', 'fight', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 
  'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy',
];

const TYPES_EFFECTIVENESS = [
  1,   1,   1,   1,   1, 0.5,   1,   0, 0.5,   1,   1,   1,   1,   1,   1,   1,   1,   1,
  2,   1, 0.5, 0.5,   1,   2, 0.5,   0,   2,   1,   1,   1,   1, 0.5,   2,   1,   2, 0.5,
  1,   2,   1,   1,   1, 0.5,   2,   1, 0.5,   1,   1,   2, 0.5,   1,   1,   1,   1,   1,
  1,   1,   1, 0.5, 0.5, 0.5,   1, 0.5,   0,   1,   1,   2,   1,   1,   1,   1,   1,   2,
  1,   1,   0,   2,   1,   2, 0.5,   1,   2,   2,   1, 0.5,   2,   1,   1,   1,   1,   1,
  1, 0.5,   2,   1, 0.5,   1,   3,   1, 0.5,   2,   1,   1,   1,   1,   2,   1,   1,   1,
  1, 0.5, 0.5, 0.5,   1,   1,   1, 0.5, 0.5, 0.5,   1,   2,   1,   2,   1,   1,   2, 0.5,
  0,   1,   1,   1,   1,   1,   1,   2,   1,   1,   1,   1,   1,   2,   1,   1, 0.5,   1,
  1,   1,   1,   1,   1,   2,   1,   1, 0.5, 0.5, 0.5,   1, 0.5,   1,   2,   1,   1,   2,
  1,   1,   1,   1,   1, 0.5,   2,   1,   2, 0.5, 0.5,   2,   1,   1,   2, 0.5,   1,   1,
  1,   1,   1,   1,   2,   2,   1,   1,   1,   2, 0.5, 0.5,   1,   1,   1, 0.5,   1,   1,
  1,   1, 0.5, 0.5,   2,   2, 0.5,   1, 0.5, 0.5,   2, 0.5,   1,   1,   1, 0.5,   1,   1,
  1,   1,   2,   1,   0,   1,   1,   1,   1,   1,   2, 0.5, 0.5,   1,   1, 0.5,   1,   1,
  1,   2,   1,   2,   1,   1,   1,   1, 0.5,   1,   1,   1,   1, 0.5,   1,   1,   0,   1,
  1,   1,   2,   1,   2,   1,   1,   1, 0.5, 0.5, 0.5,   2,   1,   1, 0.5,   2,   1,   1,
  1,   1,   1,   1,   1,   1,   1,   1, 0.5,   1,   1,   1,   1,   1,   1,   2,   1,   2,
  1, 0.5,   1,   1,   1,   1,   1,   2,   1,   1,   1,   1,   1,   2,   1,   1, 0.5, 0.5,
  1,   2,   1, 0.5,   1,   1,   1,   1, 0.5, 0.5,   1,   1,   1,   1,   1,   2,   2,   1,
];


export const c = {
  GAME_HEIGHT,
  GAME_WIDTH,
  MAP_TSIZE,
  CAMERA_HEIGHT,
  CAMERA_WIDTH,

  CHAR_IN_FONT,

  ASSETS_TILES_HEIGHT,
  ASSETS_TILES_WIDTH,

  ASSETS_AVATAR_HEIGHT,
  ASSETS_AVATAR_WIDTH,

  ASSETS_BATTLE_HEIGHT,
  ASSETS_BATTLE_WIDTH,

  ASSETS_POKEMON_HEIGHT,
  ASSETS_POKEMON_WIDTH,
  ASSETS_GENERATION_OFFSET,

  ASSETS_STARTER_HEIGHT,
  ASSETS_STARTER_WIDTH,

  ASSETS_HEALTH_OFFSET,
  ASSETS_ENEMY_HEALTH_HEIGHT,
  ASSETS_ENEMY_HEALTH_WIDTH,

  ASSETS_PLAYER_HEALTH_HEIGHT,
  ASSETS_PLAYER_HEALTH_WIDTH,

  ASSETS_FONT_HEIGHT,
  ASSETS_FONT_WIDTH,

  ASSETS_BUILDING_TILES_HEIGHT,
  ASSETS_BUILDING_TILES_WIDTH,

  AVATAR_SPEED_WALK,
  AVATAR_HEIGHT,
  AVATAR_WIDTH,
  AVATAR_BATTLE_HEIGHT,
  AVATAR_BATTLE_WIDTH,
  AVATAR_BATTLE_OFFSET,

  POKEBALL_SIZE,
  POKEBALL_OFFSET_X,
  POKEBALL_OFFSET_Y,

  BATTLE_ARENA_HEIGHT,

  BATTLE_SCENE_HEIGHT,
  BATTLE_SCENE_WIDTH,

  ACTION_BOX_HEIGHT,
  ACTION_BOX_WIDTH,

  FONT_HEIGHT,
  FONT_WIDTH,

  POKEMON_SIZE,
  POKEMON_SPRITE_WIDTH,
  POKEMON_ALTERNATIVE_OFFSET,

  GRASS_ENCOUNTER_NUMBER,
  CAVES_ENCOUNTER_NUMBER,
  WATER_ENCOUNTER_NUMBER,
  SEAWEED_ENCOUNTER_NUMBER,

  MAPS,

  SIZE_TABLE,
  POKEMON_PERSONALITIES,
  TYPES,
  TYPES_EFFECTIVENESS,
}