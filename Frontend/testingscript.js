
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
const getPersonContainerDiv = document.querySelector("#get-persons-container");
const getPersonDisplayContainerDiv = document.querySelector("#get-person-display-container");
const updatePersonContainerDiv = document.querySelector("#update-persons-container");
const deletePersonContainerDiv = document.querySelector("#delete-persons-container");
const allPersonsContainerDiv = document.querySelector("#all-persons-container");

const addPetContainerDiv = document.querySelector("#add-pets-container");
const getPetContainerDiv = document.querySelector("#get-pets-container");
const getPetDisplayContainerDiv = document.querySelector("#get-pet-display-container");
const updatePetContainerDiv = document.querySelector("#update-pets-container");
const deletePetContainerDiv = document.querySelector("#delete-pets-container");
const allPetsContainerDiv = document.querySelector("#all-pets-container");

const addVisitContainerDiv = document.querySelector("#add-visits-container");
const getVisitContainerDiv = document.querySelector("#get-visits-container");
const getVisitDisplayContainerDiv = document.querySelector("#get-visit-display-container");
const allVisitsContainerDiv = document.querySelector("#all-visits-container");

//------------------------------------//
// Login Container Creation Functions //
//------------------------------------//

// Call to Generate the Login containers to display 
GenerateLoginContainer();

// Function to build out the code for the container
function GenerateLoginContainer() {

    let pageTitle = document.createElement("h1");
    pageTitle.type = 'text';
    pageTitle.id = "Title";
    pageTitle.textContent = "Welcome to Kitty City!"

    // Create header for Login Seciton 
    let loginHeader = document.createElement("h2");
    loginHeader.type = 'text';
    loginHeader.setAttribute("style", "background-color: #eed5d7;");
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
    loginUserContainerDiv.appendChild(pageTitle);
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

        // Tear down the Login in page and
        // Display the Home page 
        if (response.ok) {
            TeardownLoginContainer();
            GenerateHomePageContainer();
        }
        else {
            alert("Invalid login data entered please try again");
        }
    } catch (e) {
        console.error("Error logging in!", e); // Added error logging
    }
}

//----------------------------------------//
// Function to build Home Page after      // 
// User is logged into the system         //
//----------------------------------------//
function GenerateHomePageContainer() {

    GenerateNewPersonContainer();
    GenerateGetPersonContainer();
    GenerateUpdatePersonContainer();
    GenerateDeletePersonContainer();
    GenerateAllPersonsContainer();

    GenerateNewPetContainer();
    GenerateGetPetContainer();
    GenerateUpdatePetContainer();
    GenerateDeletePetContainer();
    GenerateAllPetsContainer();

    GenerateNewVisitContainer();
    GenerateGetVisitContainer();
    GenerateAllVisitsContainer();
}

//---------------------------------------------//
// Add New Person Container Creation Functions //
//---------------------------------------------//

// Function to build out the code for the container
function GenerateNewPersonContainer() {
    // Create the new Person container div
    let personDiv = document.createElement("div");
    personDiv.id = "newperson-container";

    // Create header for New Pet Parent Section 
    let personHeader = document.createElement("h2");
    personHeader.type = 'text';
    personHeader.setAttribute("style", "background-color: #eed5d7;");
    personHeader.textContent = "Add a new Person into the System"

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
    personButton.addEventListener("click", GetNewPersonInformation);
}

