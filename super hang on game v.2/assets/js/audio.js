document.getElementById("w").onclick = function(){
	var w_toets = document.getElementById("audio_a");
    w_toets.play();
}
document.getElementById("s").onclick = function(){
	var s_toets = document.getElementById("audio_b");
    s_toets.play();
}


document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 38:  var w_toets = document.getElementById("audio_a");
		          w_toets.play();
		break;
	}
})
document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 40:  var s_toets = document.getElementById("audio_b");
		          s_toets.play();
		break;
	}
})