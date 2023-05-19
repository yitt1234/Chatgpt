$('#bad').click(function(){
    $("#something").hide();
    $("#504").hide();
    $("#505").hide();
    $("#506").show();

})
$("#506").hide();
$('#good').click(function(){
    $("#something").show();
    $("#504").show();
    $("#505").show();
    $("#506").hide();
})
