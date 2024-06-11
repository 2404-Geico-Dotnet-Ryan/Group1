
//Base URL
const BASE_URL = "http://localhost:5123";

let current_user = {};

// User Container Div
const userContainerDiv = document.querySelector("#user-authorization-container");
const allPetsContainerDiv = document.querySelector("#all-pets-container");
const allPersonsContainerDiv = document.querySelector("#all-persons-container");

//-----------------------------------//
// Login Container Creation Function //
//-----------------------------------//
function GenerateLoginContainer() {
    // Create the main Login container div
    let loginDiv = document.createElement("div");
    loginDiv.id = "login-container";

    // Create header for Login Seciton 
    let loginHeader = document.createElement("h2");
    loginHeader.type = 'text';
    loginHeader.textContent = "Testing System User Login"

    // Create the UserName input field and label
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = "Enter UserName"; //add default text in field
    usernameInput.setAttribute("required","required")//makes field required 
    usernameInput.id = 'username-input';
    usernameInput.style.display = 'block';

    let usernameInputLabel = document.createElement('label');
    usernameInputLabel.textContent = "Username";

    // Create the UserPassword input field and label
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = "Enter Password"; //add default text in field
    passwordInput.setAttribute("required","required")//makes field required 
    passwordInput.id = 'password-input';
    passwordInput.style.display = 'block';

    let passwordInputLabel = document.createElement('label');
    passwordInputLabel.textContent = "Password";

    // Create the Login button
    let loginButton = document.createElement('button');
    loginButton.textContent = "Login";

    // Append the Login container to the main container
    userContainerDiv.appendChild(loginDiv);

    // Append the UserName and UserPassword fields and labels to the Login container
    loginDiv.appendChild(loginHeader);
    loginDiv.appendChild(usernameInputLabel);
    loginDiv.appendChild(usernameInput);
    loginDiv.appendChild(passwordInputLabel);
    loginDiv.appendChild(passwordInput);
    loginDiv.appendChild(loginButton);

    // Add an event listener to the Login button to handle login
    loginButton.addEventListener("click", GetLoginInformation);
}

// Function to tear down the login container
function TeardownLoginContainer() {
    // Find the login container
    let loginDiv = document.querySelector("#login-container");

    // If the login container exists, remove all its children
    if (loginDiv != null) {
        while (loginDiv.firstChild) {
            loginDiv.firstChild.remove();
        }
    }
}

// Function to get login information from input fields
function GetLoginInformation() {
    let userName = document.querySelector("#username-input").value;
    let userPassword = document.querySelector("#password-input").value;

    // Call the function to log in the user
    LoginUser(userName, userPassword);
}

