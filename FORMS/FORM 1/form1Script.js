		function validateForm() {
  		var fName = document.getElementById('fname').value;
  		var lName = document.getElementById('lname').value;
  		var email = document.getElementById('user_email').value;
  		var telPhone = document.getElementById('phone').value;

			if (fName === null || fName === "") {
    			document.getElementById('error1').innerHTML = "Invalid Entry";
  			} 
  		else if (lName === null || lName === "") {
  				document.getElementById('error1').innerHTML = "";
    			document.getElementById('error2').innerHTML = "Invalid Entry";
    		}
    	else if (email === null || email === "") {
    			document.getElementById('error2').innerHTML = "";
    			document.getElementById('error3').innerHTML = "Invalid Entry";
  			}
  		else if (telPhone === null || telPhone === "") {
  				document.getElementById('error3').innerHTML = "";
    			document.getElementById('error4').innerHTML = "Invalid Entry";
  			}
  		else
    		alertBox();
}
	  function alertBox(){
			alert("The form is complete");
			document.getElementById("myForm").reset();
			document.getElementById('error1').innerHTML = "";
			document.getElementById('error2').innerHTML = "";
			document.getElementById('error3').innerHTML = "";
			document.getElementById('error4').innerHTML = "";
		}