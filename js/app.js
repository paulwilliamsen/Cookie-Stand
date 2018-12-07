'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeLocations = [];

var cookieTable = document.getElementById('table');
var storeForm = document.getElementById('store-form');

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = Math.floor(avg);
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  storeLocations.push(this);

}

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  tableRow.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    tableRow.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  tableRow.appendChild(thEl);
  cookieTable.appendChild(tableRow);
}

Store.prototype.numCustHourly = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
};

Store.prototype.cookiesPerCustomer = function () {

  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.floor(this.numCustHourly() * this.avg);
    this.cookiesEachHour.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
};

Store.prototype.render = function () {
  var elTr = document.createElement('tr');
  var elTd = document.createElement('td');
  elTd.textContent = this.name;
  elTr.appendChild(elTd);

  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.cookiesEachHour[i];
    elTr.appendChild(tdCell);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookies;
  elTr.appendChild(tdTotal);
  cookieTable.appendChild(elTr);
};

// Stores: First and Pike, Seattle Airport, Seattle Center, Capital Hill, Alki

new Store('First and Pike', 23, 65, 6.3);
new Store('Seattle Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


function footerRow() {
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('td');
  thEl.textContent = 'Hourly Total';
  tableRow.appendChild(thEl);
  cookieTable.appendChild(tableRow);


  var totalTotal = 0;

  for (var x = 0; x < hours.length; x++) {
    var hourlyTotal = 0;
    for (var y = 0; y < storeLocations.length; y++) {
      hourlyTotal += storeLocations[y].cookiesEachHour[x];
    }

    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
    
    totalTotal += hourlyTotal;
    
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  tableRow.appendChild(tdElement);

  
}

for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].cookiesPerCustomer();
}

Store.renderAllStores = function() {
  for(var i=0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }

};


makeHeaderRow();
Store.renderAllStores();
footerRow();



storeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var newName = event.target.name.value;
  var newMin = parseInt(event.target.mincustomer.value);
  var newMax = parseInt(event.target.maxcustomer.value);
  var newAvg = parseFloat(event.target.avgcookie.value);
  new Store(newName, newMin, newMax, newAvg).cookiesPerCustomer();
  cookieTable.textContent='';

  console.log(storeLocations);

  makeHeaderRow();
  

  Store.renderAllStores();
  footerRow();
  
});
