var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberofdrumbutton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
        
       
});


}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "s":
            var tom1 = new Audio("audio/tom-1.mp3");
            tom1.play();
            break;

        case "h":
            var snare = new Audio("audio/snare.mp3");
            snare.play();
            break;

        case "r":
            var tom3 = new Audio("audio/tom-3.mp3");
            tom3.play();
            break;

        case "e":
            var tom4 = new Audio("audio/tom-4.mp3");
            tom4.play();
            break;

        case "y":
            var tom2 = new Audio("audio/tom-2.mp3");
            tom2.play();
            break;

        case "a":
            var crash = new Audio("audio/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHTML);

}
}


function buttonAnimation(currentKey) {
   var activebutton = document.querySelector("." + currentKey);
   activebutton.classList.add("pressed");
   setTimeout(function() {
    activebutton.classList.remove("pressed");
   }, 100);

}

