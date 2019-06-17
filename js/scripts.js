///Front End---
var locationbook = new LocationBook();
function displayLocationDetails (locationbookToDisplay){
  var locationList = $("#locations");
  var htmlForLocationInfo = "";
  locationbookToDisplay.locations.forEach(function(location) {
    htmlForLocationInfo += location.country;
  });
  locationList.html(htmlForLocationInfo);
};



$(document).ready(function() {
  // var output = LocationBook();
  locationbook.locations.forEach(function(location){
    console.log(location);
  $("#locations").append(location.country + ", ");
});
    // alert(locationbook.cityCountry());
});






//Business Logic for LocationBook -------

function LocationBook() {
  this.locations = []
}

LocationBook.prototype.findLocation = function(country) {
  console.log(this)
  for (var i = 0; i < this.locations.length; i ++) {
    if (this.locations[i]) {
      if (this.locations[i].country == country) {
        return this.locations[i];
      }
    }
  };
  return false;
}

LocationBook.prototype.deleteLocation = function (country) {
  for (var i=0; i<this.locations.length; i++) {
    if (this.locations[i]) {
      if (this.locations[i].country == country) {
        delete this.locations[i];
        return true;
      }
    }
  };
  return false;
}

LocationBook.prototype.addLocation = function(location) {
  this.locations.push(location);
}
//Business Logic for Locations --------
function Location(country, city, year) {
  this.country = country;
  this.city = city;
  this.year = year;
}

Location.prototype.cityCountry = function() {
  return this.city + ", " + this.country;
}

//Temporary code for adding some locations.
var place = new Location ("Costa Rica", ["Tamarindo", "Playas del Coco"], 2006);
var place2 = new Location ("Japan", "Tokyo", 2018);
locationbook.addLocation(place);
locationbook.addLocation(place2);
console.log (locationbook);
