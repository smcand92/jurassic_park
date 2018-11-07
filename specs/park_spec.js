const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;

  beforeEach(function () {
park = new Park('Jurassic Park', 75)
});

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 75);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('t-rex');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('t-rex');
    park.addDinosaur('triceratops');
    park.removeDinosaur('triceratops');
    const expected = ['t-rex'];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur('t-rex', carnivore, 50);
    park.addDinosaur('triceratops', herbivore, 60);
    park.addDinosaur('raptor', omnivore, 70);
    const actual = 
  });

  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});
