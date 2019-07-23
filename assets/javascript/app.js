var questions = [
    ["Who is The Rock?", "Michael Jackson", "Michael Jordan", "Elvis", "Dwayne Johnson", 3],
    ["Who is the famous Taylor?", "Smith", "Swift", "Swimm", "Slappy", 1 ],
    ["What is Michael Jordan Famous for?", "Football", "Squash", "Basketball", "Music", 2],
    ["Who is Adam Sandler's famous character?", "Happy Gilmore", "Thor", "Iron Man", "John Wick", 0]
    ];


var timedQuestion = function (questionArray) {

    // for(var i=0; i<questions.length; i++) {

    //     $("#question").text(questions[i][0]);
    //     $("#choice").text()

    // };

    
    $("#question").text(questions[0][0]);

    var list = $("<ul>");
    for (i=1; i<questions[0].length-1; i++ ) {
        
        var choice = $("<li>");
        choice.attr("index", i);
        choice.text(questions[0][i]);
        list.append(choice);
    };

    $("#choice").append(list);

};

timedQuestion(questions);





