// to add more relationships on pressing the add button using innerHTML

function addMore() {
    let addRelationship = document.getElementById("addRelationship");
    let divElement = document.createElement("div");
    divElement.innerHTML = 
        '<h4 class = "mb-3" >' + 'Relationship 2' + '</h4>' + 
        '<div class = "mb-3">' + '<label for = "position2" >' + 'Position' + '</label>' + '<input type = "text" class = "form-control" id = "position2" placeholder = "Partners/Friends with Benefits" required >' + '</div>' + 
        '<div class = "row">' + '<div class = "col-md-4 mb-3" >' + '<label for = "Length2">' + 'Length of relationship' + '</label>' + '</div>' + '</div>' + 
        
        '<div class = "row">' + 
        
        '<div class = "col-md-4 mb-3" >' + '<label for = "years2" >' + 'Years' + '</label>' + 
        '<select class="custom-select d-block w-100" id="years2" required>' + 
        '<option value = "" >' + 'Choose... ' + '</option>' + 
        '<option>' + '0' + '</option>' + 
        '<option>' + '1' + '</option>' + 
        '<option>' + '2' + '</option>' + 
        '<option>' + '3' + '</option>' + 
        '<option>' + '4' + '</option>' + 
        '<option>' + '5' + '</option>' + 
        '<option>' + '6' + '</option>' + 
        '<option>' + '7' + '</option>' + 
        '<option>' + '8' + '</option>' + 
        '<option>' + '9' + '</option>' + 
        '<option>' + '10' + '</option>' + 
        '<option>' + '11' + '</option>' + 
        '<option>' + '12' + '</option>' + 
        '</select >' + '</div>' + 
        
        '<div class = "col-md-4 mb-3" >' + '<label for = "months2" >' + 'Months' + '</label>' + 
        '<select class = "custom-select d-block w-100" id = "months2" required>'+
        '<option value = "" >' + 'Choose... ' + '</option>' + 
        '<option>' + '0' + '</option>' + 
        '<option>' + '1' + '</option>' + 
        '<option>' + '2' + '</option>' + 
        '<option>' + '3' + '</option>' + 
        '<option>' + '4' + '</option>' + 
        '<option>' + '5' + '</option>' + 
        '<option>' + '6' + '</option>' + 
        '<option>' + '7' + '</option>' + 
        '<option>' + '8' + '</option>' + 
        '<option>' + '9' + '</option>' + 
        '<option>' + '10' + '</option>' + 
        '<option>' + '11' + '</option>' + 
        '<option>' + '12' + '</option>' + 
        '</select >' + '</div>' + 
        
        '<div class = "col-md-4 mb-3">'+ '<label for = "weeks2">'+'Weeks' + '</label>' + 
        '<select class = "custom-select d-block w-100" id = "weeks2" required>'+
        '<option value = "" >' + 'Choose... ' + '</option>' + 
        '<option>' + '0' + '</option>' + 
        '<option>' + '1' + '</option>' + 
        '<option>' + '2' + '</option>' + 
        '<option>' + '3' + '</option>' + 
        '<option>' + '4' + '</option>' +
        '</select >' + '</div>' +
        '</div>' +
        
        '<div class = "row">' +     
        
        '<div class = "col-md-4 mb-3">' +
        '<label for = "description2">' + 'Describe Partner'+ '</label> ' +
        '<input type = "text" class = "form-control" id = "description2" placeholder = "Colleague/Friend/Schoolmate" required>'+
        '</div> ' + 

        '<div class = "col-md-4 mb-3" >' +
        '<label for = "termination2" >' + 'Cause for termination' + '</label>' + 
        '<input type = "text" class = "form-control" id = "termination2" placeholder = "Drifted away/Disagreement" required>' + 
        '</div> '+ 

        '<div class = "col-md-4 mb-3" >' + 
        '<label for = "interpstatus2" >' + 'Current inter - personal status' + '</label>' +
        '<input type = "text" class = "form-control" id = "interpstatus2" placeholder = "Still friends/sworn enemies" required>' + 
        '</div>' + 
    
        '</div>' + 
        '<hr class = "mb-4">'
    addRelationship.appendChild(divElement);
} 

