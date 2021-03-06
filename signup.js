function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pin = document.getElementById("PIN").value;
  let address = document.getElementById("address").value;
  let data = JSON.stringify({ name, email, phone, pin, address });
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name == "") {
    document.getElementById("errorname").innerHTML = "*Name cannot be empty";
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
  if (email == "") {
    document.getElementById("errormail").innerHTML = "*Email cannot be empty";
  } else if (
    //it is better to save regex in a variable and use that inside a conditional statement
    !email.match(emailRegex)
  ) {
    document.getElementById("errormail").innerHTML =
      "*Please enter a valid email address";
  } else {
    document.getElementById("errormail").innerHTML = "";
  }
  if (phone == "") {
    document.getElementById("errorphone").innerHTML =
      "*Phone number cannot be empty";
  } else if (isNaN(phone) || phone.length != 10) {
    document.getElementById("errorphone").innerHTML =
      "*Please enter a valid phone number";
  } else {
    document.getElementById("errorphone").innerHTML = "";
  }
  if (pin.length > 0 && pin.length < 6) {
    document.getElementById("errorpin").innerHTML =
      "Please enter a valid pincode";
  } else {
    document.getElementById("errorpin").innerHTML = "";
  }

  if (
    name == "" ||
    email == "" ||
    !email.match(emailRegex) ||
    phone == "" ||
    isNaN(phone) ||
    phone.length != 10
  ) {
    data = null;
  }

  data.length ? alert(data) : !alert();
}
