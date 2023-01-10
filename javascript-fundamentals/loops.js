function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }
  

function printFives(max) {
    for(let i = 1; i < max; i++) {
      if(i % 5 == 0) {
        console.log(i)
      }
    }
}

function logBetweenStepper(min, max, stepper) {
    for(let i = min; i <= max; i+=stepper) {
        console.log(i);
    }
}