// ******************** 1 ********************//
// fatching DOM elements
const getCurrentDayAndTimeBtn = document.getElementById('get-current-day-and-time');
const currentDayAndTimeDisplay = document.getElementById('current-day-and-time');

const currentDayAndTime = () => {
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let today = new Date();
    let dayNumber = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    if (hour <= 12) {
        hour = hour + ' AM';
    } else {
        hour =  (hour === 24) ? `0 AM` : `${hour - 12} PM`;
    }

    // display date and time
    currentDayAndTimeDisplay.innerHTML = `Today is : ${daylist[dayNumber]}. Current time is : ${hour} : ${minute} : ${second}`;
};

getCurrentDayAndTimeBtn.addEventListener('click', currentDayAndTime);


// ******************** 2 ********************//
// print current window screen
const printCurrentPageBtn = document.getElementById('print-current-bage-btn');

const printCurrentWindowPage = () => {
    window.print();
}

printCurrentPageBtn.addEventListener('click', printCurrentWindowPage);


// ******************** 3 ********************//
// display current date dd/mm/yy
const getCurrentDateBtn = document.getElementById('get-current-date-btn');
const currentDateDisplay = document.getElementById('current-date');

const currentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let day = (dd < 10) ? `0${dd}` : dd;
    let mm = today.getMonth() + 1
    let month = (mm < 10) ? `0${mm}` : mm;
    let year = today.getFullYear();

    today = `${day}/${month}/${year}`

    currentDateDisplay.innerHTML = `Today's date: ${today}`;
}

getCurrentDateBtn.addEventListener('click', currentDate);


// ******************** 4 ********************//
// Calculate Area of Triangle (Sides: 5, 6, 7)

// The area of ​​any triangle whose sides are known can be calculated 
// using Heron's formula. First, the half perimeter (\(s\)) of the triangle 
// is calculated by adding all three sides and dividing by 2 (\(s=(a+b+c)/2\)). 
// Then the area (\(P\)) is calculated as the square root of the product of the 
// semi-perimeter and the difference of the semi-perimeter and each individual 
// side (\(P=\sqrt{s(s-a)(s-b)(s-c)}\)).

const getTriangleAreaBtn = document.getElementById('get-triangle-area-btn');
const triangleAreaDisplay = document.getElementById('triangle-area');

const calculateTriangleArea = () => {
    let side1 = document.getElementById('triangle-side-1').value;
    let side2 = document.getElementById('triangle-side-2').value;
    let side3 = document.getElementById('triangle-side-3').value;
    let form = document.getElementById('triangle-sides-form');

    const regex = /^\s*(0\.[1-9]\d*|[1-9]\d*(\.\d+)?)\s*$/;

    // For three sides to form a triangle, the sum of the lengths 
    // of any two sides must be greater than the length of the third side, 
    // a rule known as the Triangle Inequality Theorem.

    // check if the correct sides are inputed
    if (regex.test(side1.trim()) && regex.test(side2.trim()) && regex.test(side3.trim())) {
        
        // turn to value type from string to number, string is obtained by default thrugh input field
        let s1 = parseFloat(side1);
        let s2 = parseFloat(side2);
        let s3 = parseFloat(side3);

        // check sides
        if (((s1 + s2) > s3) && ((s2 + s3) > s1) && ((s3 + s1) > s2)) {
            let semiparameter = (s1 + s2 + s3) / 2;

            let triangleArea = Math.sqrt(semiparameter * ((semiparameter - s1) * (semiparameter - s2) * (semiparameter - s3)));

            triangleAreaDisplay.innerHTML = `Triangle area  for the triangle with sides ${s1}, ${s2} and ${s3} is : ${triangleArea}`;
        } else {
            triangleAreaDisplay.innerHTML = 'For three sides to form a triangle, the sum of the lengths of any two sides must be greater than the length of the third side, a rule known as the <strong>Triangle Inequality Theorem.</strong> <br> PLEASE TRY AGAIN! ';
        }
    } else {
        triangleAreaDisplay.innerHTML = 'The value must be a positive number!';
    }

    // clear form and triangle sides values
    side1 = '';
    side2 = '';
    side3 = '';
    form.reset();
    

}

getTriangleAreaBtn.addEventListener('click', calculateTriangleArea);

// ******************** 5 ********************//
// Rotate String 'w3resource' Periodically

// The JavaScript program continuously rotates the string 'w3resource' 
// to the right by periodically moving the last character to the front. 
// It uses the setInterval function to update the string every 100 milliseconds, 
// modifying the text content of a specified HTML element by its ID.

let currentRotationInterval;
const rotatedWordBtn = document.getElementById('rotated-word-btn');
const rotatedWordDisplay = document.getElementById('rotated-word-display');

const rotateWord = () => {

    if (currentRotationInterval) {
        clearInterval(currentRotationInterval);
    }

    const getRotatedWord = document.getElementById('rotated-word').value;

    if (!getRotatedWord) return;

    let characterArray = [...getRotatedWord];

    const characterArrayLength = characterArray.length;
    let rotationCounter = 0;

    rotatedWordDisplay.innerHTML = `Rotated word : ${getRotatedWord}`;

    const intervalFunction = () => {
        const lastCharacter = characterArray.pop();
        characterArray.unshift(lastCharacter);

        let rotatedWord = characterArray.join('');
        rotatedWordDisplay.innerHTML = `Rotated word : ${rotatedWord}`;
        rotationCounter++;

        if (rotationCounter === characterArrayLength) {
            clearInterval(currentRotationInterval);

            setTimeout(() => {
                rotationCounter = 0;

                currentRotationInterval = setInterval(intervalFunction, 100);
            }, 1000)
        }
    };

    currentRotationInterval = setInterval(intervalFunction, 100);
}

rotatedWordBtn.addEventListener('click', rotateWord);


// ******************** 6 ********************//
// The JavaScript program checks if a given year is a leap year 
// by determining if it is divisible by 4 but not by 100, or if 
// it is divisible by 400. It uses conditional statements to 
// implement these rules and then prints whether the year is a 
// leap year or not.

// select dropdown initial set
const selectElement = document.getElementById('leap-year-to-check');
const startYear = 1;         // Starting year (1 AD)
const endYear = 3000;          // Ending year
const currentYear = new Date().getFullYear(); // Get the current year (e.g., 2025)

// Loop through the years from 1 to 3000
for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    
    // Set the option's value and displayed text to the year number
    option.value = year;
    option.textContent = year;

    // Check if the current year matches the year in the loop
    if (year === currentYear) {
            // Set the current year as the default selected option
            option.selected = true;
    }
    
    selectElement.appendChild(option);
}