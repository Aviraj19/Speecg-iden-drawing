x = 0
y = 0 
draw_circle =""
draw_rect =""
draw_square =""
function setup() {
    canvas = createCanvas(900,600)
}
var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML="System is listening pls speak";
    Recognition.start();
}
Recognition.onresult=function(event) {
     console.log(event)
     var content = event.results[0][0].transcript
     document.getElementById("status").innerHTML="The speech has been recognized as : "+ content
     if (content=="circle") {
         x=Math.floor(Math.random()* 900)
         y=Math.floor(Math.random()* 600)
         document.getElementById("status").innerHTML="started drawing circle"
         draw_circle = "set"
     }
     if (content=="rectangle") {
        x=Math.floor(Math.random()* 900)
        y=Math.floor(Math.random()* 600)
        document.getElementById("status").innerHTML="started drawing rectangle"
        draw_rect = "set"
    }
    if (content=="square") {
        x=Math.floor(Math.random()* 900)
        y=Math.floor(Math.random()* 600)
        document.getElementById("status").innerHTML="started drawing square"
        draw_square = "set"
    }
}
function draw() {
    if (draw_circle=="set") {
        circle(x,y,80)
        document.getElementById("status").innerHTML="circle is drawen"
        draw_circle =""
    }if (draw_rect=="set") {
        rect(x,y,100,50)
        document.getElementById("status").innerHTML="rectangle is drawen"
        draw_rect =""
    }
    if (draw_square=="set") {
        square(x,y,100,10)
        document.getElementById("status").innerHTML="square is drawen"
        draw_square =""
    }
}