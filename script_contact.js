function Submit(){
    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let country = document.getElementById("country")
    let subject = document.getElementById("subject")
    if (firstname.value != "" && firstname.value != " ") {
        if (lastname.value != "" && lastname.value != " ") {
            if (country.value != "" && country.value != " ") {
                if (subject.value != "" && subject.value != " ") {
                    alert("Diese Funkltion ist leider noch nicht verfügbar !!")
                    location.reload()
                }
                else{
                    alert("Sie haben vergessen Subject auszufüllen !!")
                }

            }
            else{
                alert("Sie haben vergessen Country auszufüllen !!")
            }
        }
        else{
            alert("Sie haben vergessen Lastname auszufüllen !!")
        }
    }
    else{
        alert("Sie haben vergessen Firstname auszufüllen !!")
    }
    
}


