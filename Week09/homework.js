function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["age"].value;
    
    if (x == "") {
      alert("Please fill in your name.");
      return false;
    }else if(y == ""){
        alert("Please enter your age.")
        return false;
    }else if(y < 18){
        alert("Age is less than 18. Your are not an adult!");
        return false;
    }
  }