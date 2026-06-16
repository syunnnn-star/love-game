let player = "";
let current = 0;

const scenes = [

{
bg:"bg/classroom.jpg",
face:"images/yume_normal.png",
text:"はじめまして...私、ゆめです。"
},

{
bg:"bg/classroom.jpg",
face:"images/yume_blush.png",
text:"同じクラスになったね。"
},

{
bg:"bg/hallway.jpg",
face:"images/yume_happy.png",
text:"最近よく話すようになったね。"
},

{
bg:"bg/festival.jpg",
face:"images/yume_happy.png",
text:"文化祭、一緒に回ろう？"
},

{
bg:"bg/festival.jpg",
face:"images/yume_blush.png",
text:"すごく楽しい..."
},

{
bg:"bg/sunset.jpg",
face:"images/yume_sad.png",
text:"卒業したら離れ離れかな..."
},

{
bg:"bg/rooftop.jpg",
face:"images/yume_confession.png",
text:"ずっと前から好きでした。"
},

{
bg:"bg/rooftop.jpg",
face:"images/yume_blush.png",
text:"これからも一緒にいてくれる？"
}

];

function startGame(){

player =
document.getElementById("playerName").value;

if(player===""){
player="あなた";
}

document.getElementById("nameScreen").style.display="none";
document.getElementById("game").style.display="block";

showScene();
}

function showScene(){

document.getElementById("background").style.backgroundImage =
`url(${scenes[current].bg})`;

document.getElementById("character").src =
scenes[current].face;

document.getElementById("text").innerHTML =
scenes[current].text.replace("あなた",player);

if(current===scenes.length-1){
document.getElementById("nextBtn").innerText="END";
}
}

function nextScene(){

current++;

if(current>=scenes.length){

document.getElementById("text").innerHTML=
player+" と ゆめは結ばれました。<br><br>Happy End";

document.getElementById("nextBtn").style.display="none";

return;
}

showScene();
}