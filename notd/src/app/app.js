function disp_date() {
	var d = new Date();
	document.getElementById("demo").innerHTML = d.toLocaleDateString(); 
}
document.addEventListener("DOMContentLoaded", function(event) { 
 console.log(event);
 disp_date();
});

	

	