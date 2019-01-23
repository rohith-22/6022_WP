var data = '{"questions": [{"question": "2009 IPL winner?","option1": "DC","option2": "CSK","hints": "Orange Army","answer": "DC"}, {"question": "","option1": "True","option2": "False","hints": "1 is True","answer": "False"}]}';
var obj = JSON.parse(data);
var i = 0;
procedure(0)
function previous() {
    if(i<=0) {
        i=0;
    }else{
        i = i-1;
    }
    procedure(i)
}
function next() {
    if(i>=1) {
        i = 1;
    } else {
        i = i+1;
    }
    procedure(i);
}
function procedure(i) {
    document.getElementById("question").innerHTML = obj.questions[i].question;
    document.getElementById("options").innerHTML = '<button onclick = \"temp('+i+')\"> hint </button> <br><br> <p id="hint"></p><br> <input type = "radio" name = "option" value = \"obj.questions['+i+'].option1\" onclick = \"check(obj.questions['+i+'].option1, '+i+')\"> '+obj.questions[i].option1+' <br><br> <input type = "radio" name = "option" value = "obj.questions['+i+'].option2\" onclick = \"check(obj.questions['+i+'].option2, '+i+')\"> '+obj.questions[i].option2+'<br><br><p id = "print"></p>';
}
function temp(index) {
    document.getElementById("hint").innerHTML ='<div  class="alert alert-warning" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+obj.questions[index].hints+'</div>';
}
function check(value, index) { 

    if(value == obj.questions[index].answer) {
        document.getElementById("print").innerHTML = '<div  class="alert alert-success" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Correct answer!</div>';
    } else {
        document.getElementById("print").innerHTML = '<div  class="alert alert-danger" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>wrong answer!</div>';

    }

}
