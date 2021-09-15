document.getElementById("title").style.display="block";

var startquiz = document.getElementById("start_quiz_btn");
var goback = document.getElementById("goback_btn");
var clear = document.getElementById("clear_btn");
var submit = document.getElementById("submit_btn");
var view_highscores = document.getElementById("high_scores");
view_highscores.addEventListener('click', view_scores); 

var resultdata = [];
if(localStorage.getItem("scores")==null){} else {
resultdata = JSON.parse(localStorage.getItem("scores"));
}

var timer = 0;
var timerid; 
document.getElementById("timer").innerHTML = "Time: "+timer;

startquiz.addEventListener("click", function() {
document.getElementById("title").style.display="none";
document.getElementById("question_1").style.display="block";
timerid = setInterval(function(){
timer += 1;
document.getElementById("timer").innerHTML = "Time: " + timer;   
},1000);
}); 

var question_1 = document.getElementsByClassName("q1");
for (var i = 0; i < question_1.length; i++) {
    question_1[i].addEventListener('click', function(event){
        var attribute = this.getAttribute("data-answer");
        document.getElementById("question_1").style.display="none";
        document.getElementById("question_2").style.display="block";
        if(attribute=="correct"){
            document.getElementById("q2_result").innerHTML = "Correct!";
        } else {
            document.getElementById("q2_result").innerHTML = "Wrong!";
            timer += 10;
        }
        document.getElementById("timer").innerHTML = "Time: "+timer;
    });
}

var question_2 = document.getElementsByClassName("q2");
for (var i = 0; i < question_2.length; i++) {
    question_2[i].addEventListener('click', function(event){
        var attribute = this.getAttribute("data-answer");
        document.getElementById("question_2").style.display="none";
        document.getElementById("question_3").style.display="block";        
        if(attribute=="correct"){
            document.getElementById("q3_result").innerHTML = "Correct!";
        } else {
            document.getElementById("q3_result").innerHTML = "Wrong!";
            timer += 10;
        }
        document.getElementById("timer").innerHTML = "Time: "+timer;
    });
}

var question_3 = document.getElementsByClassName("q3");
for (var i = 0; i < question_3.length; i++) {
    question_3[i].addEventListener('click', function(event){
        var attribute = this.getAttribute("data-answer");
        document.getElementById("question_3").style.display="none";
        document.getElementById("question_4").style.display="block";
        if(attribute=="correct"){
            document.getElementById("q4_result").innerHTML = "Correct!";
        } else {
            document.getElementById("q4_result").innerHTML = "Wrong!";
            timer += 10;
        }
        document.getElementById("timer").innerHTML = "Time: "+timer;
    });
}

var question_4 = document.getElementsByClassName("q4");
for (var i = 0; i < question_4.length; i++) {
    question_4[i].addEventListener('click', function(event){
        var attribute = this.getAttribute("data-answer");
        document.getElementById("question_4").style.display="none";
        document.getElementById("question_5").style.display="block";
        if(attribute=="correct"){
            document.getElementById("q5_result").innerHTML = "Correct!";
        } else {
            document.getElementById("q5_result").innerHTML = "Wrong!";
            timer += 10;
        }
        document.getElementById("timer").innerHTML = "Time: "+timer;
    });
}

var question_5 = document.getElementsByClassName("q5");
for (var i = 0; i < question_5.length; i++) {
    question_5[i].addEventListener('click', function(event){
        clearInterval(timerid);
        var attribute = this.getAttribute("data-answer");
        document.getElementById("question_5").style.display="none";
        document.getElementById("result").style.display="block";
        if(attribute=="correct"){
            document.getElementById("q5_result").innerHTML = "Correct!";
        } else {
            document.getElementById("q5_result").innerHTML = "Wrong!";
            timer += 10;

        }
        document.getElementById("timer").innerHTML = "Time: "+timer;
        document.getElementById("final_score").innerHTML = "Your final score is "+timer+".";
    });
}


submit.addEventListener('click', function(event){
    var initials = document.getElementById("initials").value;  
    if(initials==""||initials==null){
       alert("Please enter your initials")
    } else {
        var resultobj = {};
        resultobj.initials = initials;
        resultobj.score = timer;
        resultdata.push(resultobj);
    }
    localStorage.setItem("scores",JSON.stringify(resultdata));
    document.getElementById("initials").value="";
    document.getElementById("result").style.display="none";
    document.getElementById("highscores").style.display="block";
    view_scores();
});

function view_scores(){
    document.getElementById("title").style.display="none";
    if(localStorage.getItem("scores")==null){} else {
        resultdata = JSON.parse(localStorage.getItem("scores"));
    }    
    document.getElementById("highscores_list").innerHTML="";
    resultdata.sort(function(a, b) {
    return parseFloat(a.score) - parseFloat(b.score);
    }); 
    var scoreshtml = "";
    for(var i=0;i<resultdata.length;i++){
        if(i<10){
        var scoreindex = i+1;
        scoreshtml += "<div style='background-color:rgb(241, 216, 241);border-radius: 3px;padding:5px;margin-top:2px;margin-bottom:2px;' >"+scoreindex+". "+resultdata[i].initials+" - "+resultdata[i].score+"</div>";
        }
    }
    document.getElementById("highscores_list").innerHTML = scoreshtml;
    document.getElementById("highscores").style.display="block";
}

goback.addEventListener('click', function(event){
    timer = 0;
    document.getElementById("highscores").style.display="none";
    document.getElementById("title").style.display="block";
}); 

clear.addEventListener('click', function(event){
    document.getElementById("highscores_list").innerHTML="";
    resultdata = [];
    localStorage.setItem("scores",JSON.stringify(resultdata));
}); 
