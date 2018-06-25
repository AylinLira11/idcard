function generateID() {

    // First Name

    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
    document.getElementById("firstNameCard").innerHTML = userFirstName;

   //Last Name

   let userLastName = document.getElementById("lastName") .value;console.log(userLastName); document.getElementById("lastNameCard").innerHTML = userLastName;

  //Age

  let userAge = document.getElementById("age")
  .value;console.log(userAge); document.getElementById("ageCard").innerHTML = userAge;



  //Phone Number

 let userPhoneNumber = document.getElementById("phoneNumber")
 .value;console.log(userPhoneNumber); document.getElementById("phoneNumberCard").innerHTML = userPhoneNumber;

  //Address

 let userAddress = document.getElementById("address") .value;console.log(userAddress); document.getElementById("addressCard").innerHTML = userAddress;


}
