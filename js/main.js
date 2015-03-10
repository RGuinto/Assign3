$(document).ready(function(){
    $('#title').focus();
    $('#text').autosize();

    var food = ["BANANA","APPLE"];
    var len = food.length;
    for (var i=0;i<len;i++){

        food.push(food[i].toLowerCase());

    }
});