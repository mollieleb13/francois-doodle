
    var contacts = []; // contacts array to store fan club members
function fanData(){   
    // Clears out display each time "Join fun" is clicked so the array elements aren't repeated
    document.getElementById('fanClub').innerHTML = " ";
    document.getElementById('franFact').innerHTML = " ";
    // Fan Club Mailing List and Information
    // A message prompt will show up on screen asking for user input
    // User input will be stored in person array
    var firstName = prompt("Enter first name");
    var lastName = prompt("Enter last name");
    var emailID = prompt("Enter Email ID");
    var funFact = prompt("What do you love most about Francois?");
    var person ={first : firstName, last : lastName, email : emailID, fact : funFact}
    // push() to add new info in contacts array
    contacts.push(person);  
    // displays array in console
    console.log(contacts);
    // show fan club first names as more and more people sign up
    document.getElementById('whoElse').innerHTML = "Francois Fan Club Founding Friends:";
    // using for, goes through array and displays names of all those in club
    for(i=0;i<contacts.length;i++){
        document.getElementById('fanClub').innerHTML += contacts[i].first+"    ";
    }
    // using for again, goes through contacts array and displays fun facts
    document.getElementById('factoids').innerHTML = "What fan's say about Francois:";
    for(j=0;j<contacts.length;j++){
        document.getElementById('franFact').innerHTML += contacts[j].fact+" ";
    }

}