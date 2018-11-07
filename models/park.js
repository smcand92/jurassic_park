const Park = function(name, ticketPrice){
this.name = name
this.ticketPrice = ticketPrice
this.dinosaurs = []
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};
Park.prototype.numberOfDinosaurs = function(){
  return this.dinosaurs.length;
};
Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
};
Park.prototype.
 module.exports = Park;
