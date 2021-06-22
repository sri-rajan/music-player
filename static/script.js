//info for the song
let images={1:'static/images/alone.jfif',2:'static/images/animal.jfif',3:"static/images/dusk till dawn.jfif",
            4:"static/images/girls like you.jfif",5:"static/images/perfect.jfif"}

let songs={1:"static/songs/alone.mp3",2:'static/songs/Animals.mp3',3:'static/songs/Dusk till Dawn.mp3',4:'static/songs/girls like you.mp3',5:'static/songs/perfect.mp3'}

let music=document.getElementsByClassName('card');


for(let i=0;i<5;i++){
    music[i].addEventListener('click',function(){displays(this.id)});
}

//to know which song played before and make it stop
var previous="";

// to play song and display the little player below
function displays(id){
    var audio = document.getElementById(previous);
    if (previous!=''){
        audio = document.getElementById(previous)
        audio.src='';
    }
    
    previous=id+'a';
    document.getElementById(id+'a').src=songs[id];
    //setting image for player
    document.getElementById("current-img").src=images[id];
    var audio =document.getElementById(id+'a');
    audio.play();
    document.getElementById("preview").setAttribute('style',"display:inline-flex;");
    let nextid=id

    //checking button to pause palay or forward
    document.getElementById('play').addEventListener('click',function(){plays(nextid)});
    document.getElementById('pause').addEventListener('click',function(){pauses(nextid)});
    document.getElementById('front').addEventListener('click',function(){fronts(nextid)});
    document.getElementById('back').addEventListener('click',function(){backs(nextid)});

}

//fuction for play button
function plays(ids){
    document.getElementById('current-img').setAttribute('class','ani');
    audio=document.getElementById(ids+'a');
    audio.play();

}
//function for pause button
function pauses(ids){
    document.getElementById('current-img').setAttribute('class','noani');
    audio=document.getElementById(ids+'a')
    audio.pause()
}

//function to go forward
function fronts(ids){
    if(parseInt(ids)>4){
        ids=0;
    }
    var realid=parseInt(ids)+1;
    displays(realid)
    
}

//function to go back
function backs(ids){
    if(parseInt(ids)<2){
        ids=6;
    }
    realid=parseInt(ids)-1;
    displays(realid)
}

//closes the mini player
function closes(ids){
    audio=document.getElementById(ids+'a');
    audio.src='';
    document.getElementById('preview').setAttribute('style','display:none;')
}

