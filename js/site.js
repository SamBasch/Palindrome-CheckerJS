
//entry point
function getUserInput() {
    let userInput = document.getElementById('userString').value;

    if(userInput != "") {



                
        let trimmedText = regularExpression(userInput);

        let revString = reverseTheString(trimmedText);

        PalindromeeChecker(trimmedText, revString);



    } else {


        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'please enter a word to check!'
    
            }
        );




    }

   
    

    
}






//this function takes the user input and trmis off any non alphabet characters and all whitespace then returns the trimmed string back to entry point function
function regularExpression(stringToTrim) {

    let txt_new = stringToTrim.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return txt_new;

}

//this function takes the string that was trimmed by the regular expression function and reverses the string
function reverseTheString(string) {
    
    let startingArray = string.split('');

    let reverseArray = [];

    for (let i = 0; i < startingArray.length; i++) {

        reverseArray.unshift(startingArray[i]);
    }
    return reverseArray.join('');
}

//Palindrome Verifier Function 

function PalindromeeChecker(stringToCheck, reversedString) {

    let alert = document.getElementById('alertBad');
    alert.classList.remove('alert-success');
    alert.classList.remove('alert-danger');


    

    

    if (stringToCheck !== reversedString) {

      alert.classList.add("alert-danger")
      messageSpot.textContent = "Oh no! It's not a palindrome!";
    } else {

        alert.classList.add("alert-success")
        messageSpot.textContent = "Your phrase is a palindrome!";

      

    }
    alert.classList.remove('invisible')

    
}











