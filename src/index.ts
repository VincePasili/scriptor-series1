let sales: number = 454_534_334/*using underscore to huge numbers for readability */
let course: string  = 'TypeScript'
let is_published: boolean = true
/* variables with the type not defined
TypeScript will infer from the assigned value */
let level
/*Variables without initializations and no type defined will be 
infered to be of type 'any' */

/* the ANY type*/
/* As aforementioned, can be used to avoid
defining the data type of a variable, or it is the 
default for variables that are not initialized */
//example.
level = 9
level = 'Jay'
//This makes it possible to change the type of values of data we assign to values. A bad practice.
/*Arrays*/
let numbers = [1,4,6, "string"] //dynamic javascript array

let numbers2 :number[] = [23,45,21,56]//TS arrays that are confined to the type
let names:string[] = ["Vince", "John", "Jennifer", "Michelangelo"]

/*TS also offers autocompletion of all the possible actions you can perform on data*/
console.log(names.forEach( n =>n.endsWith("e")))

/*Typescript Tuples*/
//Tuples are typed arrays with a predefined length and types for each index
let myTuple: [number, boolean, string]
myTuple = [5, true, 'Johny']
//tuple with a number and string on index 0 and 1 respectively
let user: [number, string] = [3, 'Vince']
//the order of initialization matters when initializing a tuple.

/*Read Only Tuple*/
//Tuples should be read only to prevent type insecurity for the n+ indices during a push

const readOnlyTuple: readonly[number, boolean, string] = [56, true, "I am Vincent"]
//the above tuple is safe from mutation and the push function.

/* React.js used a tuple for state handling ie const [firstName, setFirstName] = useState(firstName)
=> From the above structure, we know that our list will have a string at the first index and
a function as the second value*/
/*Named Tuple */
//they give context for the values at each index
const graph: readonly[x: number, y: number] = [55.6, 32.1]

/*Typescript Object Types */
let car: {type: string, model: string, mileage:number} = {
    type: "Mitsubishi",
    model: "Mirage",
    mileage: 78
}

console.log("A car of the type " + car.type + " and the model " + car.model + "flew past us at " + car.mileage.toString() +" miles per hour");

/*Typescript Enums*/

//an enum is a special class that represents a group of constants.
// They can be string or numeric
/*Numeric Enums*/
enum CardinalDirections{
    North,
    East,
    West,
    South,
}
console.log(CardinalDirections.North)//will log 0

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCodes.NotFound)

/**
 * String Enums
 */
enum CardinalDirections1 {
    North = 'North',
    East = 'East',
    South = 'South',
    West = "West"
}
//TODO:- Vince.. Revisit Type aliases in typescript
/**
 * Bugger!!
 * Seems if I give any cent about interfaces, I have to take on aliases
 */
// So we can define an alias from both primitives and complex types 
type CarMileage = number
type CarModel = string
type CarBrand = string

//Alias for an object(complex type)
type Car = {
    mileage: CarMileage,
    brand: CarBrand,
    model: CarModel
}

const carMileage: CarMileage = 76544
const carBrand: CarBrand = "Mitsubishi"
const carModel: CarModel = "Mirage"

const myCar: Car = {
    mileage: carMileage,
    brand: carBrand,
    model: carModel
}
/**
 * Interfaces
 * The good stuff
 * They apply exclusively to object types.
 */
interface Rectangle {
    height:number,
    width: number
}
//Now we can make as many objects of the rectangle as we wish.
const rect: Rectangle = {
    height:345,
    width:78

}
const rect1: Rectangle = {
    height: 56,
    width:79
}
/**
 * EXTENDING INTERFACES
 * The gooder stuff(:))
 */
//we can have a rectangle that exends the current rectangle interface

interface ColoredRectangle extends Rectangle{
    color: string
}
const color_rect: ColoredRectangle = {
    height: 34,
    width: 54,
    color: "Red"
}
/**
 * UNIONS
 * TYPESCRIPT UNION TYPES
 */
//Union types are used when a value can be more than a single type.
//That would be when a value can be a string or a number

/* THE UNION | (OR)*/

function printStatusCode(code: string | number){
    console.log(`Return status code ${code}`)
    }
printStatusCode(404)
printStatusCode('404')
/**
 * From the above examples, we can then parse a string or a number as
 * arguements for the  function printStatusCode( arguments)
 * Notice We use backticks when we want to format our statements to the console and print variables & objects to the console
 *  or to the UX
 *  */


//  TYPESCRIPT FUNCTIONS
function getTime(): number{
    return new Date().getTime();
}
//The Void return type
function printHello(): void {
    console.log('Hello World!!')
}
//Function Parameters
function multiply(a:number, b: number){
    return a * b;
}
let product = multiply(67,3)

//Optional parameters
function add(a: number, b: number, c?: number){//operator ? marks c as optional
    return a + b + (c || 0)
    
}
let sum = add(56, 45) //the third addend will be 0
let sum_2 = add(56, 76, 45) //the third addend will be 45 since it is the third argument

//Default Parameters
/**Here the defaul value is initialized after type annotation */
function pow(value: number, exponent: number = 10){
    return value ** exponent
}

//Named Parameters
function divide({dividend, divisor}: {dividend: number, divisor: number}){
return dividend/divisor
}
let dividend = 78
let divisor = 2
// let myDiv = divide(dividend, divisor)
//I think I will revisit this


/**
 * And today nothing better than some vim
 *  a- insert text after cursor position
 * A- insert text at the end of the line
 * o- open new line below cursor
 * O- Open new line above cursor 
 * s- substitute a single character
 * S- substitute entire line
 * cc- change whole line * C- change text from the current cursor position
 * J- join two lines
 * 0- move cursor to the beginning of the current line.
 * $- move cursor to the end of the current line.
 * ctrl+f - scroll down entire page
 * ctrl+b - scroll up entire page 
 * ngg- jump to the nth line
 * :o- jump to the start of file
 * :$- jump to the end of the file
 * w- move cursor to the end of the next word
 * e- move cursor to the end of the current word 
 * b- move cursor to the beginning of the previous word
 * yy- copies entire line
 * dd- deletes entire line
 * D- deletes entire line from cursor position
 * dw- deletes word from cursor position
 * u-undo changes
 * p- pastes copied line after cursor position 
 */