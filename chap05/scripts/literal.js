var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function () {
  return this.lastName + " " + this.firstName;
};

Member.prototype.toString = function () {
  return this.lastName + " " + this.firstName;
};
