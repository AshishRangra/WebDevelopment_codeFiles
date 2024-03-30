class A {
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
 data(){
    console.log("Name is : "+this.name + " Age is : " +this.age)
  }
}
const obj = new A("Ashish",12);
obj.data();