// Function to get Person information from input fields
async function GetNewPersonInformation() {
    let personType = document.querySelector("#personType-input").value;
    let firstName = document.querySelector("#firstName-input").value;
    let lastName = document.querySelector("#lastName-input").value;
    let phoneNumber = document.querySelector("#phoneNumber-input").value;
    let jobTitle = document.querySelector("#jobTitle-input").value;

    // Call the function to add a new person to the system
    await AddNewPerson(personType, firstName, lastName, phoneNumber, jobTitle);
    GenerateAllPersonsContainer();
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

//----------------------------------------------//
// Get Person Container Creation Functions      //
//----------------------------------------------//
function GenerateGetPersonContainer() {
    // Create header for Get Person Section 
    let getPersonHeader = document.createElement("h2");
    getPersonHeader.type = 'text';
    getPersonHeader.setAttribute("style", "background-color: #eed5d7;");
    getPersonHeader.textContent = "Get a Person from the System"

    // Create the getPerson input field and label
    let getPersonInput = document.createElement('input');
    getPersonInput.type = 'text';
    getPersonInput.placeholder = "Enter Person ID"; //add default text in field
    getPersonInput.setAttribute("required", "required")//makes field required 
    getPersonInput.id = 'getPerson-input';
    getPersonInput.style.display = 'block';

    let getPersonInputLabel = document.createElement('label');
    getPersonInputLabel.textContent = " Person ID to Get";

    // Create the Login button
    let getPersonButton = document.createElement('button');
    getPersonButton.textContent = "Get Person";

    // Append the Get User fields and labels to the container
    getPersonContainerDiv.appendChild(getPersonHeader);
    getPersonContainerDiv.appendChild(getPersonInputLabel);
    getPersonContainerDiv.appendChild(getPersonInput);
    getPersonContainerDiv.appendChild(getPersonButton);

    // Add an event listener to the Login button to handle login
    getPersonButton.addEventListener("click", GetPersonIdInformation);
}

// Function to get Person information from input fields
async function GetPersonIdInformation() {
    let personId = document.querySelector("#getPerson-input").value;

    // Call the function to get the person from the system
    let person = await GetPersonById(personId);
    TeardownPersonDisplayTableContainer();
    getPersonDisplayContainerDiv.innerHTML = GeneratePersonDisplayTable(person);
}

// Function to get a single Person by their PersonID
async function GetPersonById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Person/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } 
    catch (Error) {
        alert("Person ID was not located please try again."); 
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data
function GeneratePersonDisplayTable(person) {

    // This line declairs a new table node/section in your HTML
    let personDisplayTable = '<table>';

    // This section builds the Column Header Names
    personDisplayTable += `<tr>
        <th>Person Id</th>
        <th>Person Type</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
        <th>Job Title</th>
    </tr>`;

    // This section adds the passed in data into the table
    personDisplayTable += `<tr>
        <td>${person.personId}</td>
        <td>${person.personType}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.phoneNum}</td>
        <td>${person.jobTitle}</td>
        </tr>`;

    // This line closes out the table nod/section in your HTML
    personDisplayTable += '</table>';

    return personDisplayTable;
}

function TeardownPersonDisplayTableContainer() {
    // Find the Display Person container
    let personDisplayDiv = document.querySelector("#get-person-display-container");

    // If the Display Person container exists, remove all its children
    if (personDisplayDiv != null) {
        while (personDisplayDiv.firstChild) {
            personDisplayDiv.firstChild.remove();
        }
    }
}

//----------------------------------------------//
// Update a Person Container Creation Functions //
//----------------------------------------------//

// Function to build out the code for the container
function GenerateUpdatePersonContainer() {
    // Create the Update Person container div
    let personDiv = document.createElement("div");
    personDiv.id = "update-persons-container";

    // Create header for Update Person Section 
    let personHeader = document.createElement("h2");
    personHeader.type = 'text';
    personHeader.setAttribute("style", "background-color: #eed5d7;");
    personHeader.textContent = "Update a Person in the System"

    let personIdInput = document.createElement('input');
    personIdInput.type = 'number';
    personIdInput.id = 'update-personId-input';
    personIdInput.style.display = 'block';

    let personIdInputLabel = document.createElement('label');
    personIdInputLabel.textContent = "PersonId";

    // Select Type of Person 
    let personTypeHeader = document.createElement("h3");
    personTypeHeader.type = 'text';
    personTypeHeader.textContent = "Person Type Options - Key 1 for Employee  Key 2 for Pet Parent "

    let personTypeInput = document.createElement('input');
    personTypeInput.type = 'number';
    personTypeInput.id = 'update-personType-input';
    personTypeInput.style.display = 'block';

    let personTypeInputLabel = document.createElement('label');
    personTypeInputLabel.textContent = "Person Type";

    // Create the First Name input field and label
    let firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.id = 'update-firstName-input';
    firstNameInput.style.display = 'block';

    let firstNameInputLabel = document.createElement('label');
    firstNameInputLabel.textContent = "First Name";

    // Create the Last Name input field and label
    let lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'update-lastName-input';
    lastNameInput.style.display = 'block';

    let lastNameInputLabel = document.createElement('label');
    lastNameInputLabel.textContent = "Last Name";

    // Create the Phone Number input field and label
    let phoneNumberInput = document.createElement('input');
    phoneNumberInput.type = 'text';
    phoneNumberInput.id = 'update-phoneNumber-input';
    phoneNumberInput.style.display = 'block';

    let phoneNumberInputLabel = document.createElement('label');
    phoneNumberInputLabel.textContent = "Phone Number";

    // Create the Job Title input field and label
    let jobTitleInput = document.createElement('input');
    jobTitleInput.type = 'text';
    jobTitleInput.id = 'update-jobTitle-input';
    jobTitleInput.style.display = 'block';

    let jobTitleInputLabel = document.createElement('label');
    jobTitleInputLabel.textContent = "Job Title";

    // Create the Create New Parent button
    let updatePersonButton = document.createElement('button');
    updatePersonButton.textContent = "Update Person";

    // Append the Person Div container to the Person container
    updatePersonContainerDiv.appendChild(personDiv);

    // Append the username and password fields and labels to the login container

    personDiv.appendChild(personHeader);
    personDiv.appendChild(personTypeHeader);
    personDiv.appendChild(personIdInputLabel);
    personDiv.appendChild(personIdInput);
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
    personDiv.appendChild(updatePersonButton);

    // Add an event listener to the login button to handle login
    updatePersonButton.addEventListener("click", GetUpdatePersonInformation);
}

// Function to get Person information from input fields
async function GetUpdatePersonInformation() {
    let personId = document.querySelector("#update-personId-input").value;
    let personType = document.querySelector("#update-personType-input").value;
    let firstName = document.querySelector("#update-firstName-input").value;
    let lastName = document.querySelector("#update-lastName-input").value;
    let phoneNumber = document.querySelector("#update-phoneNumber-input").value;
    let jobTitle = document.querySelector("#update-jobTitle-input").value;

    // Call the function to update a person to the system
    await UpdatePerson(personId, personType, firstName, lastName, phoneNumber, jobTitle);
    GenerateAllPersonsContainer();
}

// Function to update a Person in the system by their ID
async function UpdatePerson(personId, personType, firstName, lastName, phoneNumber, jobTitle) {
    try {
        let response = await fetch(`${BASE_URL}/Person/${personId}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify(
                {
                    "personId": personId,
                    "personType": personType,
                    "firstName": firstName,
                    "lastName": lastName,
                    "phoneNum": phoneNumber,
                    "jobTitle": jobTitle
                })
        });

        let data = await response.json();
        let updatedPerson = data;
        console.log(updatedPerson);
        updateData(updatedPerson);
    } catch (e) {
        e = "Error updating person!";
        console.error(e); // Added error logging
    }

}

//----------------------------------------------//
// Delete Person Container Creation Functions  //
//----------------------------------------------//

// Function to build out the code for the container
function GenerateDeletePersonContainer() {
    // Create header for User Delete Section 
    let deletePersonHeader = document.createElement("h2");
    deletePersonHeader.type = 'text';
    deletePersonHeader.setAttribute("style", "background-color: #eed5d7;");
    deletePersonHeader.textContent = "Remove a Person from the System"

    // Create the deletePerson input field and label
    let deletePersonInput = document.createElement('input');
    deletePersonInput.type = 'text';
    deletePersonInput.placeholder = "Enter Person ID"; //add default text in field
    deletePersonInput.setAttribute("required", "required")//makes field required 
    deletePersonInput.id = 'deletePerson-input';
    deletePersonInput.style.display = 'block';

    let deletePersonInputLabel = document.createElement('label');
    deletePersonInputLabel.textContent = " Person ID to Remove ";

    // Create the Login button
    let deletePersonButton = document.createElement('button');
    deletePersonButton.textContent = "Remove Person";

    // Append the Delete User fields and labels to the container
    deletePersonContainerDiv.appendChild(deletePersonHeader);
    deletePersonContainerDiv.appendChild(deletePersonInputLabel);
    deletePersonContainerDiv.appendChild(deletePersonInput);
    deletePersonContainerDiv.appendChild(deletePersonButton);

    // Add an event listener to the Login button to handle login
    deletePersonButton.addEventListener("click", DeletePersonIdInformation);
}

// Function to get Person information from input fields
async function DeletePersonIdInformation() {
    let personId = document.querySelector("#deletePerson-input").value;

    // Call the function to get the person from the system
    await DeletePersonById(personId);
    GenerateAllPersonsContainer();
}

//Function to delete person
async function DeletePersonById(id) {
    try 
    {
        let response = await fetch(`${BASE_URL}/Person/${id}`, { method: 'DELETE' });
        if (response.ok) 
            {
                console.log("Person Id " + id + " was removed from the system")
                alert("Person Id " + id + " was removed from the system");
            }
            else
            {
                alert("Person ID was not located please try again.");
            }
        }
        catch (Error) {
            console.error(Error);
        }
}

//----------------------------------------------//
// List All Person Container Creation Functions //
//----------------------------------------------//

// Function to build out the code for the container
async function GenerateAllPersonsContainer() {

    TeardownPersonTableContainer(); 

    // Create Div to hold Header Text for table
    let personAllHeaderDiv = document.createElement("div");
    personAllHeaderDiv.id = "personAllHeader-container";

    // Create header for All Persons table 
    let personAllHeader = document.createElement("h2");
    personAllHeader.type = 'text';
    personAllHeader.setAttribute("style", "background-color: #eed5d7;");
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

function TeardownPersonTableContainer() {
    // Find the Display All Person container
    let personTableDiv = document.querySelector("#all-persons-container");

    // If the Display All Person container exists, remove all its children
    if (personTableDiv != null) {
        while (personTableDiv.firstChild) {
            personTableDiv.firstChild.remove();
        }
    }
}
//-----------------------------------------------------//
// Add New Pet Container Creation Functions            //
//-----------------------------------------------------//

// Function to build out the code for the container
function GenerateNewPetContainer() {
    // Create the main sign up container div
    let petDiv = document.createElement("div");
    petDiv.id = "newpet-container";

    // Create header for New Pet Section 
    let petHeader = document.createElement("h2");
    petHeader.type = 'text';
    petHeader.setAttribute("style", "background-color: #eed5d7;");
    petHeader.textContent = "Add a new Pet into the System"

    // Create section informational header for New Pet Section
    let personIdHeader = document.createElement("h3");
    personIdHeader.type = 'text';
    personIdHeader.textContent = "You need to find a valid PersonId from your local DB to use here"

    let personIdInput = document.createElement('input');
    personIdInput.type = 'number';
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
    petWeightInput.type = 'number';
    petWeightInput.id = 'petWeight-input';
    petWeightInput.style.display = 'block';

    let petWeightInputLabel = document.createElement('label');
    petWeightInputLabel.textContent = "Pet Weight";

    // Create the Age input field and label
    let petAgeInput = document.createElement('input');
    petAgeInput.type = 'number';
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
    petButton.addEventListener("click", GetAddPetInformation);
}

// Function to get Pet information from input fields
async function GetAddPetInformation() {
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
    await AddNewPet(personId, petName, petColor, petFurType, petGender, petWeight, petAge, petInside, seenBy);
    GenerateAllPetsContainer();
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
        console.log(data);
        return data; 
    } catch (e) {
        console.error("Error Adding New Pet:", e); // Added error logging
    }
}

//----------------------------------------------//
// Get Pet Container Creation Functions         //
//----------------------------------------------//
function GenerateGetPetContainer() {
    // Create header for Get Pet Section 
    let getPetHeader = document.createElement("h2");
    getPetHeader.type = 'text';
    getPetHeader.setAttribute("style", "background-color: #eed5d7;");
    getPetHeader.textContent = "Get a Pet from the System"

    // Create the getPet input field and label
    let getPetInput = document.createElement('input');
    getPetInput.type = 'text';
    getPetInput.placeholder = "Enter Pet ID"; //add default text in field
    getPetInput.setAttribute("required", "required")//makes field required 
    getPetInput.id = 'getPet-input';
    getPetInput.style.display = 'block';

    let getPetInputLabel = document.createElement('label');
    getPetInputLabel.textContent = " Pet ID to Get";

    // Create the Login button
    let getPetButton = document.createElement('button');
    getPetButton.textContent = "Get Pet";

    // Append the Get User fields and labels to the container
    getPetContainerDiv.appendChild(getPetHeader);
    getPetContainerDiv.appendChild(getPetInputLabel);
    getPetContainerDiv.appendChild(getPetInput);
    getPetContainerDiv.appendChild(getPetButton);

    // Add an event listener to the Login button to handle login
    getPetButton.addEventListener("click", GetPetIdInformation);
}

// Function to get Pet information from input fields
async function GetPetIdInformation() {
    let petId = document.querySelector("#getPet-input").value;

    // Call the function to get the Pet from the system
    let pet = await GetPetById(petId);
    TeardownPetDisplayTableContainer();
    getPetDisplayContainerDiv.innerHTML = GeneratePetDisplayTable(pet);
}

// Function to get a single Pet by their PetID
async function GetPetById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Pets/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } 
    catch (Error) {
        alert("Pet ID was not located please try again."); 
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data 
function GeneratePetDisplayTable(pet) {

    // This line declairs a new table node/section in your HTML
    let petDisplayTable = '<table>';

    // This section builds the Column Header Names
    petDisplayTable += `<tr>
        <th>Pet Id</th>
        <th>Person Id</th>
        <th>Pet Name</th>
        <th>Pet Color</th>
        <th>Pet Fur Type</th>
        <th>Pet Gender</th>
        <th>Pet Weight</th>
        <th>Pet Age</th>
        <th>Pet InSide Pet</th>
        <th>Pet Appointment Date</th>
        <th>Pet Seen By</th>
        <th>Pet Rainbow Bridge Date</th>
    </tr>`;

    // This section adds the passed in data into the table
    petDisplayTable += `<tr>
        <td>${pet.petId}</td>
        <td>${pet.personId}</td>
        <td>${pet.petName}</td>
        <td>${pet.color}</td>
        <td>${pet.furType}</td>
        <td>${pet.gender}</td>
        <td>${pet.weight}</td>
        <td>${pet.age}</td>
        <td>${pet.inSidePet}</td>
        <td>${pet.appointmentDate}</td>
        <td>${pet.seenBy}</td>
        <td>${pet.rainbowBridgeDate}</td>
        </tr>`;

    // This line closes out the table nod/section in your HTML
    petDisplayTable += '</table>';

    return petDisplayTable;
}

function TeardownPetDisplayTableContainer() {
    // Find the Display Pet container
    let petDisplayDiv = document.querySelector("#get-pet-display-container");

    // If the Display Pet container exists, remove all its children
    if (petDisplayDiv != null) {
        while (petDisplayDiv.firstChild) {
            petDisplayDiv.firstChild.remove();
        }
    }
}
//----------------------------------------------//
// Update a Pet Container Creation Functions    //
//----------------------------------------------//

// Function to build out the code for the container
function GenerateUpdatePetContainer() {
    // Create the Update Pet container div
    let updatePetDiv = document.createElement("div");
    updatePetDiv.id = "update-pets-container";

    // Create header for Update Pet Section  
    let updatePetHeader = document.createElement("h2");
    updatePetHeader.type = 'text';
    updatePetHeader.setAttribute("style", "background-color: #eed5d7;");
    updatePetHeader.textContent = "Update a Pet in the System";

    //------Input Fields-----//
    // Create the Pet ID input field and label
    let petIdInput = document.createElement('input');
    petIdInput.type = 'number';
    petIdInput.id = 'update-petId-input';
    petIdInput.style.display = 'block';

    let petIdInputLabel = document.createElement('label');
    petIdInputLabel.textContent = "Pet ID";

    // Create the Person ID input field and label
    let personIdInput = document.createElement('input');
    personIdInput.type = 'text';
    personIdInput.id = 'update-petpersonId-input';
    personIdInput.style.display = 'block';

    let personIdInputLabel = document.createElement('label');
    personIdInputLabel.textContent = "Person ID";

    // Create the Pet Name input field and label
    let petNameInput = document.createElement('input');
    petNameInput.type = 'text';
    petNameInput.id = 'update-petName-input';
    petNameInput.style.display = 'block';

    let petNameInputLabel = document.createElement('label');
    petNameInputLabel.textContent = "Pet Name";

    // Create the Pet Color input field and label
    let petColorInput = document.createElement('input');
    petColorInput.type = 'text';
    petColorInput.id = 'update-petColor-input';
    petColorInput.style.display = 'block';

    let petColorInputLabel = document.createElement('label');
    petColorInputLabel.textContent = "Pet Color";

    // Create the Pet Fur Type input field and label
    let petFurTypeInput = document.createElement('input');
    petFurTypeInput.type = 'text';
    petFurTypeInput.id = 'update-petFurType-input';
    petFurTypeInput.style.display = 'block';

    let petFurTypeInputLabel = document.createElement('label');
    petFurTypeInputLabel.textContent = "Fur Type";

    // Create the Gender input field and label
    let petGenderInput = document.createElement('input');
    petGenderInput.type = 'text';
    petGenderInput.id = 'update-petGender-input';
    petGenderInput.style.display = 'block';

    let petGenderInputLabel = document.createElement('label');
    petGenderInputLabel.textContent = "Pet Gender";

    // Create the Weight input field and label
    let petWeightInput = document.createElement('input');
    petWeightInput.type = 'text';
    petWeightInput.id = 'update-petWeight-input';
    petWeightInput.style.display = 'block';

    let petWeightInputLabel = document.createElement('label');
    petWeightInputLabel.textContent = "Pet Weight";

    // Create the Age input field and label
    let petAgeInput = document.createElement('input');
    petAgeInput.type = 'text';
    petAgeInput.id = 'update-petAge-input';
    petAgeInput.style.display = 'block';

    let petAgeInputLabel = document.createElement('label');
    petAgeInputLabel.textContent = "Pet Age";

    // Create the InSidePet input field and label   
    let petInsideInput = document.createElement('input');
    petInsideInput.type = 'checkbox';
    petInsideInput.id = 'update-petInside-input';
    //petInsideInput.style = 'text-transform:lowercase';
    petInsideInput.style.display = 'block';

    let petInsideInputLabel = document.createElement('label');
    petInsideInputLabel.textContent = "InSidePet - True or False";

    // Create the Appointment Date input field and label   
    let appointmentDateInput = document.createElement('input');
    appointmentDateInput.type = 'text';
    appointmentDateInput.id = 'update-appointmentDate-input';
    appointmentDateInput.style.display = 'block';

    let appointmentDateInputLabel = document.createElement('label');
    appointmentDateInputLabel.textContent = "Appointment Date";

    // Create the SeenBy input field and label   
    let seenByInput = document.createElement('input');
    seenByInput.type = 'text';
    seenByInput.id = 'update-seenBy-input';
    seenByInput.style.display = 'block';

    let seenByInputLabel = document.createElement('label');
    seenByInputLabel.textContent = "Seen By";

    // Create the Rainbow Bridge Date input field and label   
    let rainbowBridgeDateInput = document.createElement('input');
    rainbowBridgeDateInput.type = 'text';
    rainbowBridgeDateInput.id = 'update-rainbowBridgeDate-input';
    rainbowBridgeDateInput.style.display = 'block';

    let rainbowBridgeDateInputLabel = document.createElement('label');
    rainbowBridgeDateInputLabel.textContent = "Rainbow Bridge Date";
    //------End Input Fields-----//

    // Create the Update Pet button
    let updatePetButton = document.createElement('button');
    updatePetButton.textContent = "Update Pet";

    // Append the updatePetDiv container to the update pet container
    updatePetContainerDiv.appendChild(updatePetDiv);

    // Append the pet fields and labels to the update pet container
    updatePetDiv.appendChild(updatePetHeader);
    updatePetDiv.appendChild(petIdInputLabel);
    updatePetDiv.appendChild(petIdInput);
    updatePetDiv.appendChild(personIdInputLabel);
    updatePetDiv.appendChild(personIdInput);
    updatePetDiv.appendChild(petNameInputLabel);
    updatePetDiv.appendChild(petNameInput);
    updatePetDiv.appendChild(petColorInputLabel);
    updatePetDiv.appendChild(petColorInput);
    updatePetDiv.appendChild(petFurTypeInputLabel);
    updatePetDiv.appendChild(petFurTypeInput);
    updatePetDiv.appendChild(petGenderInputLabel);
    updatePetDiv.appendChild(petGenderInput);
    updatePetDiv.appendChild(petWeightInputLabel);
    updatePetDiv.appendChild(petWeightInput);
    updatePetDiv.appendChild(petAgeInputLabel);
    updatePetDiv.appendChild(petAgeInput);
    updatePetDiv.appendChild(petInsideInputLabel);
    updatePetDiv.appendChild(petInsideInput);
    updatePetDiv.appendChild(appointmentDateInputLabel);
    updatePetDiv.appendChild(appointmentDateInput);
    updatePetDiv.appendChild(seenByInputLabel);
    updatePetDiv.appendChild(seenByInput);
    updatePetDiv.appendChild(rainbowBridgeDateInputLabel);
    updatePetDiv.appendChild(rainbowBridgeDateInput);
    updatePetDiv.appendChild(updatePetButton);

    // Add an event listener to the update pet button
    updatePetButton.addEventListener("click", GetUpdatePetInformation);
}

// Function to get Pet information from input fields
async function GetUpdatePetInformation() {
    let id = document.querySelector("#update-petId-input").value;
    let personId = document.querySelector("#update-petpersonId-input").value;
    let petName = document.querySelector("#update-petName-input").value;
    let color = document.querySelector("#update-petColor-input").value;
    let furType = document.querySelector("#update-petFurType-input").value;
    let gender = document.querySelector("#update-petGender-input").value;
    let petWeight = document.querySelector("#update-petWeight-input").value;
    let petAge = document.querySelector("#update-petAge-input").value;
    let petInside = document.querySelector("#update-petInside-input").checked;
    let appointmentDate = document.querySelector("#update-appointmentDate-input").value;
    let seenBy = document.querySelector("#update-seenBy-input").value;
    let rainbowBridgeDate = document.querySelector("#update-rainbowBridgeDate-input").value;

    // Call the function to update a Pet in the system
    await UpdatePet(id, personId, petName, color, furType, gender, petWeight, petAge, petInside, appointmentDate, seenBy, rainbowBridgeDate);
    GenerateAllPetsContainer();
}

// Function to update a pet in the system by their ID
async function UpdatePet(id, personId, petName, color, furType, gender, petWeight, petAge, petInside, appointmentDate, seenBy, rainbowBridgeDate) {
    try {
        let response = await fetch(`${BASE_URL}/Pets/${id}`,
            {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json" // Corrected the content type to 'application/json'
                },
                body: JSON.stringify
                    (
                        {
                            "petId": id,
                            "personId": personId,
                            "petName": petName,
                            "color": color,
                            "furType": furType,
                            "gender": gender,
                            "weight": petWeight,
                            "age": petAge,
                            "inSidePet": petInside,
                            "appointmentDate": appointmentDate,
                            "seenBy": seenBy,
                            "rainbowBridgeDate": rainbowBridgeDate
                        }
                    )
            });

        let data = await response.json();
        let updatedPet = data;
        //console.log(updatedPet);
        console.log(data);
        //updateData(updatedPet);
    }
    catch (e) {
        console.error("Error Updating Pet:", e); // Added error logging
    }
}

//----------------------------------------------//
// Delete Pet Container Creation Functions      //
//----------------------------------------------//

// Function to build out the code for the container
function GenerateDeletePetContainer() {
    // Create header for User Delete Section 
    let deletePetHeader = document.createElement("h2");
    deletePetHeader.type = 'text';
    deletePetHeader.setAttribute("style", "background-color: #eed5d7;");
    deletePetHeader.textContent = "Remove a Pet from the System"

    // Create the deletePet input field and label
    let deletePetInput = document.createElement('input');
    deletePetInput.type = 'text';
    deletePetInput.placeholder = "Enter Pet ID"; //add default text in field
    deletePetInput.setAttribute("required", "required")//makes field required 
    deletePetInput.id = 'deletePet-input';
    deletePetInput.style.display = 'block';

    let deletePetInputLabel = document.createElement('label');
    deletePetInputLabel.textContent = " Pet ID to Remove ";

    // Create the Login button
    let deletePetButton = document.createElement('button');
    deletePetButton.textContent = "Remove Pet";

    // Append the Delete User fields and labels to the container
    deletePetContainerDiv.appendChild(deletePetHeader);
    deletePetContainerDiv.appendChild(deletePetInputLabel);
    deletePetContainerDiv.appendChild(deletePetInput);
    deletePetContainerDiv.appendChild(deletePetButton);

    // Add an event listener to the Login button to handle login
    deletePetButton.addEventListener("click", DeletePetIdInformation);
}

// Function to get Pet information from input fields
async function DeletePetIdInformation() {
    let petId = document.querySelector("#deletePet-input").value;

    // Call the function to get the Pet from the system
    await DeletePetById(petId);
    GenerateAllPetsContainer();
}

//Function to delete Pet
async function DeletePetById(id) {
    try 
    {
        let response = await fetch(`${BASE_URL}/Pets/${id}`, { method: 'DELETE' });
        if (response.ok) 
        {
            console.log("Pet Id " + id + " was removed from the system")
            alert("Pet Id " + id + " was removed from the system");
        }
        else
        {
            alert("Pet ID was not located please try again.");
        }
    }
    catch (Error) {
        console.error(Error);
    }
}

//----------------------------------------------//
// List All Pet Container Creation Functions    //
//----------------------------------------------//

// Function to build out the code for the container
async function GenerateAllPetsContainer() {

    TeardownPetTableContainer();

    // Create Div to hold Header Text for table
    let petAllHeaderDiv = document.createElement("div");
    petAllHeaderDiv.id = "petAllHeader-container";

    // Create header for All Pets table 
    let petAllHeader = document.createElement("h2");
    petAllHeader.type = 'text';
    petAllHeader.setAttribute("style", "background-color: #eed5d7;");
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

    // This line declairs a new table node/section in your HTML
    let petTable = '<table>';

    // This section builds the Column Header Names
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

    // This section adds the passed in data into the table
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

    // This line closes out the table nod/section in your HTML
    petTable += '</table>';

    return petTable;
}

function TeardownPetTableContainer() {
    // Find the Display All Pet container
    let petTableDiv = document.querySelector("#all-pets-container");

    // If the Display All Pet container exists, remove all its children
    if (petTableDiv != null) {
        while (petTableDiv.firstChild) {
            petTableDiv.firstChild.remove();
        }
    }
}

//-----------------------------------------------------//
// Add New Visit Container Creation Functions          //
//-----------------------------------------------------//

// Function to build out the code for the container
function GenerateNewVisitContainer() {
    // Create the main sign up container div
    let visitDiv = document.createElement("div");
    visitDiv.id = "newvisit-container";

    // Create header for New Visit Section 
    let visitHeader = document.createElement("h2");
    visitHeader.type = 'text';
    visitHeader.setAttribute("style", "background-color: #eed5d7;");
    visitHeader.textContent = "Add a new Visit into the System"

        // Create section informational header for New Visit Section
    let visitPetIdHeader = document.createElement("h3");
    visitPetIdHeader.type = 'text';
    visitPetIdHeader.textContent = "You need to find a valid PetId & PersonId from your local DB to use here"

    // Create the PetId input field and label
    let visitPetIdInput = document.createElement('input');
    visitPetIdInput.type = 'number';
    visitPetIdInput.id = 'visitPetId-input';
    visitPetIdInput.style.display = 'block';

    let visitPetIdInputLabel = document.createElement('label');
    visitPetIdInputLabel.textContent = "Pet Id";

	// Create the PersonId input field and label
    let visitPersonIdInput = document.createElement('input');
    visitPersonIdInput.type = 'number';
    visitPersonIdInput.id = 'visitPersonId-input';
    visitPersonIdInput.style.display = 'block';

    let visitPersonIdInputLabel = document.createElement('label');
    visitPersonIdInputLabel.textContent = "Person Id";

    // Create the Gender input field and label
    let visitGenderInput = document.createElement('input');
    visitGenderInput.type = 'text';
    visitGenderInput.id = 'visitGender-input';
    visitGenderInput.style.display = 'block';

    let visitGenderInputLabel = document.createElement('label');
    visitGenderInputLabel.textContent = "Visit Gender";

    // Create the Weight input field and label
    let visitWeightInput = document.createElement('input');
    visitWeightInput.type = 'number';
    visitWeightInput.id = 'visitWeight-input';
    visitWeightInput.style.display = 'block';

    let visitWeightInputLabel = document.createElement('label');
    visitWeightInputLabel.textContent = "Visit Weight";

    // Create the Age input field and label
    let visitAgeInput = document.createElement('input');
    visitAgeInput.type = 'number';
    visitAgeInput.id = 'visitAge-input';
    visitAgeInput.style.display = 'block';

    let visitAgeInputLabel = document.createElement('label');
    visitAgeInputLabel.textContent = "Visit Age";

    // Create the InSideVisit input field and label   
    let visitInsideInput = document.createElement('input');
    visitInsideInput.type = 'checkbox';
    visitInsideInput.id = 'visitInside-input';
    //visitInsideInput.style = 'text-transform:lowercase';
    visitInsideInput.style.display = 'block';

    let visitInsideInputLabel = document.createElement('label');
    visitInsideInputLabel.textContent = "InSideVisit - True or False";

    // Create the SeenBy input field and label   
    let visitSeenByInput = document.createElement('input');
    visitSeenByInput.type = 'text';
    visitSeenByInput.id = 'visitSeenBy-input';
    visitSeenByInput.style.display = 'block';

    let visitSeenByInputLabel = document.createElement('label');
    visitSeenByInputLabel.textContent = "Seen By";

    // Create the Create New Visit button
    let visitButton = document.createElement('button');
    visitButton.textContent = "Create New Visit";

    // Append the VisitDiv container to the visit container
    addVisitContainerDiv.appendChild(visitDiv);

    // Append the username and password fields and labels to the login container
    visitDiv.appendChild(visitHeader);
    visitDiv.appendChild(visitPetIdHeader);
    visitDiv.appendChild(visitPersonIdInputLabel);
    visitDiv.appendChild(visitPersonIdInput);
    visitDiv.appendChild(visitPetIdInputLabel);
    visitDiv.appendChild(visitPetIdInput);  
    visitDiv.appendChild(visitWeightInputLabel);
    visitDiv.appendChild(visitWeightInput);
    visitDiv.appendChild(visitAgeInputLabel);
    visitDiv.appendChild(visitAgeInput);
    visitDiv.appendChild(visitInsideInputLabel);
    visitDiv.appendChild(visitInsideInput);
    visitDiv.appendChild(visitSeenByInputLabel);
    visitDiv.appendChild(visitSeenByInput);
    visitDiv.appendChild(visitButton);

    // Add an event listener to the login button to handle login
    visitButton.addEventListener("click", GetAddVisitInformation);
}

// Function to get Visit information from input fields
async function GetAddVisitInformation() {
    let visitPetId = document.querySelector("#visitPetId-input").value;
    let visitPersonId = document.querySelector("#visitPersonId-input").value;
    let visitWeight = document.querySelector("#visitWeight-input").value;
    let visitAge = document.querySelector("#visitAge-input").value;
    let visitInside = document.querySelector("#visitInside-input").checked;
    let visitSeenBy = document.querySelector("#visitSeenBy-input").value;

    await AddNewVisit(visitPetId, visitPersonId, visitWeight, visitAge, visitInside, visitSeenBy);
    GenerateAllVisitsContainer();
}

// Function to add new Visit into the system
async function AddNewVisit(visitPetId, visitPersonId, visitWeight, visitAge, visitInside, visitSeenBy)
{
    try 
    {
        let response = await fetch(`${BASE_URL}/Visits`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json" // Corrected the content type to 'application/json'
            },
            body: JSON.stringify(
                {
                    "petId": visitPetId,
                    "personId": visitPersonId,
                    "weight": visitWeight,
                    "age": visitAge,
                    "inSideVisit": visitInside,
                    "appointmentDate": Date,
                    "seenBy": visitSeenBy
                })
        });

        let data = await response.json();
        new_visit = data;
        console.log(new_visit);
        console.log(data);
    } 
    catch (e) 
    {
        console.error("Error Adding New Visit:", e); // Added error logging
    }
}

//----------------------------------------------//
// Get Visit Container Creation Functions       //
//----------------------------------------------//
function GenerateGetVisitContainer() {
    // Create header for Get Visit Section 
    let getVisitHeader = document.createElement("h2");
    getVisitHeader.type = 'text';
    getVisitHeader.setAttribute("style", "background-color: #eed5d7;");
    getVisitHeader.textContent = "Get a Visit from the System"

    // Create the getVisit input field and label
    let getVisitInput = document.createElement('input');
    getVisitInput.type = 'text';
    getVisitInput.placeholder = "Enter Visit ID"; //add default text in field
    getVisitInput.setAttribute("required", "required")//makes field required 
    getVisitInput.id = 'getVisit-input';
    getVisitInput.style.display = 'block';

    let getVisitInputLabel = document.createElement('label');
    getVisitInputLabel.textContent = " Visit ID to Get";

    // Create the Login button
    let getVisitButton = document.createElement('button');
    getVisitButton.textContent = "Get Visit";

    // Append the Get User fields and labels to the container
    getVisitContainerDiv.appendChild(getVisitHeader);
    getVisitContainerDiv.appendChild(getVisitInputLabel);
    getVisitContainerDiv.appendChild(getVisitInput);
    getVisitContainerDiv.appendChild(getVisitButton);

    // Add an event listener to the Login button to handle login
    getVisitButton.addEventListener("click", GetVisitIdInformation);
}

// Function to get Visit information from input fields
async function GetVisitIdInformation() {
    let visitId = document.querySelector("#getVisit-input").value;

    // Call the function to get the visit from the system
    let visit = await GetVisitById(visitId);
    getVisitDisplayContainerDiv.innerHTML = GenerateVisitDisplayTable(visit);
}

// Function to get a single Visit by their VisitID
async function GetVisitById(id) {
    try {
        let response = await fetch(`${BASE_URL}/Visits/${id}`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (Error) {
        alert("Visit ID was not located please try again."); 
        console.error(Error);
    }
}

// Function to build a table and then load it with the passed in data
function GenerateVisitDisplayTable(visit) {

    // This line declairs a new table node/section in your HTML
    let visitDisplayTable = '<table>';

    // This section builds the Column Header Names
    visitDisplayTable += `<tr>
        <th>Visit Id</th>
        <th>Pet Id</th>
        <th>Person Id</th>
        <th>Visit Weight</th>
        <th>Visit Age</th>
        <th>Visit InSidePet</th>
        <th>Visit AppointmentDate</th>
        <th>Visit SeenBy</th>
    </tr>`;

    // This section adds the passed in data into the table
    visitDisplayTable += `<tr>
        <td>${visit.visitId}</td>
        <td>${visit.petId}</td>
        <td>${visit.personId}</td>
        <td>${visit.weight}</td>
        <td>${visit.age}</td>
        <td>${visit.inSidePet}</td>
        <td>${visit.appointmentDate}</td>
        <td>${visit.seenBy}</td>
        </tr>`;

    // This line closes out the table nod/section in your HTML
    visitDisplayTable += '</table>';

    return visitDisplayTable;
}

function TeardownVisitDisplayTableContainer() {
    // Find the Display Person container
    let visitDisplayDiv = document.querySelector("#get-visit-display-container");

    // If the Display Person container exists, remove all its children
    if (visitDisplayDiv != null) {
        while (visitDisplayDiv.firstChild) {
            visitDisplayDiv.firstChild.remove();
        }
    }
}

//----------------------------------------------//
// List All Visit Container Creation Functions  //
//----------------------------------------------//
// Function to build out the code for the container
async function GenerateAllVisitsContainer() {

    TeardownVisitTableContainer();

    // Create Div to hold Header Text for table
    let visitAllHeaderDiv = document.createElement("div");
    visitAllHeaderDiv.id = "visitAllHeader-container";

    // Create header for All Visits table 
    let visitAllHeader = document.createElement("h2");
    visitAllHeader.type = 'text';
    visitAllHeader.setAttribute("style", "background-color: #eed5d7;");
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

    // This line declairs a new table node/section in your HTML
    let visitTable = '<table>';

    // This section builds the Column Header Names
    visitTable += `<tr>
        <th>Visit Id</th>
        <th>Pet Id</th>
        <th>Person Id</th>
        <th>Visit Weight</th>
        <th>Visit Age</th>
        <th>Visit InSidePet</th>
        <th>Visit AppointmentDate</th>
        <th>Visit SeenBy</th>
    </tr>`;

    // This section adds the passed in data into the table
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

    // This line closes out the table nod/section in your HTML
    visitTable += '</table>';

    return visitTable;
}

function TeardownVisitTableContainer() {
    // Find the Display All Visit container
    let visitTableDiv = document.querySelector("#all-visits-container");

    // If the Display All Visit container exists, remove all its children
    if (visitTableDiv != null) {
        while (visitTableDiv.firstChild) {
            visitTableDiv.firstChild.remove();
        }
    }
}