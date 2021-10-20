btnSubmit.onclick = function() {
    name = inptName.value
    address = inptAddress.value
    city = inptCity.value
    state = inptState.value
    zipcode = inptZipcode.value
    query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "');"
    

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=jma48977&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            LabelAdd.value = "You have added the customer!"
        else
            LabelAdd.value = "There was a problem with adding the customer to the database."
    } else
        LabelAdd.value = "Error: " + req.status
}
btnDisplay.onclick = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
 
 if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        console.log(`the results are \n ${results}`)
        if (results.length == 0)
            LabelAdd.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            LabelAdd.value = message
        } 

    } else
        labelAdd.value = "Error code: " + req.status
}
