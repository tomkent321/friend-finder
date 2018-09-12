


var person = {
    name: this.name,
    photo: this.photo,
    scores: []

}








// create the questions array
var arrQues = [
  [
  "Pizza and beer is absolutely my favorite meal!",
  "Pizza and beer is a pretty good meal.",
  "Pizza and beer is just okay if I'm really hungry.",
  "Pizza and beer don't appeal to me very much.",
  "I hate pizza and beer and would rather eat a rock first!"
  ],

  [
   "I love hard rock. The harder the better. I listen to it all the time!",
   "I like hard rock. I listen to it freqently.",
   "I don't particularly like or dislike hard rock.", 
   "Hard rock is irritating to me and gets on my nerves.",
   "I hate hard rock! Hard rock drives me insane and causes me to do terrible things!"
  ],
  [
    "I love the idea of going on a 60 mile bike ride on a rugged mountain trail.",
    "I would enjoy at 30 mile bike ride on an improved mountain trail.",
    "I would be okay with a 5 mile bike ride on a flat asphalt trail.",
    "I would be okay with a 1/2 mile bike ride around the neighborhood.",
    "I would rather watch a bike race on TV if there is nothing else on."
  ],
  [
    "I read about 12 books a year.",
    "I read about 6 books a year.",
    "I read about 2 books a year.",
    "I read at least one book every year.",
    "I think books are boring and would rather watch TV."
  ],
  [
    "My car is worth more than $70K",
    "My car is worth about $50K",
    "My car is worth about $30K",
    "My car is worth about $15K",
    "My car is worth less than  $5K"
    
    
  ],
  [
    "I like playing football",
    "I like playing ",
    "I like to ",
    "I think Donald Trump rates a 0.",
    "I like to watch fishing shows on TV."
  ],
  [
    "I watch more than 21 hours of TV each week.",
    "I watch about 14 hours of TV each week.",
    "I watch about 7 hours of TV each week.",
    "I watch less than 3 hours of TV each week.",
    "I think TV is a waste of time and will rot your brain!"
  ],
  [
    "I like to be around very wealthy people who are also very good looking.",
    "I like to be around moderately wealthy people who are moderately good looking.",
    "I like to be around people who are average in their wealth and looks.",
    "I don't really care that much about wealth or looks. I like a good personality.",
    "I am drawn to people who go out of their way to be radically counter-culture."
    
  ],
  [
    "As far as looks go I consider my self a 10.",
    "As far as looks go I consider my self a 8.",
    "As far as looks go  I consider my self a 5.",
    "As far as looks go I consider my self a 2.",
    "As far as looks go I don't care what I look like"
  ],
  [
    "I think my IQ would test out over 160",
    "I think my IQ would test out somewhere around 145",
    "I think my IQ would test out somewhere around 130",
    "I think my IQ would test out somewhere around 120",
    "I think my IQ would test out somewhere around 115",
  ]

]



$(document).ready(function(){
//populate the form

for(var i = 0; i < arrQues.length; i ++) {
var qid = i + 1;
var q1 = arrQues[i][0];
var q2 = arrQues[i][1];
var q3 = arrQues[i][2];
var q4 = arrQues[i][3];
var q5 = arrQues[i][4];

var quest = '<div class="form-group">';
    quest +='<label for="question ' + qid + '">Question ' +  qid + '</label>';
    quest +=        '<div class="input-group">';
    quest +=        '<select class="custom-select" id="question-' + qid + '" aria-label="Example select with button addon">';
    quest +=            '<option selected>Choose...</option>';
    quest +=            '<option value="1">' + q1 + '</option>';
    quest +=            '<option value="2">' + q2 + '</option>';
    quest +=            '<option value="3">' + q3 + '</option>';
    quest +=            '<option value="4">' + q4 + '</option>';
    quest +=            '<option value="5">' + q5 + '</option>';
    quest +=        '</select>';
    quest +=        '<div class="input-group-append">';
    quest +=          '<button id="button-' +qid+ '" class="btn btn-outline-secondary" type="button" >Choose and Click!</button>';
    quest +=        '</div>';
    quest +=      '</div>';
    quest +=    '</div>';

    $("#questions-here").append(quest);
    
}

//button events
$("#button-1").click( function(){
  person.scores.push(parseInt($("#question-1 option:selected").val()));
  $("#button-1").prop("disabled",true);
  $("#question-1").prop("disabled",true);
});
$("#button-2").click( function(){
  person.scores.push(parseInt($("#question-2 option:selected").val()));
  $("#button-2").prop("disabled",true);
  $("#question-2").prop("disabled",true);
});        
$("#button-3").click( function(){
  person.scores.push(parseInt($("#question-3 option:selected").val()));
  $("#button-3").prop("disabled",true);
  $("#question-3").prop("disabled",true);
});
$("#button-4").click( function(){
  person.scores.push(parseInt($("#question-4 option:selected").val()));
  $("#button-4").prop("disabled",true);
  $("#question-4").prop("disabled",true);
});
$("#button-5").click( function(){
  person.scores.push(parseInt($("#question-5 option:selected").val()));
  $("#button-5").prop("disabled",true);
  $("#question-5").prop("disabled",true);
});
$("#button-6").click( function(){
  person.scores.push(parseInt($("#question-6 option:selected").val()));
  $("#button-6").prop("disabled",true);
  $("#question-6").prop("disabled",true);
});
$("#button-7").click( function(){
  person.scores.push(parseInt($("#question-7 option:selected").val()));
  $("#button-7").prop("disabled",true);
  $("#question-7").prop("disabled",true);
});
$("#button-8").click( function(){
  person.scores.push(parseInt($("#question-8 option:selected").val()));
  $("#button-8").prop("disabled",true);
  $("#question-8").prop("disabled",true);
});
$("#button-9").click( function(){
  person.scores.push(parseInt($("#question-9 option:selected").val()));
  $("#button-9").prop("disabled",true);
  $("#question-9").prop("disabled",true);
});
$("#button-10").click( function(){
  person.scores.push(parseInt($("#question-10 option:selected").val()));
  $("#button-10").prop("disabled",true);
  $("#question-10").prop("disabled",true);
});        

console.log(person.scores);

});//doc ready