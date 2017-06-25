var word = "javascript";
var progress = 0;
var difficulty = 1;
var max = 100;

var words = ["html", "javascript", "css", "facebook", "stack", "overflow"];

$(function(){
    startNewGame(); //kvieciama funkcija pradeti zaidima
    
    $(document).keypress(function(e){
        var success = false;
        
        for(var i=0; i<word.length; i++){
            if(e.key == word[i]){
                $(".letter:eq("+i+")").html(e.key);
                success = true;
            }
        }
        playGoodChoice();
        if(!success){
            progress += 10;
            drawProgress();
            badChoice(); 
        }
        
        if(hasWon()){
            $(".youWon").html("YOU WON !!! <br> Lets try another word");
            setTimeout(startNewGame, 1500);
        }
    });
});

function drawProgress() {
    if(progress > 100){
        progress = 100;
          
        setTimeout(startNewGame, 1500);
        $(".youLost").html("YOU LOST :( ");
        
    }
    
    $(".bar").css("width", progress +"%");
}

function generateWord() {
    $(".word").html("");

    for(var i=0; i < word.length; i++){
        $(".word").append('<div class="letter"></div>');
    }
}
function hasWon() {
    var won = true;
    $(".letter").each(function(){
        if($(this).html() == "")
            won = false;
    });
    return won;
}
function startNewGame() {
    progress = 0;
    var prevWord = word;
    $(".youLost").html("");
    $(".youWon").html("");
    while(word == prevWord)
        selectWord();
    
    generateWord();
    drawProgress();
}

function selectWord(){
    var randnum = Math.floor(Math.random()*words.length);
    word = words[randnum];
}

setInterval(function(){
    progress += difficulty;
    drawProgress();
}, 100);

$( ".difEasy" ).on( "click", function() {
    difficulty = 0.5;
    startNewGame();
});
$( ".difMedium" ).on( "click", function() {
    difficulty += 0.7;
    startNewGame();
});
$( ".difHard" ).on( "click", function() {
    difficulty += 1;
    startNewGame();
});

function playGoodChoice() {
	$('#blurred-lines')[0].volume = 0.5;
	$('#blurred-lines')[0].load();
	$('#blurred-lines')[0].play();
}
function badChoice() {
    $('#bad-choice')[0].volume = 0.5;
	$('#bad-choice')[0].load();
	$('#bad-choice')[0].play();
}
