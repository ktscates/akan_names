// Declaring variables for female and male names.
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// Create a function that will be called whenever you hit the submit button.
function akanNames(){

    // Declare date inputs and get its values.
    var DD=parseFloat(document.getElementById("dd").value);
    var MM=parseFloat(document.getElementById("mm").value);
    var YY=parseFloat(document.getElementById("yy").value);

    // calculate the century.
    var CC=(YY-1)/100+1;

    // formula that calculate the specific day of your birthday
    var dayOfWeek=Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    var theGender=document.getElementById("gender");
    
    // check if a radio button has been checked.
    if(theGender.checked){

        // get value from radio button.
        var theValue = theGender.value;
        
    }

    // check if the value return female or male then display the corresponding akan name.
    if(theValue==="female"){

        var akanName=document.getElementById("display").innerHTML=femaleNames[dayOfWeek];

    }else{
        
        var akanName=document.getElementById("display").innerHTML="your akan name is: "+maleNames[dayOfWeek];
    }
}