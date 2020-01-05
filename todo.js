//check off todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete todo by clicking x
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add to dos with input
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");

    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});