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