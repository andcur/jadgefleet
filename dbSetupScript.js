/**
 * Created by wizzardich on 9/25/15.
 * Used to fill in the mongoDB instance with default data
 */

conn = new Mongo('localhost:27017');
db = conn.getDB("JADGe");

db.objects.remove({ });
db.dungeons.remove({ });

var objects = db.getCollection("objects");
var dungeons = db.getCollection("dungeons");

var objBulk = objects.initializeUnorderedBulkOp();

objBulk.insert({ item: "gold coin", description:"defaced with a baleful symbol", isStatic:true, objType:"trinket", isContainer:false });
objBulk.insert({ item: "shark's tooth", description:"sings sea shanteys on command", isStatic:true, objType:"trinket", isContainer:false });
objBulk.insert({ item: "iron ring", description:"one edge notched like a key", isStatic:true, objType:"trinket", isContainer:false });
objBulk.insert({ item: "Symbol of Panic", description:"DC 10 to find, DC 15 to disable; affects all targets within 10 ft., " +
                                                      "DC 11 save or become frightened for 1d4 rounds",
                isStatic:true, objType:"trap", isContainer:false });
objBulk.insert({ item: "Teleporter Crystal", description:"DC 15 to find, DC 10 to disable; affects each creature which " +
                                                         "touches the crystal, DC 10 save or be teleported to another location",
                isStatic:true, objType:"trap", isContainer:false });
objBulk.insert({ item: "Earthmaw Trap", description:"DC 15 to find, DC 10 to disable; +7 to hit against one target, 2d10 piercing damage",
                isStatic:true, objType:"trap", isContainer:false });

objBulk.insert({ item: "Wooden Door", isStatic:true, objType:"door" });
objBulk.insert({ item: "Stone Door", isStatic:true, objType:"door" });
objBulk.insert({ item: "Iron Door", isStatic:true, objType:"door" });

objBulk.insert({ modifiers: [ {desc:"broken"}, {desc: "turned over"}, {desc:"trapped", objType:"trap"} ], objType:"modifiers"});

objBulk.insert({ item:"Othodama",
    description: "Female Tiefling Rogue, LG. Othodama is tall, with black hair and dark brown eyes. She wears leather armor and wields a rapier and " +
        "hand crossbow. Othodama is gentle and impulsive.",
    isStatic:false, objType:"npc", isContainer:false });
objBulk.insert({ item:"Hordi",
    description: "Male Dwarf Alchemist, CG. Hordi has black hair and dark green eyes, and large ears. He wears modest garments and silk gloves. " +
        "Hordi speaks with a deep voice.",
    isStatic:false, objType:"npc", isContainer:false });
objBulk.insert({ item:"Helman",
    description: "Male Human Fighter, N. Helman has golden hair and dark green eyes, and an unusual scar on his arm. He wears plate armor " +
        "and wields a morningstar and hand crossbow. Helman is hunting the cultists who murdered his family.",
    isStatic:false, objType:"npc", isContainer:false });
objBulk.insert({ item:"Bertin",
    description: "Male Human Fighter, NG. Bertin is short, with uneven gray hair and soft green eyes. " +
        "He wears hide armor and wields a warhammer and blowgun.",
    isStatic:false, objType:"npc", isContainer:false });

objBulk.insert({ item:"Vampire (warrior)", description: "(mm 297, cr 15)", isStatic:false, objType:"enemy", isContainer:false });
objBulk.insert({ item:"Nightmare", description: "(mm 235, cr 3)", isStatic:false, objType:"enemy", isContainer:false });
objBulk.insert({ item:"Assassin", description: "(mm 343, cr 8)", isStatic:false, objType:"enemy", isContainer:false });
objBulk.insert({ item:"Gray Slaad", description: "(mm 277, cr 9)", isStatic:false, objType:"enemy", isContainer:false });

objBulk.insert({ item: "table", isContainer: true, isStatic:true, objType:"furniture" });
objBulk.insert({ item: "chair", isStatic:true, objType:"furniture", isContainer:false });
objBulk.insert({ item: "candle",isContainer:true, isStatic:true, objType:"furniture" });

objBulk.execute();
objects.createIndex( { objType:1 } );

