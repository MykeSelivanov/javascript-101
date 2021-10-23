// Heated debates of composition over inheritance made mixins appear to be the winner construct for composing objects. 
// Therefore, libraries such as UnderscoreJs and LoDash created support for this construct with their methods _.extend or _.mixin.

// In ES6, Object.assign does the same thing as _.extend or _.mixin.


let horse = {
    horseName: 'QuickBucks',
    toString: function () {
        return this.horseName;
    }
};

let rider = {
    riderName: 'Frank',
    toString: function () {
        return this.riderName;
    }
};

let horseRiderStringUtility = {
    toString: function () {
        return this.riderName + ' on ' + this.horseName;
    }
}

let racer = Object.assign(
    {},
    horse,
    rider,
    horseRiderStringUtility
);

console.log(racer.toString());

// Had we omitted the {} from the assembly of the racer object, seemingly, nothing would have changed, as 
// racer.toString() would still have been "Frank on QuickBucks". However, notice that horse would have 
// been === equivalent to racer, meaning, that the side-effect of executing Object.assign would have been the mutation 
// of the horse object.