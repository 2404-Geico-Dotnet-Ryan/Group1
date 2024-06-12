
//Base URL
const BASE_URL = "http://localhost:5123";

let current_user = {};

//-----------------------------------//
// Container Divs used by the System //
//-----------------------------------//

// Login Page Containers
const loginPageContainerDiv = document.querySelector("#login-page-container")
const loginUserContainerDiv = document.querySelector("#login-user-container");

// Home Page Containers
const homePageContainerDiv = document.querySelector("#home-page-container");

const addPersonContainerDiv = document.querySelector("#add-persons-container");
const updatePersonContainerDiv = document.querySelector("#update-persons-container");
const deletePersonContainerDiv = document.querySelector("#delete-persons-container");

const addPetContainerDiv = document.querySelector("#add-pets-container");
const updatePetContainerDiv = document.querySelector("#update-pets-container");
const deletePetContainerDiv = document.querySelector("#delete-pets-container");

const allPetsContainerDiv = document.querySelector("#all-pets-container");
const allPersonsContainerDiv = document.querySelector("#all-persons-container");
const allVisitsContainerDiv = document.querySelector("#all-visits-container");

//-----------------------------------//
// Login Container Creation Function //
//-----------------------------------//

// Call to Generate the Login containers to display 
GenerateLoginContainer();

// Function to build out the code for the container
function GenerateLoginContainer() {

    // Create header for Login Seciton 
    let loginHeader = document.createElement("h2");
    loginHeader.type = 'text';
    loginHeader.textContent = "Kitty City Vet System User Login"

    // Create the UserName input field and label
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = "Enter UserName"; //add default text in field
    usernameInput.setAttribute("required", "required")//makes field required 
    usernameInput.id = 'username-input';
    usernameInput.style.display = 'block';

    let usernameInputLabel = document.createElement('label');
    usernameInputLabel.textContent = "Username";

    // Create the UserPassword input field and label
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = "Enter Password"; //add default text in field
    passwordInput.setAttribute("required", "required")//makes field required 
    passwordInput.id = 'password-input';
    passwordInput.style.display = 'block';

    let passwordInputLabel = document.createElement('label');
    passwordInputLabel.textContent = "Password";

    // Create the Login button
    let loginButton = document.createElement('button');
    loginButton.textContent = "Login";

    // Append the UserName and UserPassword fields and labels to the Login container
    loginUserContainerDiv.appendChild(loginHeader);
    loginUserContainerDiv.appendChild(usernameInputLabel);
    loginUserContainerDiv.appendChild(usernameInput);
    loginUserContainerDiv.appendChild(passwordInputLabel);
    loginUserContainerDiv.appendChild(passwordInput);
    loginUserContainerDiv.appendChild(loginButton);

    // Add an event listener to the Login button to handle login
    loginButton.addEventListener("click", GetLoginInformation);
}

