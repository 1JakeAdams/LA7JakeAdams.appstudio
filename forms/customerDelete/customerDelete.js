btnDelete.onclick = function() {
    let nameDelete = inptCustomerDelete.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (nameDelete == results[i][1]) {
            found = true
            break
        }
    }
    if (found == false)
        lblDelete.value = "That customer name is not in the database."
    else if (found == true) {
        query = "DELETE FROM customer WHERE name = '" + nameDelete + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=wfg15722&query=" + query)
        if (req.status == 200)
            if (req.responseText == 500)
                lblDelete.value = `You have deleted the customer named ${nameDelete}`
        else
            lblDelete.value = `You were unable to delete ${nameDelete} from the database.`
        else
            lblDelete.value = `Error: ${req.status}`
    }
}