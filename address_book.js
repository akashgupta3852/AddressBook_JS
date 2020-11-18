console.log("Welcome to Address Book Problem");
class ContactDetails{
    // Property
    firstName;
    lastname;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastname  = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    // getter and setter methods
    get getFirstName(){
        return this.firstName;
    }

    get getLastName(){
        return this.lastname;
    }

    get getAddress(){
        return this.address;
    }

    get getCity(){
        return this.city;
    }

    get getState(){
        return this.state;
    }

    get getZip(){
        return this.zip;
    }

    get getPhoneNo(){
        return this.phoneNo;
    }

    get getEmail(){
        return this.email;
    }

    set setFirstName(firstName){
        this.firstName = firstName;
    }

    set setLastName(lastname){
        this.lastname = lastname;
    }

    set setAddress(address){
        this.address = address;
    }

    set setCity(city){
        this.city = city;
    }

    set setState(state){
        this.state = state;
    }

    set setZip(zip){
        this.zip = zip;
    }

    set setPhoneNo(phoneNo){
        this.phoneNo = phoneNo;
    }

    set setEmail(email){
        this.email = email;
    }

    //toString Method
    toString(){
        return "First Name: " + this.firstName + ", Last Name: " + this.lastname + ", Address: " 
                + this.address + ", City: " + this.city + ", State: " + this.state + ", Zip: " 
                + this.zip + ", Phone number: " + this.phoneNo + ", Email: " + this.email + "\n";
    }

}

let newContactDetails = new ContactDetails("akash", "gupta" , "Gud" , "RSR" , "UP" , "22112" , "9559473852" , "akashgupta3852@com");
console.log(newContactDetails.toString());

// Failure case of First Name
try {
    checkName(newContactDetails.getFirstName);
} catch(e) {
  console.error(e);
}

newContactDetails.setFirstName = "Akash";
try {
    if(checkName(newContactDetails.getFirstName));
        console.log(newContactDetails.toString());
} catch(e) {
  console.error(e);
}

// Failure case of Last Name
try {
    checkName(newContactDetails.getLastName);
} catch(e) {
  console.error(e);
}

newContactDetails.setLastName = "Gupta";
try {
    if(checkName(newContactDetails.getLastName));
        console.log(newContactDetails.toString());
} catch(e) {
  console.error(e);
}

// Failure case of Address
try {
    checkAddress(newContactDetails.getAddress);
} catch(e) {
  console.error(e);
}

newContactDetails.setAddress = "Gudari Bazar";
try {
    if(checkAddress(newContactDetails.getAddress));
        console.log(newContactDetails.toString());
} catch(e) {
  console.error(e);
}

// Failure case of City
try {
    checkCity(newContactDetails.getCity);
} catch(e) {
  console.error(e);
}

newContactDetails.setCity = "Rasra";
try {
    if(checkCity(newContactDetails.getCity));
        console.log(newContactDetails.toString());
} catch(e) {
  console.error(e);
}

// Failure case of State
try {
    checkState(newContactDetails.getState);
} catch(e) {
  console.error(e);
}

newContactDetails.setState = "U.P.";
try {
    if(checkState(newContactDetails.getState));
        console.log(newContactDetails.toString());
} catch(e) {
  console.error(e);
}

// Failure case of Zip
try {
    checkZip(newContactDetails.getZip);
} catch(e) {
    console.error(e);
}

newContactDetails.setZip = "221712";
try {
    if(checkZip(newContactDetails.getZip));
        console.log(newContactDetails.toString());
} catch(e) {
    console.error(e);
}

// Failure case of Phone Number
try {
    checkPhoneNo(newContactDetails.getPhoneNo);
} catch(e) {
    console.error(e);
}

newContactDetails.setPhoneNo = "91 9559473852";
try {
    if(checkPhoneNo(newContactDetails.getPhoneNo));
        console.log(newContactDetails.toString());
} catch(e) {
    console.error(e);
}

// Failure case of Email
try {
    checkEmail(newContactDetails.getEmail);
} catch(e) {
    console.error(e);
}

newContactDetails.setEmail = "akashgupta3852@gmail.com";
try {
    if(checkEmail(newContactDetails.getEmail));
        console.log(newContactDetails.toString());
} catch(e) {
    console.error(e);
}

