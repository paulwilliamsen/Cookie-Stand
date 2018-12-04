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
  var firstandPike = document.getElementById('firstandPike');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var list = document.createElement('li');
    list.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    firstandPike.appendChild(list);
  }
  var list2 = document.createElement('li');
  list2.textContent = 'Total: ' + this.totalCookies + ' cookies';
  firstandPike.appendChild(list2);
};

firstandPike.render();
