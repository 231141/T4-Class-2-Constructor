class Person {
    constructor(name, age, role) {
      this.name = name;
      this.age = age;
      this.role = role;
    }
  
    greet() {
      console.log(`Hello ${this.name}, you are ${this.age} years old and you are a ${this.role}`);
    }
  }
  
  class Student extends Person {
    constructor(name, age) {
      super(name, age);
      this.role = "Student";
    }
  }
  
  class Teacher extends Person {
    constructor(name, age) {
      super(name, age);
      this.role = "Teacher";
    }
  }
  
  let student1 = new Student("Jack", 12);
  let student2 = new Student("Layla", 16);
  let teacher1 = new Teacher("Lara", 32);
  
  student1.greet();
  student2.greet();
  teacher1.greet();
  