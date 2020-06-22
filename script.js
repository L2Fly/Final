function validate () {
  alert("Submitted Correctly")
  var text1 = document.getElementById("username");
  var text2 = document.getElementById("pass");
  var text3 = document.getElementById("confirm");
  var text4 = document.getElementById("legal");
  
  var errormessage1 ="";
  var errormessage2 ="";
  var errormessage3 ="";
  var errormessage4 ="";
  
  var notcongrats = "";
  
  if (document.getElementById("username").value != ("FinalUsername")){
    errormessage1 += "Incorrect Username!";
    
  }
  
  if (errormessage1 != "") {
    alert (errormessage1);
    return false;
  }
    //////////////////////////////////////////////////////////////////
  
  if (document.getElementById("pass").value != ("finalPassword")){
    errormessage2 += "Incorrect Password!";
    
  }
  
  if (errormessage2 != "") {
    alert (errormessage2);
    return false;
  }
///////////////////////////////////////////////////////////////////////////////
 if (text2.value =="finalPassword" && text3.value =="finalPassword")
  {
    alert (errormessage3);
    return false;
  }  
  else 
  {
    alert ("Passwords do not match!");
  }  
//////////////////////////////////////////////////////////////////////////////////  
  document.querySelecotr(".legal").innerHTML = text4;
  
  text4 =text4.toString();
  text4 =Math.ceil(text4);
  writeNumber();
  
///////////////////////////////////////////////////////////////
  var x =document.getElementById("myBtn");
if (x.addEventListener){
  x.addEventListener("click", validate);
} else if (x.attachEvent){
  x.attachEvent("onclick", validate);
  alert("Submitted Correctly")
}

}