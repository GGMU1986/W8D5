class Surrogate {

    constructor() {
        this.prototype = SuperClass.prototype;
    }

    



}

//Cat.prototype = Animal.prototype


Function.prototype.inherits = function () {
    Subclass.prototype = new Surrogate ()
}

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);