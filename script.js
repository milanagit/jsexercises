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
const printCurrentPageBtn = document.getElementById('print-current-bage-btn');




