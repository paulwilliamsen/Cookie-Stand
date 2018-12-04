'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// Stores: 1st and Pike, Capitol Hill, Seattle Center, SeaTac Airport, Alki;

var firstandPike = {
  name: '1st and Pike Store',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  avgCustomerArray: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
firstandPike.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.avgCustomerArray.push(singleHourCustomers);
  }
},
firstandPike.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.avgCustomerArray[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
},

firstandPike.render = function() {
  var firstandPike = document.getElementById('listOne');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    firstandPike.appendChild(list);
  }
  var list2 = document.createElement('li'); 
  list2.textContent = 'Total: ' + this.totalCookies + ' cookies';
  firstandPike.appendChild(list2);

  var storeOne = document.getElementById('headerOne');
  storeOne.textContent = this.name;
  
};
firstandPike.render();

var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  avgCustomerArray: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
capitolHill.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.avgCustomerArray.push(singleHourCustomers);
  }
},
capitolHill.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.avgCustomerArray[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
},

capitolHill.render = function() {
  var capitolHill = document.getElementById('listTwo');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    capitolHill.appendChild(list);
  }
  var list3 = document.createElement('li'); 
  list3.textContent = 'Total: ' + this.totalCookies + ' cookies';
  capitolHill.appendChild(list3);

  var storeTwo = document.getElementById('headerTwo');
  storeTwo.textContent = this.name;
  
};
capitolHill.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  avgCustomerArray: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
seattleCenter.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.avgCustomerArray.push(singleHourCustomers);
  }
},
seattleCenter.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.avgCustomerArray[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
},

seattleCenter.render = function() {
  var seattleCenter = document.getElementById('listThree');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    seattleCenter.appendChild(list);
  }
  var list3 = document.createElement('li'); 
  list3.textContent = 'Total: ' + this.totalCookies + ' cookies';
  seattleCenter.appendChild(list3);

  var storeThree = document.getElementById('headerThree');
  storeThree.textContent = this.name;
  
};
seattleCenter.render();


var SeaTacAirport = {
  name: 'Seattle Airport',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  avgCustomerArray: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
SeaTacAirport.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.avgCustomerArray.push(singleHourCustomers);
  }
},
SeaTacAirport.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.avgCustomerArray[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
},

SeaTacAirport.render = function() {
  var SeaTacAirport = document.getElementById('listFour');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    SeaTacAirport.appendChild(list);
  }
  var list3 = document.createElement('li'); 
  list3.textContent = 'Total: ' + this.totalCookies + ' cookies';
  SeaTacAirport.appendChild(list3);

  var storeFour = document.getElementById('headerFour');
  storeFour.textContent = this.name;
  
};
SeaTacAirport.render();


var alki = {
  name: 'Alki Store',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  avgCustomerArray: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
alki.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.avgCustomerArray.push(singleHourCustomers);
  }
},
alki.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(this.avgCustomerArray[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPerHour);
    this.totalCookies += cookiesPerHour;
  }
},

alki.render = function() {
  var alki = document.getElementById('listFive');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    alki.appendChild(list);
  }
  var list3 = document.createElement('li'); 
  list3.textContent = 'Total: ' + this.totalCookies + ' cookies';
  alki.appendChild(list3);

  var storeFive = document.getElementById('headerFive');
  storeFive.textContent = this.name;
  
};
alki.render();


var totalTotalTotal = document.getElementById('headerSix');
totalTotalTotal.textContent = this.alki.totalCookies + this.seattleCenter.totalCookies + this.firstandPike.totalCookies + this.capitolHill.totalCookies + this.SeaTacAirport.totalCookies + ': Total Cookies sold Today!';

