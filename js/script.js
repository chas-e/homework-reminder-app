// Adapted from blingJS

window.e = document.querySelector.bind(document);
window.ee = document.querySelectorAll.bind(document);

Node.prototype.on = function (name, fxn) {
    this.addEventListener(name, fxn);
}

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = function (name, fxn) {
    this.forEach(function (el, i) {
        el.on(name, fxn);
    });
}

// constants
const buttonEl = document.querySelector('.submit-btn');
const deleteButtonEls = document.querySelectorAll('.delete-assignment');
const clearButtonEl = document.getElementById('clear-btn');

// App's State variables

let dateEl, classEl, detailsEl, assignmentBlock, assignmentListEl, assignmentEls, storedItems, listEls, data, storageEl;
    
    
// cached element refs
dateEl = document.getElementById('date');
classEl = document.getElementById('class');
detailsEl = document.getElementById('assignment');
assignmentListEl = document.querySelector(".assignment-list");
assignmentEls = [];
storageEl = window.localStorage;
storedItems = [];
assignmentBlockEls = document.querySelectorAll('.assignment-block');


// Event listeners
//submit button event listener
buttonEl.addEventListener('click', handleSubmit);

// listener to handle delete button click
// assignmentBlockEls.addeventListener('click', handleDelete);

// listener for clear button
clearButtonEl.addEventListener('click', handleClear);


// Functions
// need unique key for each assignment - Date.now() to generate unique key (ms since 1972)
function getKey() {
    return keyEl = Date.now();
}

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

// stringify and store each assigment
function storeData () {
    data = getData();
    let jsonData = JSON.stringify(data);
    localStorage.setItem(`${keyEl}`, jsonData);
}

// function to retrieve items from storage
function retrieveData() {
    for (prop in storageEl) {
        storedItems.push(JSON.parse(localStorage.getItem(prop)));
    }
    return storedItems;
}  

function filterStoredItems() {
   return storedItems =  storedItems.filter(Boolean);
}

function concatItems() {
    assignmentEls = assignmentEls.concat(storedItems);
    return assignmentEls;
}

function renderStoredItems() {
    retrieveData();
    filterStoredItems();
    concatItems();
    renderListEls();
}

renderStoredItems();

function clearInputs() {
    dateEl.value = null;
    classEl.value = null;
    detailsEl.value = null;
}

// click handler function
function handleSubmit(event) {
    event.preventDefault();
    pushData();
    storeData();
    renderListEls();
    clearInputs();
}

// handler function for clear
function handleClear(event) {
    event.preventDefault();
    clearStorage();
}

// ToDo: Add Validation to not accept empty fields

// get index from dom element assignmentEls[idx].key
function retrieveAssignmentIndex() {
    return;
}

// function gets item by key
function retrieveStoredKey() {
    return;
}

// function removes item from storage
function removeStoredItem() {
    let storedItemKey = retrieveStoredKey();    
    storageEl.removeItem(storedItemKey);
}


// function to remove assignments when completed
// handle delete assignment
function handleDelete(event) {
    return;
    

}

// generate html from input
function generateHTML() {
    retrieveData();
    listEls = assignmentEls;
    return listEls.map((el) => `
    <div class="assignment-block" id=${el.key}>
    <h3>${el.classEl} Assignment</h3>
    <ul>
    <li>${el.dateEl}</li>
    <li>${el.classEl}</li>
    <li>${el.detailsEl}</li>
    </ul>
    <button class="delete-assignment" type="submit">💣</button>
    </div>
    ` 
    );
}

// Render method
function renderListEls () {
    let html = generateHTML().join('');
    assignmentListEl.innerHTML = html;
}

function clearStorage() {
    storageEl.clear();
    location.reload();
}
