var questions = [
    ["Who is The Rock?", "Michael Jackson", "Michael Jordan", "Elvis", "Dwayne Johnson", 3],
    ["Who is the famous Taylor?", "Smith", "Swift", "Swimm", "Slappy", 1 ],
    ["What is Michael Jordan Famous for?", "Football", "Squash", "Basketball", "Music", 2],
    ["Who is Adam Sandler's famous character?", "Happy Gilmore", "Thor", "Iron Man", "John Wick", 0]
    ];


var position = 0;
var points = 0;


var timedQuestion = function (questionArray) {
  
  $("#question").empty();
  $("#choice").empty();

  $("#question").text(questions[position][0]);

  var list = $("<ul id = 'choiceList'>");
    
  for (var i=1; i<questions[0].length-1; i++ ) {        
    var choice = $("<li>");
    var index = i-1;
    choice.attr("id", "listChoice");
    choice.attr("choice", index);
    choice.attr("answer", questions[position][5]);
    choice.text(questions[position][i]);
    list.append(choice);
  };

  $("#choice").append(list);
  
  
  
  
  $("#choiceList").click(function(e){
    
   
   
   if(e.target && e.target.nodeName == "LI") {
     
      var answer = $(e.target).attr("answer");
      var decision = $(e.target).attr("choice");
      // alert("You clicked option  " + decision + ". The answer is " + answer +" AND " + e.target.getAttribute("choice") + " was clicked");
      
     if (decision===answer){
       points++;
       $("#points").text(points);
             
     };
     
   };
    
    
   
    
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