// Function to check Name
function checkName(name) {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if(name.match(nameRegex))
        return true;
    else
        throw "Name: " + name + " is incorrect";
}

// Function to check Address
function checkAddress(address) {
    let addressRegex = RegExp('^[A-Z][A-Za-z ]{3,}$');
    if(address.match(addressRegex))
        return true;
    else
        throw "Address: " + address + " is incorrect";     
}

// Function to check City
function checkCity(city) {
    let cityRegex = RegExp('^[A-Z][a-z]{3,}$');
    if(city.match(cityRegex))
        return true;
    else
        throw "City: " + city + " is incorrect";     
}

// Function to check State
function checkState(state) {
    let stateRegex = RegExp('^[A-Z][A-Za-z. ]{3,}$');
    if(state.match(stateRegex))
        return true;
    else
        throw "State: " + state + " is incorrect";     
}

// Function to check Zip
function checkZip(zip) {
    let zipRegex = RegExp('^[0-9]{6}$');
    if(zip.match(zipRegex))
        return true;
    else
        throw "Zip: " + zip + " is incorrect";     
}

// Function to check Phone Number
function checkPhoneNo(phoneNo) {
    let phoneNoRegex = RegExp("^[0-9]{2}[\\s]{1}[6-9][0-9]{9}$");
    if(phoneNo.match(phoneNoRegex))
        return true;
    else
        throw "Phone No: " + phoneNo + " is incorrect";     
}

// Function to check Email
function checkEmail(email) {
    let emailRegex = RegExp("^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$");
    if(email.match(emailRegex))
        return true;
    else
        throw "Email: " + email + " is incorrect";     
}

console.log("The list of contact details is as follows:");
let contactsArray = new Array();
contactsArray.push(newContactDetails);
let newContactDetails2 = new ContactDetails("Diksha", "Gupta" , "Lanka" , "Varanasi" , "U.P." , "221004" , "91 9044589948" , "dikshagupta3852@gmail.com");
contactsArray.push(newContactDetails2);

for(let contactDetails of contactsArray) 
    console.log(contactDetails.toString());

// Function to check whether contact exists or not
function isPresent(name) {
    for(let contactDetails of contactsArray) {
        if(name == contactDetails.getFirstName + " " + contactDetails.getLastName)
            return true;
    }
    return false;
}

// Function to edit the Contact Details
function editContactDetails(name) {
    let newContactDetails = new ContactDetails("Diksha", "Gupta" , "Chowka Ghat" , "Varanasi" , "U.P." , "221004" , "91 9044589948" , "dikshagupta123@iimb.ac.in");
    let index = 0;
    for(let contactDetails of contactsArray) {
        if(name == contactDetails.getFirstName + " " + contactDetails.getLastName) {
            contactsArray.splice(index, 1, newContactDetails);
            console.log("The contact details of " + name + " is edited.\n");
            return;
        }
        index++;
    }
}

// Radhika's contact is not present in the contacts array
let name = "Radhika Gupta";
if(isPresent(name))
    editContactDetails(name);
else
    console.log(name + " is not present in the address book\n");

// Editing the contact of Diksha's contact in the address book
name = "Diksha Gupta";
if(isPresent(name))
    editContactDetails(name);
else
    console.log(name + " is not present in the address book\n");

console.log("After editing, the list of contact details is as follows:");
for(let contactDetails of contactsArray) 
    console.log(contactDetails.toString());

// Function to delete the Contact Details
function deleteContactDetails(name) {
    let index = 0;
    for(let contactDetails of contactsArray) {
        if(name == contactDetails.getFirstName + " " + contactDetails.getLastName) {
            contactsArray.splice(index, 1);
            console.log("The contact details of " + name + " is deleted.\n");
            return;
        }
        index++;
    }
}

// Deleting the contact of Akash Gupta's contact in the address book
name = "Akash Gupta";
if(isPresent(name))
    deleteContactDetails(name);
else
    console.log(name + " is not present in the address book\n");

console.log("After deleting, the list of contact details is as follows:");
for(let contactDetails of contactsArray) 
    console.log(contactDetails.toString());

// Function to count the number of all Contact Details
function countNumOfContactDetails() {
    return contactsArray.length;
}

// Finding the number contact details in the address book
console.log("The no. of contact details in the address book is " + countNumOfContactDetails());