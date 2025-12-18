// ******************** 1 ********************//
function displayCurrentDayAndTime() {
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
}

// ******************** 2 ********************//
function printCurrentWindowContents() {
    const printCurrentPageBtn = document.getElementById('print-current-bage-btn');

    const printCurrentWindowPage = () => {
        window.print();
    }

    printCurrentPageBtn.addEventListener('click', printCurrentWindowPage);
}

// ******************** 3 ********************//
function getCurrentDateInVariousFormats() {
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
}

// ******************** 4 ********************//
function calculateAreaOfTriangle() {
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
}

// ******************** 5 ********************//
function rotateStringPeriodically() {
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
}

// ******************** 6 ********************//
function checkLeapYearGregorian() {
    // The JavaScript program checks if a given year is a leap year 
    // by determining if it is divisible by 4 but not by 100, or if 
    // it is divisible by 400. It uses conditional statements to 
    // implement these rules and then prints whether the year is a 
    // leap year or not.
    const leapYearToCheckBtn = document.getElementById('leap-year-to-check-btn');
    const leapYearStatementDisplay = document.getElementById('leap-year-statement-display');
    let selectedYear = '';

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

    // Check leap year
    const checkIfLeapYear = () => {
        selectedYear = parseInt(selectElement.value);

        if ((selectedYear % 4 === 0 && selectedYear % 100 !== 0) || selectedYear % 400 === 0) {
            leapYearStatementDisplay.innerHTML = `The selected year ${selectedYear} is LEAP year`;
        } else {
            leapYearStatementDisplay.innerHTML = `The selected year ${selectedYear} is NOT LEAP year`;
        }
    };

    leapYearToCheckBtn.addEventListener('click', checkIfLeapYear);
}

