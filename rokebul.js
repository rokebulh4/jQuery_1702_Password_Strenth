$(document).ready(function(){
    $("#mpass").keypress(function(){
        var plength=$(this).val().length;
        if(plength<1){
            $(".malert").text("");
            $(".malert").removeClass("red");
            $(".malert").removeClass("green");
            $(".malert").removeClass("yellow");
        }
        else if(plength<8){
            $(".malert").text("Password must be at least 8 digit!");
            $(".malert").addClass("red");
            $(".malert").removeClass("green");
            $(".malert").removeClass("yellow");
        }
        else if(plength<=11){
            $(".malert").text("Password strength is good!");
            $(".malert").addClass("yellow");
            $(".malert").removeClass("green");
            $(".malert").removeClass("red");
        }
        else{
            $(".malert").text("Password strength is strong !");
            $(".malert").addClass("green");
            $(".malert").removeClass("red");
            $(".malert").removeClass("yellow");
        }
    });
});