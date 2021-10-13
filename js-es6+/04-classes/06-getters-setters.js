// Advantages of getters and setters:

// Elimination of redundancy: Computed fields can be derived using an algorithm depending on other properties.

// Information hiding: It allows you to hide properties that are retrievable or settable through getters or setters.

// Encapsulation: You can couple other functionality with getting/setting a value.

// Defining a public interface: It is possible to keep these definitions constant and reliable, while you are free to change the internal representation used for computing these fields. This comes in handy e.g. when dealing with a DOM structure, where the template may change.

// Easier debugging: Just add debugging commands or breakpoints to a setter, and you will know what caused a value to change.

class Rectangle 