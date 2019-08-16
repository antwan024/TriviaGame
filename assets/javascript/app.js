var questions = [
    ["Who is The Rock?", "Michael Jackson", "Michael Jordan", "Elvis", "Dwayne Johnson", 3],
    ["Who is the famous Taylor?", "Smith", "Swift", "Swimm", "Slappy", 1 ],
    ["What is Michael Jordan Famous for?", "Football", "Squash", "Basketball", "Music", 2],
    ["Who is Adam Sandler's famous character?", "Happy Gilmore", "Thor", "Iron Man", "John Wick", 0],
    ["Who are the Wu-Tang Clan?", "A Sports Team", "Warriors", "Rappers", "Gymnists", 2]
    ];

//position is the index of each question.
var position = 0;
var points = 0;

//nestQuestion will reset countdown and itterate up to the next question.
var nextQuestion = function() {    
 
    
    console.log(position);
    timeLeft = 10;
    $("#timer").text(10); 
    

    if (position === questions.length) {
      endGame();
    } else {
      timedQuestion(questions); 
    };

};


//timedQuestion will write to HTML, and call the event click for each li item.
var timedQuestion = function (array) {
  
    $("#question").empty();
    $("#choice").empty();

    $("#question").text(array[position][0]);

    var list = $("<ul id = 'choiceList'>");
      
    for (var i=1; i<array[0].length-1; i++ ) {        
      var choice = $("<li>");
      var index = i-1;
      choice.attr("id", "listChoice");
      choice.attr("choice", index);
      choice.attr("answer", array[position][5]);
      choice.text(array[position][i]);
      list.append(choice);
    };

    $("#choice").append(list);
    


    //will get click data and points and go to next question.
    $("#choiceList").click(function(e){
    
        position++;

        if(e.target && e.target.nodeName == "LI") {
          
            var answer = $(e.target).attr("answer");
            var decision = $(e.target).attr("choice");

            console.log(e.target);
            console.log(e.target.nodeName);
            
            if (decision===answer){
              points++;
              $("#points").text(points);
            };
          
        };

        console.log(questions.length);
        nextQuestion();       
      
    });  
};


//Timer to countdown and go to next question.
var myTimer = function() {
    timeLeft--;
    $("#timer").text(timeLeft);   
    
    if (timeLeft===0) {
        position++;
        nextQuestion();
    };

};


$("#reset").click(function(){
   
    position = 0;
    points = 0;
    $("#points").text(0);
    timeLeft = 10;
    $("#timer").text(10); 
    timedQuestion(questions);
    interval = setInterval(myTimer, 1000);
    
});


//ends the game and determines win/loss.
var endGame = function() {
  
    clearInterval(interval);
  
    var determineText = function(){
      
        if (points>=3) {
          $("#choice").text("You Win!");
        } else {
          $("#choice").text("You Lose!");
        };

    };

    determineText();
  
    $("#question").text('');

    $("#timer").text('done');    

};


var interval = setInterval(myTimer, 1000);
timedQuestion(questions);
var timeLeft = 10;