// ******************** 7 ********************//
function initializeJanuaryFirstFinder() {
    // DOM elements selection.
    const yearSelect = document.getElementById('first-january-year');
    const checkButton = document.getElementById('first-january-year-btn');
    const resultDisplay = document.getElementById('first-january-year-display');

    const MIN_YEAR = 2014;
    const MAX_YEAR = 2050;

    // --- 1. Populate the Select Element ---

    // Add a default, disabled option prompt.
    let defaultOption = document.createElement('option');
    defaultOption.textContent = "Select a year";
    defaultOption.value = ""; // Empty value for validation
    defaultOption.disabled = true;
    defaultOption.selected = true;
    yearSelect.appendChild(defaultOption);

    // Loop through the years from 2014 to 2050 and create <option> elements.
    for (let year = MIN_YEAR; year <= MAX_YEAR; year++) {
        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // --- 2. Define the Calculation Function ---

    /**
     * Calculates and displays the day of the week for January 1st of the selected year.
     */
    function calculateJanuaryFirstDay() {
        // Get the currently selected year (value is a string).
        const selectedYearString = yearSelect.value;
        
        // Basic validation: Check if a year was actually selected.
        if (!selectedYearString) {
            resultDisplay.textContent = "Please select a valid year.";
            resultDisplay.style.color = "red";
            return;
        }

        // Convert the selected year to an integer.
        const year = parseInt(selectedYearString);

        // Create a Date object for January 1st of the selected year.
        // Month is 0-indexed (0 = January).
        const januaryFirst = new Date(year, 0, 1);

        // The getDay() method returns the day of the week (0 = Sunday, 6 = Saturday).
        const dayIndex = januaryFirst.getDay();

        // Array of day names for lookup.
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Get the corresponding day name.
        const dayName = daysOfWeek[dayIndex];

        // --- 3. Display the Result ---

        resultDisplay.textContent = `January 1st, ${year} falls on a ${dayName}.`;
    }

    // --- 4. Attach the Event Listener ---

    // Attach the calculation function to the button's click event.
    checkButton.addEventListener('click', calculateJanuaryFirstDay);
}

// ******************** 8 ********************//
function guessANumber() {
    const guessNumBtn = document.getElementById('guess-a-number-btn');

    const guessNum = () => {
        //let guessNumImput = parseInt(prompt('Unesi broj od 1 do 10'));
        const regexNumFrom0To10 = /^(10|[1-9])$/;
        let guessNumImput = prompt('Unesi broj od 1 do 10');
        let guessNumDisplay = document.getElementById('guess-a-number-display');
        let randomIntegerNum = String(Math.floor(Math.random() * 10) + 1);

        console.log(randomIntegerNum);

        if (regexNumFrom0To10.test(guessNumImput)) {
            if(guessNumImput ===  randomIntegerNum) {
                guessNumDisplay.innerHTML = 'Good Work';
            } else {
                guessNumDisplay.innerHTML = 'Not matched';
            }
        } else {
            alert('Not a number');
        }

    };

    guessNumBtn.addEventListener('click', guessNum);
}

// ******************** 9 ********************//
function daysTillChristmas() {
    const daysTillChristmasBtn = document.getElementById('days-to-christmas-btn');
    const daysTillChristmasDisplay = document.getElementById('days-to-christmas-display');
    const oneDay = 1000 * 60 * 60 * 24;
    
    const daysTillChristmasFunct = () => {
        const today = new Date();
        let christmasYear = today.getFullYear();

        let christmas = new Date(christmasYear, 0, 7); 
        
        if (today.getTime() > christmas.getTime()) {
            
            christmas.setFullYear(christmasYear + 1);
            
        }

        const daysTillChristmasVar = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

        daysTillChristmasDisplay.innerHTML = `Days till Christmas: ${daysTillChristmasVar}`;
    };

    daysTillChristmasBtn.addEventListener('click', daysTillChristmasFunct);

}

// ******************** 10 ********************//
function multiplyAndDivision() {
    const multiplyBtn = document.getElementById('multidivision-multiply-btn');
    const divisionBtn = document.getElementById('multidivision-divide-btn');
    const multidivisionDisplay = document.getElementById('multidivision-display');
    const firstNum = document.getElementById('first-num-multidivision');
    const secondNum = document.getElementById('second-num-multidivision');

    function multiplyNumbers() {
        let firstNumVal = firstNum.value;
        let secondNumVal = secondNum.value;
        let multiplicationValue;

        multiplicationValue = Number(firstNumVal) * Number(secondNumVal);

        multidivisionDisplay.innerHTML = `${firstNumVal} * ${secondNumVal} is ${multiplicationValue}`;
        firstNum.value = '';
        secondNum.value = '';
    }

    function devideNumbers() {
        let firstNumVal = firstNum.value;
        let secondNumVal = secondNum.value;
        let divisionValue;

        divisionValue = Number(firstNumVal) / Number(secondNumVal);

        multidivisionDisplay.innerHTML = `${firstNumVal} / ${secondNumVal} is ${divisionValue}`;
        firstNum.value = '';
        secondNum.value = '';
    }

    multiplyBtn.addEventListener('click', multiplyNumbers);
    divisionBtn.addEventListener('click', devideNumbers);
}

function convertTemperatureBetweenCelsiusAndFahrenheit() {
    const getFahrenheit = document.getElementById('get-fahrenheit');
    const getCelsius = document.getElementById('get-celsius');
    const getCalculationBtn = document.getElementById('calculate-fahr-cels-btn');
    const getCalculationDisplay = document.getElementById('calculate-fahr-cels-display');
    let numFahr = '';
    let numCels = '';
    let toCels = 0;
    let toFahr = 0;

    // Functions for shifting focus and turn string to number
    getFahrenheit.addEventListener('click', () => {
        getCelsius.value = '';
    });

    getCelsius.addEventListener('click', () => {
        getFahrenheit.value = '';
    });

    function calculateDegries() {
        numFahr = parseInt(getFahrenheit.value);
        numCels = parseInt(getCelsius.value);

        if(numFahr) {
            // calculate Celsius
            toCels = ((numFahr - 32) / 9) * 5;
            getCalculationDisplay.innerHTML = `${numFahr} is ${toCels} Celsius`;
        } else if(numCels) {
            // calculate Fahrenheit
            toFahr = ((numCels / 5) * 9) + 32;
            getCalculationDisplay.innerHTML = `${numCels} is ${toFahr} Fahrenheits`;
        } else {
            getCalculationDisplay.innerHTML = `Give me a number`;
        }
    }

    getCalculationBtn.addEventListener('click', calculateDegries);

}


/* ****************** CALL FUNCTIONS ****************** */
document.addEventListener('DOMContentLoaded', function() {
    // Call the initialization function when the page loads to set everything up.
    // It's best practice to wait for the DOM content to be fully loaded.
    displayCurrentDayAndTime();
    printCurrentWindowContents();
    getCurrentDateInVariousFormats();
    calculateAreaOfTriangle();
    rotateStringPeriodically();
    checkLeapYearGregorian();
    initializeJanuaryFirstFinder();
    guessANumber();
    daysTillChristmas();
    multiplyAndDivision();
    convertTemperatureBetweenCelsiusAndFahrenheit();
});
    
