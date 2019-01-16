// Check off specific todos by clicking
//We are adding eventlisteners to elements when the page loads so that we can account for elements that aren't there yet inside the element with the eventlistener
$("ul").on("click", "li", function(){
    //if li is gray
    //console.log($(this).css("color"));
    /*if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it back
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }  
    //else 
    else{
        //turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }*/
    $(this).toggleClass("completed");
});

//click on X to delete a todo
//We are adding eventlisteners to elements when the page loads so that we can account for elements that aren't there yet inside the element with the eventlistener
$("ul").on("click", "span", function(event){
    //remove the parent li o the span that is selected
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //stop function to bubble up to it's parent
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = ($(this).val());
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>  " + todoText+ "</li>");
    }
});

//this function is used to fadeout the input by using a button and toggle in between the states
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});