export const SIZE_TABLE = {
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
};
export const POKEMON_PERSONALITIES = {
    increase: {
        attack: [1, 2, 3, 4],
        defense: [5, 7, 8, 9],
        specialAttack: [15, 16, 17, 19],
        specialDefense: [20, 21, 22, 23],
        speed: [10, 11, 13, 14],
    },
    decrease: {
        attack: [5, 10, 15, 20],
        defense: [1, 11, 16, 21],
        specialAttack: [3, 8, 13, 23],
        specialDefense: [4, 9, 14, 19],
        speed: [2, 7, 17, 22],
    },
};
export const TYPES = [
    'normal', 'fight', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel',
    'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy',
];
export const TYPES_EFFECTIVENESS = [
    1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5,
    1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1,
    1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2,
    1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1,
    1, 0.5, 2, 1, 0.5, 1, 3, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1,
    1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5,
    0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1,
    1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2,
    1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1,
    1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1,
    1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1,
    1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1,
    1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1,
    1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 2,
    1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5,
    1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1,
];
export const LEVELS = {
    'erratic': {
        1: 2.0, 2: 15.7, 3: 52.4, 4: 122.9, 5: 237.5, 6: 406.1, 7: 638.0, 8: 942.1, 9: 1326.8, 10: 1800.0,
        11: 2369.2, 12: 3041.3, 13: 3822.8, 14: 4719.7, 15: 5737.5, 16: 6881.3, 17: 8155.6, 18: 9564.5, 19: 11111.6, 20: 12800.0,
        21: 14632.4, 22: 16610.9, 23: 18737.2, 24: 21012.5, 25: 23437.5, 26: 26012.5, 27: 28737.2, 28: 31610.9, 29: 34632.4, 30: 37800.0,
        31: 41111.6, 32: 44564.5, 33: 48155.6, 34: 51881.3, 35: 55737.5, 36: 59719.7, 37: 63822.8, 38: 68041.3, 39: 72369.2, 40: 76800.0,
        41: 81326.8, 42: 85942.1, 43: 90638.0, 44: 95406.1, 45: 100237.5, 46: 105122.9, 47: 110052.4, 48: 115015.7, 49: 120002.0, 50: 125000.0,
        51: 131324.5, 52: 137795.8, 53: 144410.7, 54: 151165.4, 55: 158056.2, 56: 165079.0, 57: 172229.5, 58: 179503.0, 59: 186894.9, 60: 194400.0,
        61: 202013.1, 62: 209728.6, 63: 217540.9, 64: 225443.8, 65: 233431.2, 66: 241496.6, 67: 249633.3, 68: 257834.2, 69: 267406.3, 70: 276458.0,
        71: 286328.8, 72: 296358.9, 73: 305767.4, 74: 316074.7, 75: 326531.2, 76: 336255.6, 77: 346965.1, 78: 357812.2, 79: 367807.1, 80: 378880.0,
        81: 390077.7, 82: 400293.2, 83: 411686.6, 84: 423190.7, 85: 433572.2, 86: 445239.2, 87: 457001.1, 88: 467489.8, 89: 479378.9, 90: 491346.0,
        91: 501878.3, 92: 513934.1, 93: 526049.5, 94: 536557.3, 95: 548720.0, 96: 560922.6, 97: 571333.3, 98: 583539.0, 99: 591882.4, 100: 600000.0
    }, 'fast': {
        1: 0.8, 2: 6.4, 3: 21.6, 4: 51.2, 5: 100.0, 6: 172.8, 7: 274.4, 8: 409.6, 9: 583.2, 10: 800.0,
        11: 1064.8, 12: 1382.4, 13: 1757.6, 14: 2195.2, 15: 2700.0, 16: 3276.8, 17: 3930.4, 18: 4665.6, 19: 5487.2, 20: 6400.0,
        21: 7408.8, 22: 8518.4, 23: 9733.6, 24: 11059.2, 25: 12500.0, 26: 14060.8, 27: 15746.4, 28: 17561.6, 29: 19511.2, 30: 21600.0,
        31: 23832.8, 32: 26214.4, 33: 28749.6, 34: 31443.2, 35: 34300.0, 36: 37324.8, 37: 40522.4, 38: 43897.6, 39: 47455.2, 40: 51200.0,
        41: 55136.8, 42: 59270.4, 43: 63605.6, 44: 68147.2, 45: 72900.0, 46: 77868.8, 47: 83058.4, 48: 88473.6, 49: 94119.2, 50: 100000.0,
        51: 106120.8, 52: 112486.4, 53: 119101.6, 54: 125971.2, 55: 133100.0, 56: 140492.8, 57: 148154.4, 58: 156089.6, 59: 164303.2, 60: 172800.0,
        61: 181584.8, 62: 190662.4, 63: 200037.6, 64: 209715.2, 65: 219700.0, 66: 229996.8, 67: 240610.4, 68: 251545.6, 69: 262807.2, 70: 274400.0,
        71: 286328.8, 72: 298598.4, 73: 311213.6, 74: 324179.2, 75: 337500.0, 76: 351180.8, 77: 365226.4, 78: 379641.6, 79: 394431.2, 80: 409600.0,
        81: 425152.8, 82: 441094.4, 83: 457429.6, 84: 474163.2, 85: 491300.0, 86: 508844.8, 87: 526802.4, 88: 545177.6, 89: 563975.2, 90: 583200.0,
        91: 602856.8, 92: 622950.4, 93: 643485.6, 94: 664467.2, 95: 685900.0, 96: 707788.8, 97: 730138.4, 98: 752953.6, 99: 776239.2, 100: 800000.0
    }, 'slow': {
        1: 1.2, 2: 10.0, 3: 33.8, 4: 80.0, 5: 156.2, 6: 270.0, 7: 428.8, 8: 640.0, 9: 911.2, 10: 1250.0,
        11: 1663.8, 12: 2160.0, 13: 2746.2, 14: 3430.0, 15: 4218.8, 16: 5120.0, 17: 6141.2, 18: 7290.0, 19: 8573.8, 20: 10000.0,
        21: 11576.2, 22: 13310.0, 23: 15208.8, 24: 17280.0, 25: 19531.2, 26: 21970.0, 27: 24603.8, 28: 27440.0, 29: 30486.2, 30: 33750.0,
        31: 37238.8, 32: 40960.0, 33: 44921.2, 34: 49130.0, 35: 53593.8, 36: 58320.0, 37: 63316.2, 38: 68590.0, 39: 74148.8, 40: 80000.0,
        41: 86151.2, 42: 92610.0, 43: 99383.8, 44: 106480.0, 45: 113906.2, 46: 121670.0, 47: 129778.8, 48: 138240.0, 49: 147061.2, 50: 156250.0,
        51: 165813.8, 52: 175760.0, 53: 186096.2, 54: 196830.0, 55: 207968.8, 56: 219520.0, 57: 231491.2, 58: 243890.0, 59: 256723.8, 60: 270000.0,
        61: 283726.2, 62: 297910.0, 63: 312558.8, 64: 327680.0, 65: 343281.2, 66: 359370.0, 67: 375953.8, 68: 393040.0, 69: 410636.2, 70: 428750.0,
        71: 447388.8, 72: 466560.0, 73: 486271.2, 74: 506530.0, 75: 527343.8, 76: 548720.0, 77: 570666.2, 78: 593190.0, 79: 616298.8, 80: 640000.0,
        81: 664301.2, 82: 689210.0, 83: 714733.8, 84: 740880.0, 85: 767656.2, 86: 795070.0, 87: 823128.8, 88: 851840.0, 89: 881211.2, 90: 911250.0,
        91: 941963.8, 92: 973360.0, 93: 1005446.2, 94: 1038230.0, 95: 1071718.8, 96: 1105920.0, 97: 1140841.2, 98: 1176490.0, 99: 1212873.8, 100: 1250000.0
    }, 'medium-slow': {
        1: 0, 2: 9.6, 3: 57.4, 4: 96.8, 5: 135.0, 6: 179.2, 7: 236.6, 8: 314.4, 9: 419.8, 10: 560.0,
        11: 742.2, 12: 973.6, 13: 1261.4, 14: 1612.8, 15: 2035.0, 16: 2535.2, 17: 3120.6, 18: 3798.4, 19: 4575.8, 20: 5460.0,
        21: 6458.2, 22: 7577.6, 23: 8825.4, 24: 10208.8, 25: 11735.0, 26: 13411.2, 27: 15244.6, 28: 17242.4, 29: 19411.8, 30: 21760.0,
        31: 24294.2, 32: 27021.6, 33: 29949.4, 34: 33084.8, 35: 36435.0, 36: 40007.2, 37: 43808.6, 38: 47846.4, 39: 52127.8, 40: 56660.0,
        41: 61450.2, 42: 66505.6, 43: 71833.4, 44: 77440.8, 45: 83335.0, 46: 89523.2, 47: 96012.6, 48: 102810.4, 49: 109923.8, 50: 117360.0,
        51: 125126.2, 52: 133229.6, 53: 141677.4, 54: 150476.8, 55: 159635.0, 56: 169159.2, 57: 179056.6, 58: 189334.4, 59: 199999.8, 60: 211060.0,
        61: 222522.2, 62: 234393.6, 63: 246681.4, 64: 259392.8, 65: 272535.0, 66: 286115.2, 67: 300140.6, 68: 314618.4, 69: 329555.8, 70: 344960.0,
        71: 360838.2, 72: 377197.6, 73: 394045.4, 74: 411388.8, 75: 429235.0, 76: 447591.2, 77: 466464.6, 78: 485862.4, 79: 505791.8, 80: 526260.0,
        81: 547274.2, 82: 568841.6, 83: 590969.4, 84: 613664.8, 85: 636935.0, 86: 660787.2, 87: 685228.6, 88: 710266.4, 89: 735907.8, 90: 762160.0,
        91: 789030.2, 92: 816525.6, 93: 844653.4, 94: 873420.8, 95: 902835.0, 96: 932903.2, 97: 963632.6, 98: 995030.4, 99: 1027103.8, 100: 1059860.0
    }, 'medium-fast': {
        1: 1, 2: 8, 3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729, 10: 1000,
        11: 1331, 12: 1728, 13: 2197, 14: 2744, 15: 3375, 16: 4096, 17: 4913, 18: 5832, 19: 6859, 20: 8000,
        21: 9261, 22: 10648, 23: 12167, 24: 13824, 25: 15625, 26: 17576, 27: 19683, 28: 21952, 29: 24389, 30: 27000,
        31: 29791, 32: 32768, 33: 35937, 34: 39304, 35: 42875, 36: 46656, 37: 50653, 38: 54872, 39: 59319, 40: 64000,
        41: 68921, 42: 74088, 43: 79507, 44: 85184, 45: 91125, 46: 97336, 47: 103823, 48: 110592, 49: 117649, 50: 125000,
        51: 132651, 52: 140608, 53: 148877, 54: 157464, 55: 166375, 56: 175616, 57: 185193, 58: 195112, 59: 205379, 60: 216000,
        61: 226981, 62: 238328, 63: 250047, 64: 262144, 65: 274625, 66: 287496, 67: 300763, 68: 314432, 69: 328509, 70: 343000,
        71: 357911, 72: 373248, 73: 389017, 74: 405224, 75: 421875, 76: 438976, 77: 456533, 78: 474552, 79: 493039, 80: 512000,
        81: 531441, 82: 551368, 83: 571787, 84: 592704, 85: 614125, 86: 636056, 87: 658503, 88: 681472, 89: 704969, 90: 729000,
        91: 753571, 92: 778688, 93: 804357, 94: 830584, 95: 857375, 96: 884736, 97: 912673, 98: 941192, 99: 970299, 100: 1000000
    }, 'fluctuating': {
        1: 0.5, 2: 4.0, 3: 13.5, 4: 32.0, 5: 65.0, 6: 112.3, 7: 178.4, 8: 276.5, 9: 393.7, 10: 540.0,
        11: 745.4, 12: 967.7, 13: 1230.3, 14: 1591.5, 15: 1957.5, 16: 2457.6, 17: 3046.1, 18: 3732.5, 19: 4526.9, 20: 5440.0,
        21: 6482.7, 22: 7666.6, 23: 9003.6, 24: 10506.2, 25: 12187.5, 26: 14060.8, 27: 16140.1, 28: 18439.7, 29: 20974.5, 30: 23760.0,
        31: 26811.9, 32: 30146.6, 33: 33780.8, 34: 37731.8, 35: 42017.5, 36: 46656.0, 37: 50653.0, 38: 55969.4, 39: 60505.4, 40: 66560.0,
        41: 71677.8, 42: 78533.3, 43: 84277.4, 44: 91998.7, 45: 98415.0, 46: 107069.6, 47: 114205.3, 48: 123863.0, 49: 131766.9, 50: 142500.0,
        51: 151222.1, 52: 163105.3, 53: 172697.3, 54: 185807.5, 55: 196322.5, 56: 210739.2, 57: 222231.6, 58: 238036.6, 59: 250562.4, 60: 267840.0,
        61: 281456.4, 62: 300293.3, 63: 315059.2, 64: 335544.3, 65: 351520.0, 66: 373744.8, 67: 390991.9, 68: 415050.2, 69: 433631.9, 70: 459620.0,
        71: 479600.7, 72: 507617.3, 73: 529063.1, 74: 559209.1, 75: 582187.5, 76: 614566.4, 77: 639146.2, 78: 673863.8, 79: 700115.4, 80: 737280.0,
        81: 765275.0, 82: 804997.3, 83: 834809.0, 84: 877201.9, 85: 908905.0, 86: 954084.0, 87: 987754.5, 88: 1035837.4, 89: 1071552.9, 90: 1122660.0,
        91: 1160499.3, 92: 1214753.3, 93: 1254796.9, 94: 1312322.7, 95: 1354652.5, 96: 1415577.6, 97: 1460276.8, 98: 1524731.0, 99: 1571884.4, 100: 1640000.0
    }
};
//# sourceMappingURL=mon_constants.js.map