var dungeonBlk = dungeons.initializeUnorderedBulkOp();

dungeonBlk.insert({ _id:"5607055ab00480f2d84fe9be", objType: "room",
    description:[
        { item:"West", description:"Trapped and Stuck Stone Door (DC 20 to break; 60 hp)" +
        "Fire Spray: DC 15 to find, DC 20 to disable; affects all targets within a 20 ft. cone, DC 20 save or take 24d10 fire damage", objType:"door",
            isContainer:false, isStatic:true},
        { item:"South", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"turned over table", description:"contains gold coin DC 10 to find", objType:"furniture", isContainer:false, isStatic:true},
        { item:"gold coin", description:"defaced with a baleful symbol", objType:"trinket", isContainer:false, isStatic:true},
        { item:"Assassin", description:"(mm 343, cr 8)", objType:"enemy", isStatic: false, isContainer:true},
        { item:"Bertin", description:"Male Human Fighter, NG. Bertin is short, with uneven gray hair and soft green eyes. " +
        "He wears hide armor and wields a warhammer and blowgun.",isStatic: false, objType:"npc", isContainer:true }
    ]
});
dungeonBlk.insert({ _id:"5607055ab00480f2d84fe9bf", objType: "room",
    description:[
        { item:"West", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"North", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"trapped chair", description:"", objType:"furniture", isContainer:false, isStatic:true},
        { item:"Earthmaw Trap: ", description:"DC 15 to find, DC 10 to disable; +7 to hit against one target, 2d10 piercing damage", objType:"trap", isContainer:false, isStatic:true}
    ]});
dungeonBlk.insert({ _id:"5607055ab00480f2d84fe9c0", objType: "room",
    description:[
        { item:"East", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"South", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },

        { item:"turned over table", description:"contains gold coin DC 10 to find", objType:"furniture", isContainer:true, isStatic:true},
        { item:"gold coin", description:"defaced with a baleful symbol", objType:"trinket", isContainer:false, isStatic:true}
    ]});

dungeonBlk.insert({ _id:"101", imgName:"placeholder-3.jpg", objType:"dungeon", rooms:
    [{ _id:"5607055ab00480f2d84fe9c0", objType: "room",
        description:[
            { item:"East", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },
            { item:"South", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },

            { item:"turned over table", description:"contains gold coin DC 10 to find", objType:"furniture", isContainer:true, isStatic:true},
            { item:"gold coin", description:"defaced with a baleful symbol", objType:"trinket", isContainer:false, isStatic:true}
    ]},
    { _id:"5607055ab00480f2d84fe9bf", objType: "room",
        description:[
            { item:"West", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
            { item:"North", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
            { item:"trapped chair", description:"", objType:"furniture", isContainer:false, isStatic:true},
            { item:"Earthmaw Trap: ", description:"DC 15 to find, DC 10 to disable; +7 to hit against one target, 2d10 piercing damage", objType:"trap", isContainer:false, isStatic:true}
    ]},
    { _id:"5607055ab00480f2d84fe9be", objType: "room",
        description:[
            { item:"West", description:"Trapped and Stuck Stone Door (DC 20 to break; 60 hp)" +
            "Fire Spray: DC 15 to find, DC 20 to disable; affects all targets within a 20 ft. cone, DC 20 save or take 24d10 fire damage", objType:"door",
                isContainer:false, isStatic:true},
            { item:"South", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },
            { item:"turned over table", description:"contains gold coin DC 10 to find", objType:"furniture", isContainer:false, isStatic:true},
            { item:"gold coin", description:"defaced with a baleful symbol", objType:"trinket", isContainer:false, isStatic:true},
            { item:"Assassin", description:"(mm 343, cr 8)", objType:"enemy", isStatic: false, isContainer:true},
            { item:"Bertin", description:"Male Human Fighter, NG. Bertin is short, with uneven gray hair and soft green eyes. " +
            "He wears hide armor and wields a warhammer and blowgun.",isStatic: false, objType:"npc", isContainer:true }
        ]
    }], name:"Temple of Eternal Doom", description:"Place where heroes go to die"});

dungeonBlk.execute();
dungeons.createIndex( { objType: 1 } );
