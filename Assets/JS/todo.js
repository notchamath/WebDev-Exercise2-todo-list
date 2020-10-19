//cross out tasks by clicking 
$("ul").on("click","li",function(){ //ul is parent but we only listening to li
   $(this).toggleClass("completed");


    // if($(this).css("color")==="rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none"
    //     });
    // }else{
    //     $(this).css({
    //         color:"grey",
    //         textDecoration:"line-through"
    //     });
    // }
});

//delete todos with x
$("ul").on("click","span",function(event){
    event.stopPropagation();                //stops other listeners from acting then this one does
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
})

//hit enter key to add new task
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i>   </span>"+todoText+"</li>");
    }
})

$("#add").click(function(){
    $("input[type='text']").fadeToggle();
})