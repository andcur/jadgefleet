/**
 * Created by wizzardich on 9/25/15.
 * Used to fill in the mongoDB instance with default data
 */

db = db.getSiblingDB('JADGe')

db.objects.remove({ });
db.dungeons.remove({ });

db.objects.insert({ item: "gold coin", description:"defaced with a baleful symbol", isStatic:true, objType:"trinket", isContainer:false });
db.objects.insert({ item: "shark's tooth", description:"sings sea shanteys on command", isStatic:true, objType:"trinket", isContainer:false });
db.objects.insert({ item: "iron ring", description:"one edge notched like a key", isStatic:true, objType:"trinket", isContainer:false });
db.objects.insert({ item: "Symbol of Panic", description:"DC 10 to find, DC 15 to disable; affects all targets within 10 ft., " +
                                                      "DC 11 save or become frightened for 1d4 rounds",
                isStatic:true, objType:"trap", isContainer:false });
db.objects.insert({ item: "Teleporter Crystal", description:"DC 15 to find, DC 10 to disable; affects each creature which " +
                                                         "touches the crystal, DC 10 save or be teleported to another location",
                isStatic:true, objType:"trap", isContainer:false });
db.objects.insert({ item: "Earthmaw Trap", description:"DC 15 to find, DC 10 to disable; +7 to hit against one target, 2d10 piercing damage",
                isStatic:true, objType:"trap", isContainer:false });

db.objects.insert({ item: "Wooden Door", isStatic:true, objType:"door" });
db.objects.insert({ item: "Stone Door", isStatic:true, objType:"door" });
db.objects.insert({ item: "Iron Door", isStatic:true, objType:"door" });

db.objects.insert({ modifiers: [ {desc:"broken"}, {desc: "turned over"}, {desc:"trapped", objType:"trap"} ], objType:"modifiers"});

db.objects.insert({ item:"Othodama",
    description: "Female Tiefling Rogue, LG. Othodama is tall, with black hair and dark brown eyes. She wears leather armor and wields a rapier and " +
        "hand crossbow. Othodama is gentle and impulsive.",
    isStatic:false, objType:"npc", isContainer:false });
db.objects.insert({ item:"Hordi",
    description: "Male Dwarf Alchemist, CG. Hordi has black hair and dark green eyes, and large ears. He wears modest garments and silk gloves. " +
        "Hordi speaks with a deep voice.",
    isStatic:false, objType:"npc", isContainer:false });
db.objects.insert({ item:"Helman",
    description: "Male Human Fighter, N. Helman has golden hair and dark green eyes, and an unusual scar on his arm. He wears plate armor " +
        "and wields a morningstar and hand crossbow. Helman is hunting the cultists who murdered his family.",
    isStatic:false, objType:"npc", isContainer:false });
db.objects.insert({ item:"Bertin",
    description: "Male Human Fighter, NG. Bertin is short, with uneven gray hair and soft green eyes. " +
        "He wears hide armor and wields a warhammer and blowgun.",
    isStatic:false, objType:"npc", isContainer:false });

db.objects.insert({ item:"Vampire (warrior)", description: "(mm 297, cr 15)", isStatic:false, objType:"enemy", isContainer:false });
db.objects.insert({ item:"Nightmare", description: "(mm 235, cr 3)", isStatic:false, objType:"enemy", isContainer:false });
db.objects.insert({ item:"Assassin", description: "(mm 343, cr 8)", isStatic:false, objType:"enemy", isContainer:false });
db.objects.insert({ item:"Gray Slaad", description: "(mm 277, cr 9)", isStatic:false, objType:"enemy", isContainer:false });

db.objects.insert({ item: "table", isContainer: true, isStatic:true, objType:"furniture" });
db.objects.insert({ item: "chair", isStatic:true, objType:"furniture", isContainer:false });
db.objects.insert({ item: "candle",isContainer:true, isStatic:true, objType:"furniture" });
db.objects.createIndex( { objType:1 } );

db.dungeons.insert({ _id:"5607055ab00480f2d84fe9be", objType: "room",
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
db.dungeons.insert({ _id:"5607055ab00480f2d84fe9bf", objType: "room",
    description:[
        { item:"West", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"North", description:"Unlocked Simple Wooden Door (10 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"trapped chair", description:"", objType:"furniture", isContainer:false, isStatic:true},
        { item:"Earthmaw Trap: ", description:"DC 15 to find, DC 10 to disable; +7 to hit against one target, 2d10 piercing damage", objType:"trap", isContainer:false, isStatic:true}
    ]});
db.dungeons.insert({ _id:"5607055ab00480f2d84fe9c0", objType: "room",
    description:[
        { item:"East", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },
        { item:"South", description:"Locked Good Wooden Door (DC 20 to open, DC 15 to break; 15 hp)", objType: "door", isContainer:false, isStatic:true },

        { item:"turned over table", description:"contains gold coin DC 10 to find", objType:"furniture", isContainer:true, isStatic:true},
        { item:"gold coin", description:"defaced with a baleful symbol", objType:"trinket", isContainer:false, isStatic:true}
    ]});

db.dungeons.insert({ _id:"101", imgName:"placeholder-3.jpg", objType:"dungeon", rooms:
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

db.dungeons.createIndex( { objType: 1 } );
