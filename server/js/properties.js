
var Types = require("../../shared/js/gametypes");

var Properties = {
    rat: {
        drops: {
            flask: 40,
            burger: 10,
            firepotion: 5
        },
        hp: 120,
        armor: 1,
        weapon: 1
    },

    skeleton: {
        drops: {
            flask: 40,
            mailarmor: 10,
            axe: 20,
            firepotion: 5
        },
        hp: 310,
        armor: 2,
        weapon: 2
    },
    bee: {
        drops: {
            flask: 40
        },
        hp: 400,
        armor: 1,
        weapon: 1
    },

    spider: {
        drops: {
            flask: 50,
            morningstar: 20,
            mailarmor: 10,
            firepotion: 5
        },
        hp: 520,
        armor: 4,
        weapon: 3
    },

    fluffy: {
        drops: {
            flask: 95,
            firepotion: 5
        },
        hp: 450,
        armor: 1,
        weapon: 1
    },
    
    yellowbat: {
      drops: {
           flask: 10,
           axe: 50,
           mailarmor: 40,
           firepotion: 10
      },
      hp: 300,
      armor: 1,
      weapon: 3
    },
    goblin: {
        drops: {
            flask: 50,
            leatherarmor: 20,
            axe: 10,
            firepotion: 5
        },
        hp: 300,
        armor: 2,
        weapon: 1
    },

    ogre: {
        drops: {
            burger: 10,
            flask: 50,
            platearmor: 20,
            morningstar: 20,
            firepotion: 5
        },
        hp: 600,
        armor: 3,
        weapon: 2
    },

    spectre: {
        drops: {
            flask: 30,
            redarmor: 40,
            redsword: 30,
            firepotion: 5
        },
        hp: 550,
        armor: 2,
        weapon: 4
    },

    deathknight: {
        drops: {
            burger: 95,
            firepotion: 5
        },
        hp: 750,
        armor: 3,
        weapon: 3
    },

    crab: {
        drops: {
            flask: 50,
            axe: 20,
            leatherarmor: 10,
            firepotion: 5
        },
        hp: 200,
        armor: 2,
        weapon: 1
    },

    snake: {
        drops: {
            flask: 50,
            mailarmor: 10,
            morningstar: 10,
            firepotion: 5
        },
        hp: 850,
        armor: 3,
        weapon: 2
    },

    skeleton2: {
        drops: {
            flask: 60,
            platearmor: 15,
            bluesword: 15,
            firepotion: 5
        },
        hp: 800,
        armor: 3,
        weapon: 3
    },

    eye: {
        drops: {
            flask: 50,
            redarmor: 20,
            redsword: 10,
            firepotion: 5
        },
        hp: 650,
        armor: 2,
        weapon: 3
    },

    bat: {
        drops: {
            flask: 50,
            axe: 10,
            firepotion: 5
        },
        hp: 300,
        armor: 2,
        weapon: 1
    },

    wizard: {
        drops: {
            flask: 50,
            platearmor: 20,
            firepotion: 5
        },
        hp: 300,
        armor: 2,
        weapon: 6
    },

    boss: {
        drops: {
            goldensword: 98,
            powersword: 1,
            powerarmour: 1
        },
        hp: 1300,
        armor: 7,
        weapon: 7
    }
};

Properties.getArmorLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].armor;
        } else {
            return Types.getArmorRank(kind) + 1;
        }
    } catch(e) {
        log.error("No level found for armor: "+Types.getKindAsString(kind));
        log.error('Error stack: ' + e.stack);
    }
};

Properties.getWeaponLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].weapon;
        } else {
            return Types.getWeaponRank(kind) + 1;
        }
    } catch(e) {
        log.error("No level found for weapon: "+Types.getKindAsString(kind));
        log.error('Error stack: ' + e.stack);
    }
};

Properties.getHitPoints = function(kind) {
    return Properties[Types.getKindAsString(kind)].hp;
};
Properties.getExp = function(kind){
    return Properties[Types.getKindAsString(kind)].exp;
};

module.exports = Properties;
