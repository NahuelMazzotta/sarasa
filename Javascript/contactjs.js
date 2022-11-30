function submit(){
    let fname = document.getElementById ("fname");
    let fnameError = document.getElementById("fnameError");
    let lname = document.getElementById ("lname");
    let lnameError = document.getElementById ("lnameError");
    let country = document.getElementById ("country");
    let countryError = document.getElementById ("countryError");
    let street = document.getElementById ("street");
    let streetError = document.getElementById ("streetError");
    let snumber = document.getElementById ("snumber");
    let snumberError = document.getElementById ("snumberError");
    let message = document.getElementById ("message");
    let messageError = document.getElementById ("messageError");
    if (validInput(fname,fnameError)&&validInput(lname,lnameError)&&validInput(country,countryError)&&validInput(street,streetError)&&validInput(snumber,snumberError)&&validInput(message,messageError)) {
        alert("Send");
    }
}
    function validInput (inputElement,inputError){
        if (inputElement.value) {
            inputElement.classList.remove("invalidfield")
            inputError.classList.add("validfield");
            return true;
            }else{
            inputElement.classList.add("invalidfield")
            inputError.classList.remove("validfield");
            return false;
        }
    }