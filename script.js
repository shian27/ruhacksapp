/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

/*getElementById(video) {
  
  //if clicked, entity will play
  //if clicked again, video will pause
entity.pause();
entity.play();
  
  //width and height
}
*/

var vid = document.getElementById("video");

/* function playVid() { */
  
vid.addEventListener('click',function(){
vid.play();
},false);


/* function pauseVid() { 
    vid.pause(); 
} */
