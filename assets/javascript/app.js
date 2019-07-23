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
    var index = i-1;
    choice.attr("id", index);
    choice.attr("answer", questions[position][5]);
    choice.text(questions[position][i]);
    list.append(choice);
  };

  $("#choice").append(list);
  
  
  
  
  $(choice).click(function(){
    
   var answer = $(choice).attr("answer");
   var decision = $(choice).attr("id");
   
    
   alert("You clicked option  " + decision + ". The answer is " + questions[position][5]);
    
   
    
//    if(parseInt(decision) === questions[position][5]) {
      
//       alert("Coorect! The answer is "+  questions[position][5]);
      
//     } else { 
//       alert(questions[position][5] + " You chose  " + decision + " and the index is " + index + ". The correct answer is " + answer);  
    
//     }   
    
  });
  
};


timedQuestion(questions);

var timeLeft = 10;

var myTimer = function() {
  timeLeft--;
  $("#timer").text(timeLeft);   
  
  if (timeLeft===0) {
    
    timeLeft = 10;
    
    $("#timer").text(10); 
    
    if (position === questions.length-1) {
      position = 0;
    } else {
      position++;
    };
    
    timedQuestion(questions);
  };
};


var interval = setInterval(myTimer, 1000);



