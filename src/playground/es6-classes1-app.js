class Person{
  constructor(name = 'dog') {
    // We are using this as we would in csharp as it sets up
    // The class instance for the object that is calling it
    // name will be specifically for this instance.
    this.name = name;
  }

  getGretting(){
    return this.name;
  }
}


// extends allows us to use a different form of inheritence
// in JavaScript this is called subclass
// Student extends a Person & is then considered a Person
class Student extends Person{
  constructor(name, major) {
    // Super will Call the base class
    super(name);
    this.major = major;
  }

  // This will have access to all methods and constructor
  getGretting() {
    // This will call the parent method
    // super gives us access to parent constructor & also all the methods
    const getParent = super.getGretting();

    // I am overridden from Person
    return `${this.major} This is my major ${getParent}` ;


  }
}

class Traveler extends Person{
  constructor(name, homelocation){
    super(name);
    this.homelocation = homelocation;
  }

  getGretting() {
    const name = super.getGretting();
    if(this.homelocation){
      return `Hi i'm ${name} and i'm visiting from ${this.homelocation}`;
    }

    return `Hi i'm ${name}`;
  }
}

const me = new Traveler('James');
console.log(me.getGretting());
