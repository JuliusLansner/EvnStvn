function Dog(name,age,race){
this.dName = name;
this.dAge = age;
this.dRace = race;
this.dColor = "white";
}
const dogone = new Dog("Emi", 1,"samoyed");

//We !can't! add another properties or methods through normal means like:
Dog.color="black";
// so we add a "dColor".
console.log(dogone); //only shows the dColor
// we can also do it through prototypes.
Dog.prototype.dColorTwo = "black";
// we can also add functions:
Dog.prototype.name = function(){
    return this.name + " " + this.dAge
};
const dogTwo = new Dog("emi2",2,"Samyed");
console.log(dogTwo.name())





// all JS objects inherit properties and methods from a prototype, examples:

//Date object inherits from Date.protoype
//Array object inherit from Array.prototype
//Dog object inherits from Dog.prototype



// Every constructor function has a prototype(hidden object).
// the "prototype" object is used to define properties and methods that will be
// shared among all instances created with that constructor function.