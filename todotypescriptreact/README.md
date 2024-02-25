Typescript
typescript is a superset of javascript

In TypeScript, an interface is a way to define the shape or structure of an object. It allows you to specify the properties and their types that an object should have. Interfaces provide a mechanism for enforcing a contract on the structure of objects in your code.

optional properties in an object can be typed by using ? symbol

for example:

console.log(user);
interface Person {
  name:String;
  age:number;
  isMale?:boolean;

}

const person : Person = {
  name:"biplove",
  age:22,
  
};
interface X 
{
  name:String;
  age:number;
}
interface Y extends X 
{
  isMale:boolean,
  
}

const Person : Y = 
{
  name:"biplove",
  age:23,
  isMale:true
}

