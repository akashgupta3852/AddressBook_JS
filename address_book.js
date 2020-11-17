console.log("Welcome to Address Book Problem");
class ContactDetails{
    // Property
    firstName;
    lastname;
    address;
    city;
    state;
    zip;
    phone;
    email;

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastname  = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    // getter and setter methods
    get firstName(){
        return this.firstName;
    }

    get lastname(){
        return this.lastname;
    }

    get address(){
        return this.address;
    }

    get city(){
        return this.city;
    }

    get state(){
        return this.state;
    }

    get zip(){
        return this.zip;
    }

    get phone(){
        return this.phone;
    }

    get email(){
        return this.email;
    }

    set changeFirstName(firstName){
        this.firstName = firstName;
    }

    set changeLastname(lastname){
        this.lastname = lastname;
    }

    set changeAddress(address){
        this.address = address;
    }

    set changeCity(city){
        this.city = city;
    }

    set changeState(state){
        this.state = state;
    }

    set changeZip(zip){
        this.zip = zip;
    }

    set changePhone(phone){
        this.phone = phone;
    }

    set changeEmail(email){
        this.email = email;
    }

    //toString Method
    toString(){
        return "First Name: " + this.firstName + ", Last Name: " + this.lastname + ", Address: " 
                + this.address + ", City: " + this.city + ", State: " + this.state + ", Zip: " 
                + this.zip + ", Phone number: " + this.phone + ", Email: " + this.email;
    }
}
let newContactDetails = new ContactDetails("Akash", "Gupta" , "Gudari Bazar" , "Rasra" , "U.P." , 221712 , 9559473852 , "akashgupta3852@gmail.com");
console.log(newContactDetails.toString());