// 5 variables of different types
// string
//number
// array
// boolean
// object (4 different key/value pairs) [string], [number], [array], [boolean]


let string = "This is a string";
console.log(string);

let number = 5;
console.log(number);

let array = [5,6,7,8,9];
console.log(array);

let something = true;
console.log(number);

let object = {
    car: 'chevrolet',
    make: 'silverado',
    year: '2016',
}
console.log(object);

function printStuff(){
    let name = 'Steven';
}

// make 10 different functions
// one of your function need to pass in an array
// one of your functions need to pass in a callback
// ....string
// ....object
// ....boolean
// ....freestyle

// i need help with this I'm going to get some help after class

function displayCoolBikes(array) {
    let result = [];

    for (let i =0; i < array.length; i++){

    let bike = array[i];

    if (bike.length > 7){
        result.push(bike);

    }

    }
}

// return result;

// }

// // // console.log(displayCoolBikes(motorcycles));

// // function removeSentence(string){
// //     let result = ;
// // }

// // removeFromArray(displayCoolBikes, motorcycles);

const sectionOne = document.getElementById('section-one')
console.log(sectionOne);

const sectionTwo = document.getElementById('section-two')
console.log(sectionTwo);

const sectionThree = document.getElementById('section-three')
console.log(sectionThree);

const sectionFour = document.getElementById('section-four')
console.log(sectionFour);

const sectionFive = document.getElementById('section-five')
console.log(sectionFive);

sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Warriors';
sectionThree.textContent = 'Celtics';
sectionFour.textContent = 'Nets';
sectionFive.textContent = 'Blazers';


const paraOne = document.querySelector('.paragraph-one');
console.log(paraOne);
paraOne.textContent = 'Lebron James';

paraTwo = document.querySelector('.paragraph-two');
console.log(paraTwo);
paraTwo.textContent = 'Steph Curry'

const paraThree = document.querySelector('.paragraph-three');
console.log(paraThree);
paraThree.textContent = 'Kemba Walker';

const paraFour = document.querySelector('.paragraph-four');
console.log(paraFour);
paraFour.textContent = 'Kyrie Irving';

const paraFive = document.querySelector('.paragraph-five');
console.log(paraFive);
paraFive.textContent = 'Damien Lillard';



