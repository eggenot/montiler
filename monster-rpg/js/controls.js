let keys={};

addEventListener("keydown",e=>{
keys[e.key.replace("Arrow","").toLowerCase()]
=true;
});

addEventListener("keyup",e=>{
keys[e.key.replace("Arrow","").toLowerCase()]
=false;
});

document.querySelectorAll(
"#controls button"
).forEach(b=>{

b.ontouchstart=()=>{
keys[b.dataset.k]=true;
};

b.ontouchend=()=>{
keys[b.dataset.k]=false;
};

});