const time = process.argv.slice(2) // Take in command line argument, removing 1st 2 elements passed // i.e node timer1.js 3 5 7 -1

const timer = (time) => {

  if (time.length === 0) { // Edge, if there is no input
    console.log('No input given');
    return;
  }

  for (let lag of time) {
    if (lag > 0 && !isNaN(lag)) { // Edge, if lag is - or NaN
    setTimeout(() => {
      process.stdout.write('Hello -')}, lag * 1000);
    }
  }

};

timer(time);

// TEST 
// node timer1.js 3 5 7 -1

// EDGE CASES
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.