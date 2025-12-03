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


