$(document).ready(function(){
	// Varialbes Used for Logic Go Below:
    var list =[];
	// Your Code Goes Here!
    $("#add").click(function(){
            if($("#input").val() != ""){
            list.push($("#input").val());
            $("#input").val("");
            updateList();
        }
    });
    function updateList(){
        $("ol").html("");
        var count = 0;
        list.forEach(function(d,i){ 
           $("ol").append("<li data-index = '" + i + "'>" + d + '<button class = "delete" data-index = "' + i + '">-</button></li>' );
        });
    $(".delete").click(function(){
        list.splice(parseInt($(this).data("index")), 1);
        updateList();
        });
    $("li").click(function(){
        if($("#input").val() != ""){
            list[$(this).data("index")] = $("input").val();
            updateList();
            $("#input").val("");
        }
    });    
    }
});