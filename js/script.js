alert('Javascript is loaded');

// constants
const buttonEl = document.querySelector('.submit-btn');

const assignmentEls = [
    {dateEl: 2020-11-16, 
        classEl: 'English', 
        detailsEl: 'write a paper on some author',
        
    },
];

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
// todo: write callback function to get input data
function getData() {
    data = {
        dateEl: dateEl.value,
        classEl: classEl.value,
        detailsEl: detailsEl.value
    };
    // console.log(data);
    return data;
}


//todo: write function to store the data - local storage
function pushData() {
    data = getData();
    return assignmentEls.push(data);
    // storageEl.setItem('assignments', assignmentEls);
    // console.log(storageEl);
    // return storageEl;
}

function clearInputs() {
    dateEl.value = null;
    classEl.value = null;
    detailsEl.value = null;
}

// function to remove assignments when completed

// need to give each ul an identifier??

// click handler function
function handleSubmit(event) {
    event.preventDefault();
    pushData();
    console.log(assignmentEls);
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



