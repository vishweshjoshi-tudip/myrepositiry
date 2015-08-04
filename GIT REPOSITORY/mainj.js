var datanew= "1000";
$(document).ready(function(){
	$.getJSON( "mainj.json", function(data){
        $.each(data, function(i,value){
            $("#tbodymain").append("<tr id="+i+"><td><input type=text class = "+i+" name='ffname' value="+value.FirstName+" disabled></td><td><input type=text class = "+i+" name='llname' value="+value.LastName+" disabled></td><td><input type=text class = "+i+" name='rroll' value="+value.RollNo+" disabled></td><td><input type=text class = "+i+" value="+value.Subject.sub1+","+value.Subject.sub2+","+value.Subject.sub3+" disabled></td><td><input type='button' value='Delete' onclick='deleter("+i+")'></td><td><input type='button' name='edit' value='Edit' onclick='editer("+i+")'></td><td><input type='button' name='save' value='Save' onclick='saver("+i+")'></td></tr>");            
        });
    });
    
 	$("#addition").click(function(){
 		var fav = [];
		$.each($("input[name='subject']:checked"),function(){
 			fav.push($(this).val());
 		});
 		var sub = fav.join(",");
		var x = document.getElementsByName("fname")[0].value;
	    var x1 = document.getElementsByName("lname")[0].value;
	    var x2 = document.getElementsByName("roll")[0].value;
	    if (x!=""&&x1!=""&&x2!=""&&sub!="") {
	    	$("#tbodymain").append('<tr id='+datanew+'><td><input type=text class = '+datanew+' value='+x+" disabled></td><td><input type=text class = "+datanew+" value="+x1+" disabled></td><td><input type=text class = "+datanew+" value="+x2+" disabled></td><td><input type=text class = "+datanew+" value="+sub+" disabled></td><td><input type='button' value='Delete' onclick='deleter("+datanew+")'></td><td><input type='button' name='edit' value='Edit' onclick='editer("+datanew+")'></td><td><input type='button' name='save' value='Save' onclick='saver("+datanew+")'</td></tr>");
	    datanew=datanew+"1";
	    } else {
	    	alert("All field's are compulsory")
	    }
	    $("#fname").value = "";
	    $("#lname").value = "";
	    $("#roll").value = "";
	    $('input:checkbox').removeAttr('checked');
	});
});

function deleter(id){
	var rowid;
	rowid=id;
	var row = document.getElementById(rowid);
	var v= confirm("Are you sure you want to delete it?");
	if(v==true){
		row.parentNode.removeChild(row);  
	}
}

function editer(id){
	var v= confirm("Do you want to edit record?")
	if(v==true){
		$('.' +id).prop("disabled", false);
	}
}

function saver(id){
	var v= confirm("Are you sure you want to save it?")
	if(v==true){
		$('.' +id).prop("disabled", true);	
	}
}
