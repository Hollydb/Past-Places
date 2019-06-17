//Business Logic for LocationBook -------

function LocationBook() {
  this.locations = []
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
