class January  {
  constructor() {
    this.name = "January";
    this.days = 31;
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day",
      notes: null
    },{
      date: null,
      name : "Martin Luther King Day",
      description: "American federal holiday marking the birthday of Martin Luther King Jr.",
      range: null,
      occurence: "Every third Monday",
      notes: null
    }];
  }
};

class February {
  constructor() {
    this.name = "February"
    this.days = 28;
    this.leapyear = 1;
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date: null,
      name: "Washington's Birthday" ,
      description: "American federal holiday marking the birthday of George Washington",
      range: null,
      occurence: "Every third Monday"
    }]

  }
};

class March {
  constructor() {
    this.name = "March"
    this.days = 31
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]

  }
};

class April {
  constructor() {
    this.name = "April"
    this.days = 30
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]

  }
};


class May {
  constructor() {
    this.name = "March"
    this.days = 31
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]

  }
};

class June {
  constructor() {
    this.name = "March"
    this.days = 30
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]

  }
};

class July {
  constructor() {
    this.name = "March"
    this.days = 31;
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]
  }
};

class August {
  constructor() {
    this.name = "August"
    this.days = 30
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]
  }
};

class September {
  constructor() {
    this.name = "September"
    this.days = 30
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]
  }
};

class October {
  constructor() {
    this.name = "October"
    this.days = 31
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }]
  }
};

class November {
  constructor() {
    this.name = "November"
    this.days = 30
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }];
  }
};

class Decemeber {
  constructor() {
    this.name = "December"
    this.days = 31
    this.holidays = [{
      date : "01",
      name : "New Years",
      description : "The beginning of the calander year",
      range : null,
      occurence : "Every first day"
    },{
      date : null,
      name : "Martin Luther King Day",
      description : "American federal holiday marking the birthday of Martin Luther King Jr",
      range : null,
      occurence : "Every third Monday"
    }];
  }
};



class Months {
  constructor() {
    this.january = new January();
    this.february = new February();
    this.march = new March();
    this.april = new April();
    this.may = new May();
    this.june = new June();
    this.july = new July();
    this.august = new August();
    this.september = new September();
    this.october = new October();
    this.november = new November();
    this.december = new Decemeber();
    this.allMonths = ["January", "February", "March", "April", "May",
                   "June", "July", "August", "September", "October",
                   "November", "December"]
  }
}

class Years {
  constructor() {
    this.year = new Date().getUTCFullYear();
  }
}

class Time  {
  constructor() {
   this.months = new Months()
   this.years = new Years()
  }

  errorCheck(entry, type) {
    if (typeof entry !== type) throw new Error(`Requires a ${type}`)

  }

  createArray(num) {
    this.errorCheck(num, "number");
    let array_of_nums = [];

    function countDown(int) {
      if(int == 0) return;
      if(int >= 1) array_of_nums.push(int);
      countDown(int - 1);
    }
    countDown(num);
    return array_of_nums;
  }

  getMonth(month) {
    this.errorCheck(month, "string");
    return this.months[month.toLowerCase()]
  }

  getAllMonths() {
    return this.months.allMonths
  }
};