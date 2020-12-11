alert('Javascript is loaded');

// constants
const buttonEl = document.querySelector('.submit-btn');

const assignmentEls = [];

// App's State variables

let dateEl, classEl, detailsEl, assignmentListEl, listEls, data, storageEl;
    
    
// cached element refs
dateEl = document.getElementById('date');
classEl = document.getElementById('class');
detailsEl = document.getElementById('assignment');
assignmentListEl = document.querySelector(".assignment-list");
storageEl = window.localStorage;




// Event listeners
buttonEl.addEventListener('click', handleSubmit);




// Functions
// need unique key for each assignment - use random number generator
function getKey() {
    return keyEl = Date.now();
}


// todo: alter data structure to include keys for assignments
function getData() {
    data = {
        key: getKey(),
        dateEl: dateEl.value,
        classEl: classEl.value,
        detailsEl: detailsEl.value
    };
    return data;
}


function pushData() {
    data = getData();
    return assignmentEls.push(data);
}

// todo: write function to store the data - local storage
// stringify our assignmentEls object JSON.stringify('assignmentEls');


// refactor to stringify and store each assigment
function storeData () {
    data = getData();
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    localStorage.setItem(`${keyEl}`, jsonData);

}

function clearInputs() {
    dateEl.value = null;
    classEl.value = null;
    detailsEl.value = null;
}

// function to retrieve items from storage
function getAssignments() {
    assignments = localStorage.getItem()
}

// function to remove assignments when completed

// click handler function
function handleSubmit(event) {
    event.preventDefault();
    pushData();
    storeData();
    console.log(storageEl);
    renderListEls();
    clearInputs();
}

// generate html from input
function generateHTML() {
    listEls = assignmentEls;
    return listEls.map((el) => `
    <h3>${el.classEl} Assignment</h3>
    <ul>
    <li>${el.dateEl}</li>
    <li>${el.classEl}</li>
    <li>${el.detailsEl}</li>
    </ul>
    ` 
    );
}

// Render method
function renderListEls () {
    let html = generateHTML().join('');
    assignmentListEl.innerHTML = html;
}

function clearStorage() {
    localStorage.clear();
}

// remove assignment =  localStorage.removeItem('uniqueKey');