// Function to Log into the system user
async function LoginUser(userName, userPassword) {
    try {
        let response = await fetch(`${BASE_URL}/Login/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify({
                "userName": userName, 
                "userPassword": userPassword
            })
        });

        let data = await response.json();
        current_user = data;
        console.log(current_user);
        console.log(data);
    } catch (e) {
        console.error("Error logging in:", e); // Added error logging
    }
}

//----------------------------------------//
// New Person Container Creation Function //
//----------------------------------------//
function GenerateNewPersonContainer() {
    // Create the new Person container div
    let personDiv = document.createElement("div");
    personDiv.id = "newperson-container";

    // Create header for New Pet Parent Section 
    let personHeader = document.createElement("h2");
    personHeader.type = 'text';
    personHeader.textContent = "Testing Adding a new Person to System"

    // Select Type of Person 
    let personTypeHeader = document.createElement("h3");
    personTypeHeader.type = 'text';
    personTypeHeader.textContent = "Person Type Options - Key 1 for Employee  Key 2 for Pet Parent "
    
    let personTypeInput = document.createElement('input');
    personTypeInput.type = 'text';
    personTypeInput.id = 'personType-input';
    personTypeInput.style.display = 'block';

    let personTypeInputLabel = document.createElement('label');
    personTypeInputLabel.textContent = "Person Type";

    // Create the First Name input field and label
    let firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.id = 'firstName-input';
    firstNameInput.style.display = 'block';

    let firstNameInputLabel = document.createElement('label');
    firstNameInputLabel.textContent = "First Name";

    // Create the Last Name input field and label
    let lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'lastName-input';
    lastNameInput.style.display = 'block';

    let lastNameInputLabel = document.createElement('label');
    lastNameInputLabel.textContent = "Last Name";

    // Create the Phone Number input field and label
    let phoneNumberInput = document.createElement('input');
    phoneNumberInput.type = 'text';
    phoneNumberInput.id = 'phoneNumber-input';
    phoneNumberInput.style.display = 'block';

    let phoneNumberInputLabel = document.createElement('label');
    phoneNumberInputLabel.textContent = "Phone Number";

    // Create the Job Title input field and label
    let jobTitleInput = document.createElement('input');
    jobTitleInput.type = 'text';
    jobTitleInput.id = 'jobTitle-input';
    jobTitleInput.style.display = 'block';

    let jobTitleInputLabel = document.createElement('label');
    jobTitleInputLabel.textContent = "Job Title";

    // Create the Create New Parent button
    let personButton = document.createElement('button');
    personButton.textContent = "Create New Person";

    // Append the Person container to the main user container
    userContainerDiv.appendChild(personDiv);

    // Append the username and password fields and labels to the login container
    personDiv.appendChild(personHeader);
    personDiv.appendChild(personTypeHeader);
    personDiv.appendChild(personTypeInputLabel);
    personDiv.appendChild(personTypeInput);
    personDiv.appendChild(firstNameInputLabel);
    personDiv.appendChild(firstNameInput);
    personDiv.appendChild(lastNameInputLabel);
    personDiv.appendChild(lastNameInput);
    personDiv.appendChild(phoneNumberInputLabel);
    personDiv.appendChild(phoneNumberInput);
    personDiv.appendChild(jobTitleInputLabel);
    personDiv.appendChild(jobTitleInput);
    personDiv.appendChild(personButton);

    // Add an event listener to the login button to handle login
    personButton.addEventListener("click", GetPersonInformation);
}

// Function to get Person information from input fields
function GetPersonInformation() {
    let personType = document.querySelector("#personType-input").value;
    let firstName = document.querySelector("#firstName-input").value;
    let lastName = document.querySelector("#lastName-input").value;
    let phoneNumber = document.querySelector("#phoneNumber-input").value;
    let jobTitle = document.querySelector("#jobTitle-input").value;
   
    // Call the function to add a new person to the system
    AddNewPerson(personType, firstName, lastName, phoneNumber, jobTitle);
}

// Function to add new Person into the system
async function AddNewPerson(personType, firstName, lastName, phoneNumber, jobTitle) {
    try {
        let response = await fetch(`${BASE_URL}/Person`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify(
                {
                    "personId": 0,
                    "personType": personType,
                    "firstName": firstName,
                    "lastName": lastName,
                    "phoneNum": phoneNumber,
                    "jobTitle": jobTitle
                })
        });

        let data = await response.json();
        new_person = data;
        console.log(new_person);
        console.log(data);
    } catch (e) {
        console.error("Error Adding New Person:", e); // Added error logging
    }
}


//----------------------------------------//
// New Pet Container Creation Function    //
// This will test adding a new PET        // 
// record to the DB                       // 
// AND                                    // 
// Then add the new pets inital VISIT     //      
// record to the DB                       // 
// This test mimicks how the system works //
//----------------------------------------//
function GenerateNewPetContainer() {
    // Create the main sign up container div
    let petDiv = document.createElement("div");
    petDiv.id = "newpet-container";

    // Create header for New Pet Section 
    let petHeader = document.createElement("h2");
    petHeader.type = 'text';
    petHeader.textContent = "Tesing Adding a new Pet and thier first Visit to System"

    // Set PersonID for testing purposes 
    let personIdHeader = document.createElement("h3");
    personIdHeader.type = 'text';
    personIdHeader.textContent = "You need to find a valid PersonId from your local DB to use here"
    
    let personIdInput = document.createElement('input');
    personIdInput.type = 'text';
    personIdInput.id = 'personId-input';
    personIdInput.style.display = 'block';

    let personIdInputLabel = document.createElement('label');
    personIdInputLabel.textContent = "Person Id";

    // Create the Pet Name input field and label
    let petNameInput = document.createElement('input');
    petNameInput.type = 'text';
    petNameInput.id = 'petName-input';
    petNameInput.style.display = 'block';

    let petNameInputLabel = document.createElement('label');
    petNameInputLabel.textContent = "Pet Name";

    // Create the Pet Color input field and label
    let petColorInput = document.createElement('input');
    petColorInput.type = 'text';
    petColorInput.id = 'petColor-input';
    petColorInput.style.display = 'block';

    let petColorInputLabel = document.createElement('label');
    petColorInputLabel.textContent = "Pet Color";

    // Create the Pet Fur Type input field and label
    let petFurTypeInput = document.createElement('input');
    petFurTypeInput.type = 'text';
    petFurTypeInput.id = 'petFurType-input';
    petFurTypeInput.style.display = 'block';

    let petFurTypeInputLabel = document.createElement('label');
    petFurTypeInputLabel.textContent = "Fur Type";

    // Create the Gender input field and label
    let petGenderInput = document.createElement('input');
    petGenderInput.type = 'text';
    petGenderInput.id = 'petGender-input';
    petGenderInput.style.display = 'block';

    let petGenderInputLabel = document.createElement('label');
    petGenderInputLabel.textContent = "Pet Gender";

    // Create the Weight input field and label
    let petWeightInput = document.createElement('input');
    petWeightInput.type = 'text';
    petWeightInput.id = 'petWeight-input';
    petWeightInput.style.display = 'block';

    let petWeightInputLabel = document.createElement('label');
    petWeightInputLabel.textContent = "Pet Weight";

    // Create the Age input field and label
    let petAgeInput = document.createElement('input');
    petAgeInput.type = 'text';
    petAgeInput.id = 'petAge-input';
    petAgeInput.style.display = 'block';

    let petAgeInputLabel = document.createElement('label');
    petAgeInputLabel.textContent = "Pet Age";

    // Create the InSidePet input field and label   
    let petInsideInput = document.createElement('input');
    petInsideInput.type = 'checkbox';
    petInsideInput.id = 'petInside-input';
    //petInsideInput.style = 'text-transform:lowercase';
    petInsideInput.style.display = 'block';

    let petInsideInputLabel = document.createElement('label');
    petInsideInputLabel.textContent = "InSidePet - True or False";

    // Create the SeenBy input field and label   
    let seenByInput = document.createElement('input');
    seenByInput.type = 'text';
    seenByInput.id = 'seenBy-input';
    seenByInput.style.display = 'block';

    let seenByInputLabel = document.createElement('label');
    seenByInputLabel.textContent = "Seen By";

    // Create the Create New Pet button
    let petButton = document.createElement('button');
    petButton.textContent = "Create New Pet";

    // Append the Person container to the main user container
    userContainerDiv.appendChild(petDiv);

    // Append the username and password fields and labels to the login container
    petDiv.appendChild(petHeader);
    petDiv.appendChild(personIdHeader);
    petDiv.appendChild(personIdInputLabel);
    petDiv.appendChild(personIdInput);

    petDiv.appendChild(petNameInputLabel);
    petDiv.appendChild(petNameInput);

    petDiv.appendChild(petColorInputLabel);
    petDiv.appendChild(petColorInput);
    petDiv.appendChild(petFurTypeInputLabel);
    petDiv.appendChild(petFurTypeInput);
    petDiv.appendChild(petGenderInputLabel);
    petDiv.appendChild(petGenderInput);
    petDiv.appendChild(petWeightInputLabel);
    petDiv.appendChild(petWeightInput);
    petDiv.appendChild(petAgeInputLabel);
    petDiv.appendChild(petAgeInput);
    petDiv.appendChild(petInsideInputLabel);
    petDiv.appendChild(petInsideInput);
    petDiv.appendChild(seenByInputLabel);
    petDiv.appendChild(seenByInput);
    petDiv.appendChild(petButton);

    // Add an event listener to the login button to handle login
    petButton.addEventListener("click", GetPetInformation);
}

// Function to get Person information from input fields
function GetPetInformation() {
    let personId = document.querySelector("#personId-input").value;
    let petName = document.querySelector("#petName-input").value;
    let petColor = document.querySelector("#petColor-input").value;
    let petFurType = document.querySelector("#petFurType-input").value;
    let petGender = document.querySelector("#petGender-input").value;
    let petWeight = document.querySelector("#petWeight-input").value;
    let petAge = document.querySelector("#petAge-input").value;
    let petInside = document.querySelector("#petInside-input").checked;
    let seenBy = document.querySelector("#seenBy-input").value;
   
    // Call the function to add a new Pet to the system
    AddNewPet(personId, petName, petColor, petFurType, petGender, petWeight, petAge, petInside, seenBy);
    
    // Call the function to add a new visit to the system
    AddNewVisit(personId, petWeight, petAge, petInside, seenBy);
}

// Function to add new Pet into the system
async function AddNewPet(personId, petName, petColor, petFurType, petGender, petWeight, petAge, petInside, seenBy) {
    try {
            let response = await fetch(`${BASE_URL}/Pets`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify(
                {
                    "personId": personId,
                    "petName": petName,
                    "color": petColor,
                    "furType": petFurType,
                    "gender": petGender,
                    "weight": petWeight,
                    "age": petAge,
                    "inSidePet": petInside,
                    "appointmentDate": Date,
                    "seenBy": seenBy,
                    "rainbowBridgeDate": "0"
                })
        });

        let data = await response.json();
        new_pet = data;
        console.log(new_pet);
        console.log(data);
    } catch (e) {
        console.error("Error Adding New Pet:", e); // Added error logging
    }
}


// Function to add new Visit into the system
// This fuction uses PetID of 1001 for all testing purposes
// In the real code we will need to look up the newly added Pets ID number before adding an inital Vist to the table
async function AddNewVisit(personId, petWeight, petAge, petInside, seenBy) {
    try {
            let response = await fetch(`${BASE_URL}/Visits`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify(
                {
                    "petId": 1002,
                    "personId": personId,
                    "weight": petWeight,
                    "age": petAge,
                    "inSidePet": petInside,
                    "appointmentDate": Date,
                    "seenBy": seenBy
                })
        });

        let data = await response.json();
        new_visit = data;
        console.log(new_visit);
        console.log(data);
    } catch (e) {
        console.error("Error Adding New Visit:", e); // Added error logging
    }
}


//-----------------------------------------------------------------------//
// Generate and tear down page components                                //
//-----------------------------------------------------------------------//

//-----------------------------------------------------------------------//
// Testing the Person Controller Functions                               //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

async function GenerateAllPersonsContainer(){

    let persons = await GetAllPersons();
    for (const person of persons) {
        let elementCreated = GeneratePersonElement(person);
        allPersonsContainerDiv.appendChild(elementCreated);
    }
}

async function GetAllPersons(){
    try{
        let response = await fetch(`${BASE_URL}/Person`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

function GeneratePersonElement(person)
{
    let personElementDiv = document.createElement("div");
    personElementDiv.id = `person-${person.personId}`;

    let personIdLabel = document.createElement("h5");
    personIdLabel.textContent = person.personId;

    let personTypeLabel = document.createElement("h5");
    personTypeLabel.textContent = person.personType;

    let personFirstNameLabel = document.createElement("h5");
    personFirstNameLabel.textContent = person.firstName;

    let personLastNameLabel = document.createElement("h5");
    personLastNameLabel.textContent = person.lastName;

    let personPhoneNumLabel = document.createElement("h5");
    personPhoneNumLabel.textContent = person.phoneNum;

    let personJobTitleLabel = document.createElement("h5");
    personJobTitleLabel.textContent = person.jobTitle;

    personElementDiv.appendChild(personIdLabel);
    personElementDiv.appendChild(personTypeLabel);
    personElementDiv.appendChild(personFirstNameLabel);
    personElementDiv.appendChild(personLastNameLabel);
    personElementDiv.appendChild(personPhoneNumLabel);
    personElementDiv.appendChild(personJobTitleLabel);

    personElementDiv.style.border = "thick solid #0000FF";
    personElementDiv.style.textAlign = "center";

    return personElementDiv;

}


async function GetPersonById(id){
    try{
        let response = await fetch(`${BASE_URL}/Person/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

// Below Function calls are commented out when you do not need to run test. 
 GetAllPersons();
 GetPersonById(1008);

//-----------------------------------------------------------------------//
// Testing the Pet Controller Functions                                  //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

async function GenerateAllPetsContainer(){

    let pets = await GetAllPets();
    for (const pet of pets) {
        let elementCreated = GeneratePetElement(pet);
        allPetsContainerDiv.appendChild(elementCreated);
    }
}

async function GetAllPets(){
    try{
        let response = await fetch(`${BASE_URL}/Pets`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

function GeneratePetElement(pet)
{
    let petElementDiv = document.createElement("div");
    petElementDiv.id = `pet-${pet.petId}`;

    let petIdLabel = document.createElement("h5");
    petIdLabel.textContent = pet.petId;

    let petNameLabel = document.createElement("h5");
    petNameLabel.textContent = pet.petName;

    let petColorLabel = document.createElement("h5");
    petColorLabel.textContent = pet.color;

    let petFurTypeLabel = document.createElement("h5");
    petFurTypeLabel.textContent = pet.furType;

    let petGenderLabel = document.createElement("h5");
    petGenderLabel.textContent = pet.gender;

    let petWeightLabel = document.createElement("h5");
    petWeightLabel.textContent = pet.weight;

    let petAgeLabel = document.createElement("h5");
    petAgeLabel.textContent = pet.age;

    let petInsideLabel = document.createElement("h5");
    petInsideLabel.textContent = pet.inSidePet;

    let petAppointmentLabel = document.createElement("h5");
    petAppointmentLabel.textContent = pet.appointmentDate;

    let petSeenByLabel = document.createElement("h5");
    petSeenByLabel.textContent = pet.seenBy;

    let petRainbowLabel = document.createElement("h5");
    petRainbowLabel.textContent = pet.rainbowBridgeDate;

    petElementDiv.appendChild(petIdLabel);
    petElementDiv.appendChild(petNameLabel);
    petElementDiv.appendChild(petColorLabel);
    petElementDiv.appendChild(petGenderLabel);
    petElementDiv.appendChild(petWeightLabel);
    petElementDiv.appendChild(petAgeLabel);
    petElementDiv.appendChild(petInsideLabel);
    petElementDiv.appendChild(petAppointmentLabel);
    petElementDiv.appendChild(petSeenByLabel);
    petElementDiv.appendChild(petRainbowLabel);

    petElementDiv.style.border = "thick solid #0000FF";
    petElementDiv.style.textAlign = "center";

    return petElementDiv;

}


async function GetPetById(id){
    try{
        let response = await fetch(`${BASE_URL}/Pets/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

// Below Function calls are commented out when you do not need to run test. 
 //GetAllPet();
 GetPetById(1002);

//-----------------------------------------------------------------------//
// Testing the Visit Controller Functions                                //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

async function GetAllVisits(){
    try{
        let response = await fetch(`${BASE_URL}/Visits`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

async function GetVisitsById(id){
    try{
        let response = await fetch(`${BASE_URL}/Visits/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    }catch(Error){
        console.error(Error);
    }
}

// Below Function calls are commented out when you do not need to run test. 
 GetAllVisits();
 GetVisitsById(1003);

GenerateLoginContainer();
GenerateNewPersonContainer();
GenerateNewPetContainer();
GenerateAllPersonsContainer();
GenerateAllPetsContainer();