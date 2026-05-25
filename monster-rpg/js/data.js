const MAP_DATA={
width:4800,
height:4800,
backgroundColor:"#6dbf4b",

roads:[
{x:0,y:450,w:4800,h:180}
],

grass:[
{x:300,y:700,w:900,h:500}
]
};

const PLAYER_TEMPLATE={
id:"character-A1",
name:"Character A1",

x:300,
y:300,

width:130,
height:130,

hp:100,
maxHp:100,

money:500,

inventory:[
{id:"basic-ball",qty:5}
],

party:[]
};

const MONSTERS=[
{
id:"monster-A1",
name:"Monster A1",

rarity:"common",

hp:100,

atk:20,

def:10,

speed:15,

catchRate:.35,

spawn:["grass"],

color:"#ff8844"
}
];