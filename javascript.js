"use strict";



// Meme Part
var newLength = "";
var imgArray = [];
var imgArrayStorage = [];

const imgContainer = document.getElementById("memecard");

for(let i = 0; i < 894; i++){
    let newEl = 'images/img'+" "+"("+i+").jpg";
    newLength = imgArray.push(newEl);
}

function getRandomNumImage(){
    return Math.floor(Math.random()*894)+1;
}

function newMeme (){
    var remimg = document.getElementById('meme');
    remimg.remove('meme');
    const imgField = document.createElement("img");
    imgField.setAttribute("id", "meme");
    var img = imgArray[Math.floor(Math.random()*894)+1];
    imgField.src = img;
    imgContainer.appendChild(imgField);
    newLength =imgArrayStorage.push(img);
    console.log(imgArrayStorage);
}

console.log(imgArrayStorage);

function previousMeme (){
    var remimg = document.getElementById('meme');
    remimg.remove('meme');
    const imgFieldPrevious = document.createElement("img");
    imgFieldPrevious.setAttribute("id", "meme");
    var imgPrevious = imgArrayStorage[imgArrayStorage.length - 2];
    imgFieldPrevious.src = imgPrevious;
    imgContainer.appendChild(imgFieldPrevious);
    console.log(imgPrevious);
    imgArrayStorage.pop();
}




//Video Part

var videoArray = [];
var videoArrayStorage = [];

const vidContainer = document.getElementById("videocard");

for(let i = 0; i < 489; i++){
    let newEl = 'videos/video'+" "+"("+i+").mp4";
    newLength = videoArray.push(newEl);
}

function getRandomNumVideo(){
    return Math.floor(Math.random()*489)+1;
}

function newVideo (){
    var remvid = document.getElementById('video');
    remvid.remove('video');
    const vidField = document.createElement("video");
    vidField.setAttribute("controls", "controls")
    vidField.setAttribute("id", "video");
    var vid = videoArray[Math.floor(Math.random()*489)+1];
    vidField.src = vid;
    vidContainer.appendChild(vidField);
    newLength =videoArrayStorage.push(vid);
    console.log(videoArrayStorage);
}

console.log(videoArrayStorage);

function previousVideo (){
    var remvid = document.getElementById('video');
    remvid.remove('video');
    const vidFieldPrevious = document.createElement("video");
    vidFieldPrevious.setAttribute("controls", "controls")
    vidFieldPrevious.setAttribute("id", "video");
    var vidPrevious = videoArrayStorage[videoArrayStorage.length - 2];
    vidFieldPrevious.src = vidPrevious;
    vidContainer.appendChild(vidFieldPrevious);
    video.autoplay = true;
    console.log(vidPrevious);
    videoArrayStorage.pop();
}

// small Cards Image

for(let i = 0; i < 894; i++){
    var cardboximg = document.getElementById("meme-small-cards");
    const cardimg = document.createElement("img");
    cardimg.classList.add("card");
    cardimg.classList.add("box-shadow");
    cardimg.setAttribute("loading", "lazy");
    cardimg.src = imgArray[i+1];
    cardimg.setAttribute("id", "img" + i);
    cardimg.setAttribute("onclick", "reply_click(this.id)");
    //doesnt work yet
    /* cardimg.setAttribute("onclick", "openModal"); */
    cardboximg.appendChild(cardimg);
}

//small Cards Video 

var vidid = "";

for(let i = 0; i < 489; i++){
    var cardboxvideo = document.getElementById("video-small-cards");
    const cardvid = document.createElement("video");
    cardvid.classList.add("card");
    cardvid.classList.add("box-shadow");
    cardvid.setAttribute("loading", "lazy");
    cardvid.src = videoArray[i+1];
    cardboxvideo.appendChild(cardvid);
}


//Modal 

//Open Modal 

var clickedimgsrc = false;

function reply_click(clicked_id){
    var clickedimgsrc = document.getElementById(clicked_id).src;
    console.log(clickedimgsrc);
}
// doesnt work yet
/* function openModal (){
    document.getElementById("myModal").style.display = "block";
    var ligthboximg = document.createElement("img");
    ligthboximg.src = clickedimgsrc;
    document.getElementById("modal-content").appendChild(ligthboximg);
} */


// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}