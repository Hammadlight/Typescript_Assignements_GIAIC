// write a program that creates containing these items.
// let person_Name :string = `Imran Khan` ;
// const personName_Array :string[] = [`Person`, `Cat`, `Cold Drink`];
// datatype of person object
interface person {
    age : number ,
    name : string ,
    nationality : string ,
    Student : Boolean ,
}
//person object
let person :person = {
    age : 27 ,
    name : `Imran Khan`,
    nationality : `Pakistan` ,
    Student : true ,
};
//print person
console.log(person);
// datatype of car object
interface car {
    maker : string,
    color :string,
    automatic : boolean,
}
// car objects
let car = {
    maker : `toyota` ,
    color : `white` ,
    automatic : true,
}
//print car
console.log(car);
