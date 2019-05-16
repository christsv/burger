$(document).ready(function(){

    $(".add-burger-form").on("submit", function(event){

        event.preventDefault();

        var newBurger = { 
            burger_name: $("#burger-text").val().trim(),

        };

        $.ajax("/burgers/create",{
            type: "POST",
            data: newBurger
        }).then(
            function(res){
                console.log("created: " + res);
                location.reload();
            }
        )
    });

    // important. earlier we made it an id which is unique to one therefore would respond to other blocks besides the first
    // changed to class which covers all buttons for listeners
    $(".devour-button").on("click", function(event){
        // taking break. hit works that means you have to run the put routes
        var id = $(this).data("id");

        // this handles the ajax but need to route it and render! 
        // purpose of this is to reload the page!!
        $.ajax("/burgers/create/" + id,{
            type: "PUT"
        }). then(
            function(){
                console.log("burger ate");
                location.reload();
            }
        )

    });
    
})