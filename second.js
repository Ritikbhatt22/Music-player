
$("#input_1_btn").click(function () {
    var input = document.getElementById("input_1").value;
    console.log(typeof (input), input)
    var url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + input;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "2d3ca0a0abmsh201eef8b8c18fb3p1ca149jsnc0acb6b308c7"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#artist_name").html(response.data[0].artist.name);
        document.getElementById("container1_div1").style.backgroundImage= "url("+response.data[2].album.cover_medium+")";
       var len =document.getElementsByClassName("container2_image1").length;
 
       for(let j=0;j<len;j++) { 
          i=j;
        document.getElementsByClassName("container2_image1")[j].src =response.data[i].album.cover_small;
        document.getElementsByClassName("container2_span2")[j].innerHTML=response.data[i].title;
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('preload','auto')
        audioElement.setAttribute("class","audioListen")
        audioElement.setAttribute('src', response.data[j].preview);
        document.getElementsByClassName("container2_image1")[j].appendChild(audioElement)
     
    }
    for(let k=0;k<len;k++) { 


        document.getElementsByClassName("container2_image1")[k].addEventListener('click',function(e){
       

            // document.getElementsByClassName("audioListen")[0].play();
            console.log(document.getElementsByClassName("audioListen")[k],"audioElementbhalo")
            // audioElement.play();
            document.getElementsByClassName("audioListen")[k].play();
            $('#play').click(function () {
                document.getElementsByClassName("audioListen")[k].play();
                $("#status").text("Status: Playing");
            });
        
            $('#pause').click(function () {
                document.getElementsByClassName("audioListen")[k].pause();
                $("#status").text("Status: Paused");
            });
        
            $('#restart').click(function () {
                document.getElementsByClassName("audioListen")[k].currentTime = 0;
            });
        })
    }
    })
})


//   for audio elements we configure this task as =>

function  apiSettings(){
    var input = document.getElementById("input_1").value;
    console.log(typeof (input), input)
    var url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + input;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "2d3ca0a0abmsh201eef8b8c18fb3p1ca149jsnc0acb6b308c7"
        }
    }

}



var arr=["wizKhalifa","eminem","travisScott","Elton John","Taylor Swift"];

var musicPlayer = arr[Math.floor(Math.random() * arr.length)]; 

console.log(musicPlayer,"musicplayer")


// $( document ).ready(function() {
//     var arr=["wizKhalifa","eminem","travisScott","Elton John","Taylor Swift"];

//     var musicPlayer = arr[Math.floor(Math.random() * arr.length)]; 

// console.log(musicPlayer,"musicplayer")
//     var url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + musicPlayer;
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": url,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//             "x-rapidapi-key": "2d3ca0a0abmsh201eef8b8c18fb3p1ca149jsnc0acb6b308c7"
//         }
//     }

//     $.ajax(settings).done(function (response) {


//     })
    
// });
