// check hours of sleep each night of week
const getSleepHours = day => {
    switch(day){
      case 'Monday':
        return 8
        break;
      case 'Tuesday':
        return 7
        break;
      case 'Wednesday':
        return 8
        break;
      case 'Thursday':
        return 5
        break;
      case 'Friday':
        return 8
        break;
      case 'Saturday':
        return 7
        break;
      case 'Sunday':
        return 8
        break;
      default: 
        return 'Error!'
    }
  };

  // add total hours slept
    const getActualSleepHours = () => 
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  

  // get ideal sleep hours prefered, and multiplying by 7 days a week
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };

  // calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    // output result ot user
    
    if(actualSleepHours === idealSleepHours) {
       console.log("You've got the perfect amount of sleep!"); 
    }

    else if(actualSleepHours > idealSleepHours) {
        console.log(`You've got ${(idealSleepHours - actualSleepHours)}more hours of sleep this week.`);
    }

    else if(actualSleepHours < idealSleepHours) {
        console.log(`You should get some rest because you've slept ${(idealSleepHours - actualSleepHours)} hours less than you should have this week.`);
    }

    else {
        console.log("Error! Something went wrong, check your code.");
    }
};

calculateSleepDebt();

  