var questions = [
    ["Who is The Rock?", "Michael Jackson", "Michael Jordan", "Elvis", "Dwayne Johnson", 3],
    ["Who is the famous Taylor?", "Smith", "Swift", "Swimm", "Slappy", 1 ],
    ["What is Michael Jordan Famous for?", "Football", "Squash", "Basketball", "Music", 2],
    ["Who is Adam Sandler's famous character?", "Happy Gilmore", "Thor", "Iron Man", "John Wick", 0]
    ];

var position = 0;

var timedQuestion = function (questionArray) {
  
    $("#question").empty();
  $("#choice").empty();

    $("#question").text(questions[position][0]);

    var list = $("<ul>");
    for (i=1; i<questions[0].length-1; i++ ) {
        
        var choice = $("<li>");
        choice.attr("index", i);
        choice.text(questions[position][i]);
        list.append(choice);
    };

    $("#choice").append(list);

};

timedQuestion(questions);



var timeLeft = 10;

var myTimer = function() {
  timeLeft--;
  $("#timer").text(timeLeft);   
  
  if (timeLeft===0) {
    // clearInterval(interval);
    timeLeft = 10;
    $("#timer").text(10); 
    position++;
    timedQuestion(questions);
  };
  

  
};


var interval = setInterval(myTimer, 1000);


// if (timeLeft===0) {
//   clearInterval(interval);
//   timeLeft = 10;
//   position++;
//   timedQuestion(questions);
// };

