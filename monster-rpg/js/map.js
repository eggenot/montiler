let player=
JSON.parse(JSON.stringify(
PLAYER_TEMPLATE
));

function movePlayer(){

let speed=4;

if(keys.up)player.y-=speed;
if(keys.down)player.y+=speed;

if(keys.left)player.x-=speed;
if(keys.right)player.x+=speed;

if(player.x<0)player.x=0;
if(player.y<0)player.y=0;

if(player.x>MAP_DATA.width-player.width)
player.x=MAP_DATA.width-player.width;

if(player.y>MAP_DATA.height-player.height)
player.y=MAP_DATA.height-player.height;
}