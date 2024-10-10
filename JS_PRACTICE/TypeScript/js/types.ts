const str: string = '11111'

const myNumber: number = 11
const myFloatNumber: number = 11.11

const booleanTrue: boolean = true
const booleanFalse: boolean = false

const myNumberArray: number[] = [1, 1, 2, 3, 5]
const myNumberArray2: Array<number> = [1, 1, 2, 3, 5]
const myStringArray: string[] = ['one', 'two', 'three']

//Tuple
const mixArray: [number, string] = [12, 'one']

// Any
let mixData: any = 'one'
mixData = 11
mixData = [11, 'hello']

function myName(name: string):void{
    console.log(`my name ${name}`)
}
myName('Hope');

//Type
type Login = string
const myLogin: Login = 'admin'
//const myLogin2: Login = 123
type ID = string | number
const myId: ID = 12345
const myId2: ID = '12345'
//const myId3: ID = true

