<!DOCTYPE html>
<html>
    <head>
        <title>Kartuvės</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="reset.css">
        <link rel="stylesheet" type="text/css" href="style.css?v=2">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaina" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>
        <audio id="blurred-lines" src="images/beep12.mp3"></audio>
        <audio id="bad-choice" src="images/beep11.mp3"></audio>
        <h1>THE GALLOWS</h1>
        <h2>Select difficulty:</h2>
        <button class="difEasy">Easy</button>
        <button class="difMedium">Medium</button>
        <button class="difHard">Hard</button>
        <div class="youWon"></div>
        <div class="youLost"></div>
        <div class="word"></div>    
        <div class="progress">
            <div class="bar"></div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