// Function to tear down the login container
function TeardownLoginContainer() {
    // Find the login container
    let loginUserDiv = document.querySelector("#login-user-container");

    // If the login container exists, remove all its children
    if (loginUserDiv != null) {
        while (loginUserDiv.firstChild) {
            loginUserDiv.firstChild.remove();
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
// then display the Home page
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

        let userData = await response.json();
        current_user = userData;
        console.log(current_user);
        console.log(userData);

        // Tear down the Login in page and
        // Display the Home page 
        TeardownLoginContainer();
        GenerateHomePageContainer();
    } catch (e) {
        console.error("Error logging in:", e); // Added error logging
    }
}

//----------------------------------------//
// Function to build Home Page after      // 
// User is logged into the system         //
//----------------------------------------//
function GenerateHomePageContainer()
{
    GenerateNewPersonContainer();
    //GenerateUpdatePersonContainer()
    //GenerateDeletePersonContainer()

    GenerateNewPetContainer();
    //GenerateUpdatePetContainer()
    // GenerateDeletePetContainer()

    GenerateAllPersonsContainer();
    GenerateAllPetsContainer();
    GenerateAllVisitsContainer();
}

//----------------------------------------//
// New Person Container Creation Function //
//----------------------------------------//

// Function to build out the code for the container
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

    // Append the Person Div container to the Person container
    addPersonContainerDiv.appendChild(personDiv);

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

// Function to build out the code for the container
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

    // Append the PetDiv container to the pet container
    addPetContainerDiv.appendChild(petDiv);

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
// This fuction uses PetID of 1002 for all testing purposes. 
//If your DB does not have a PetId of 1002 you will need to update to use a id numbeer in our DB
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
// Testing the Person Controller Functions                               //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

// Function to build out the code for the container
async function GenerateAllPersonsContainer() {

    // Create Div to hold Header Text for table
    let personAllHeaderDiv = document.createElement("div");
    personAllHeaderDiv.id = "personAllHeader-container";

    // Create header for All Persons table 
    let personAllHeader = document.createElement("h2");
    personAllHeader.type = 'text';
    personAllHeader.textContent = "All Persons in the system";

    allPersonsContainerDiv.appendChild(personAllHeaderDiv);
    personAllHeaderDiv.appendChild(personAllHeader);
    
    let personAllDiv = document.createElement("div");
    personAllDiv.id = "personAll-container";
    allPersonsContainerDiv.appendChild(personAllDiv);

    // Call to get a list of all Persons in the system
    // then passed the list into the function that will 
    // build and load a table with the data
    let persons = await GetAllPersons();
    personAllDiv.innerHTML = GeneratePersonTable(persons);
}

// Function to get a list of a Persons in the system
async function GetAllPersons() {
    try {
        let response = await fetch(`${BASE_URL}/Person`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data 
function GeneratePersonTable(persons) {

    // This line declairs a new table node/section in your HTML
    let personTable = '<table>';

    // This section builds the Column Header Names
    personTable += `<tr>
        <th>Person Id</th>
        <th>Person Type</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
        <th>Job Title</th>
    </tr>`;

    // This section adds the passed in data into the table
    persons.forEach(p => {
        personTable += `<tr>
        <td>${p.personId}</td>
        <td>${p.personType}</td>
        <td>${p.firstName}</td>
        <td>${p.lastName}</td>
        <td>${p.phoneNum}</td>
        <td>${p.jobTitle}</td>
        </tr>`;
    });

    // This line closes out the table nod/section in your HTML
    personTable += '</table>';

    return personTable;
}

// Function to get a single Person by thier PersonID
async function GetPersonById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Person/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

//Function to delete person
async function DeletePersonById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Person/${id}`, {method: 'DELETE'});
        let data = await response.json();
        console.log(data);  //maybe don't need this
        deleteData();
    } catch (Error) {
        console.error(Error);
    }
}
// DeletePersonById(2);

//-----------------------------------------------------------------------//
// Testing the Pet Controller Functions                                  //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

// Function to build out the code for the container
async function GenerateAllPetsContainer() {

    // Create Div to hold Header Text for table
    let petAllHeaderDiv = document.createElement("div");
    petAllHeaderDiv.id = "petAllHeader-container";

    // Create header for All Pets table 
    let petAllHeader = document.createElement("h2");
    petAllHeader.type = 'text';
    petAllHeader.textContent = "All Pets in the system";
    
    allPetsContainerDiv.appendChild(petAllHeaderDiv);
    petAllHeaderDiv.appendChild(petAllHeader);

    // Create Div to hold All Pets table
    let petAllDiv = document.createElement("div");
    petAllDiv.id = "petAll-container";
    allPetsContainerDiv.appendChild(petAllDiv);

    // Call to get a list of all Pets in the system
    // Create the All Pets table
    let pets = await GetAllPets();
    petAllDiv.innerHTML = GeneratePetTable(pets);
}

// Function to get a list of a Pets in the system
async function GetAllPets() {
    try {
        let response = await fetch(`${BASE_URL}/Pets`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data 
function GeneratePetTable(pets) {
    let petTable = '<table>';
    petTable += `<tr>
        <th>Pet Id</th>
        <th>Person Id</th>
        <th>Pet Name</th>
        <th>Pet Color</th>
        <th>Pet Fur Type</th>
        <th>Pet Gender</th>
        <th>Pet Weight</th>
        <th>Pet Age</th>
        <th>Pet InSidePet</th>
        <th>Pet AppointmentDate</th>
        <th>Pet SeenBy</th>
        <th>Pet RainbowBridgeDate</th>
    </tr>`;

    pets.forEach(p => {
        petTable += `<tr>
        <td>${p.petId}</td>
        <td>${p.personId}</td>
        <td>${p.petName}</td>
        <td>${p.color}</td>
        <td>${p.furType}</td>
        <td>${p.gender}</td>
        <td>${p.weight}</td>
        <td>${p.age}</td>
        <td>${p.inSidePet}</td>
        <td>${p.appointmentDate}</td>
        <td>${p.seenBy}</td>
        <td>${p.rainbowBridgeDate}</td>
        </tr>`;
    });
    petTable += '</table>';

    return petTable;
}

// Function to get a single Pet by thier PetID
async function GetPetById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Pets/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

//-----------------------------------------------------------------------//
// Testing the Visit Controller Functions                                //
//-----------------------------------------------------------------------//
// Test the API calls as you are making them insures the code is working //
// in the API and Script before you actually use them in your website    //
//-----------------------------------------------------------------------//

// Function to build out the code for the container
async function GenerateAllVisitsContainer() {

    // Create Div to hold Header Text for table
    let visitAllHeaderDiv = document.createElement("div");
    visitAllHeaderDiv.id = "visitAllHeader-container";

    // Create header for All Visits table 
    let visitAllHeader = document.createElement("h2");
    visitAllHeader.type = 'text';
    visitAllHeader.textContent = "All Visits in the system";

    allVisitsContainerDiv.appendChild(visitAllHeaderDiv);
    visitAllHeaderDiv.appendChild(visitAllHeader);

    // Create Div to hold All Visits table
    let visitAllDiv = document.createElement("div");
    visitAllDiv.id = "visitAll-container";
    allVisitsContainerDiv.appendChild(visitAllDiv);

    // Call to get a list of all visits in the system
    // then create the All Visits table
    let visits = await GetAllVisits();
    visitAllDiv.innerHTML = GenerateVisitTable(visits);
}

// Function to get a list of a Visits in the system
async function GetAllVisits() {
    try {
        let response = await fetch(`${BASE_URL}/Visits`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data
function GenerateVisitTable(visits) {
    let visitTable = '<table>';
    visitTable += `<tr>
        <th>Visit Id</th>
        <th>Pet Id</th>
        <th>Person Id</th>
        <th>Pet Weight</th>
        <th>Pet Age</th>
        <th>Pet InSidePet</th>
        <th>Pet AppointmentDate</th>
        <th>Pet SeenBy</th>
    </tr>`;

    visits.forEach(v => {
        visitTable += `<tr>
        <td>${v.visitId}</td>
        <td>${v.petId}</td>
        <td>${v.personId}</td>
        <td>${v.weight}</td>
        <td>${v.age}</td>
        <td>${v.inSidePet}</td>
        <td>${v.appointmentDate}</td>
        <td>${v.seenBy}</td>
        </tr>`;
    });
    visitTable += '</table>';

    return visitTable;
}

// Function to get a single Visit by thier VisitID
async function GetVisitsById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Visits/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        console.error(Error);
    }
}

// Below Testing Only Function calls are commented out when you do not need to run test. 
GetPersonById(1008); // Test getting a Person by ID Number 
GetPetById(1002); // Test getting a Person by ID Number 
GetVisitsById(1003); // Test getting a Visit by ID Number 
// End of Testing Only Function calls