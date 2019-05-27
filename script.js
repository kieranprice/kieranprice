$(".tile").mouseenter(function(event){
$(event.target).removeClass("initial");
$(event.target).addClass("expanded");
$(".container p").addClass("hidden");
console.log(event.target);
});

$(".tile").mouseleave(function(event){
    $(event.target).removeClass("expanded");
    $(event.target).addClass("initial");
});

function startup() {
    
    
}

