//Business Logic for LocationBook -------

function LocationBook() {
  this.locations = []
}

LocationBook.prototype.findLocation = function(country) {
  console.log(this)
  for (var i = 0; i < this.locations.length; i ++) {
    console.log("first" + i);
    // if (this.locations[i]) {
    //   console.log("inside" + i);
      if (this.locations[i].country == country) {
              console.log("insider" + i);
        return this.locations[i];
      }
    // }
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
var locationbook = new LocationBook();
var place = new Location ("Costa Rica", ["Tamarindo", "Playas del Coco"], 2006);
var place2 = new Location ("Japan", "Tokyo", 2018);
locationbook.addLocation(place);
locationbook.addLocation(place2);
