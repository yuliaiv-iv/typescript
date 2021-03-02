// Types
// passing arguments into function 
function addNumbers(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase, num1 + num2);
    }
    else {
        throw new Error('Cannot sum');
    }
}
var number1 = 5; //cannot be string / error
var number2 = 2.5;
var printResult = true;
var showPhrase = 'The sum is';
addNumbers(number1, number2, printResult, showPhrase);
//Arrays, type can be flexible or strict
var person = {
    name: "Alex",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"] // array with exact 2 elements => role: (string | number)[]
};
var activity; // would be an array of strings
activity = ["Hiking"]; // cannot add a number inside
var activity2;
activity2 = ["Hiking", 2]; // accepts all types
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // can use singe TS detects a string
}
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // our own custom type (ADMIN is enum member = 0)
//enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // can asign an start number
var person2 = {
    name: "Max",
    age: 35,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
if (person2.role === Role.AUTHOR) {
    console.log('it is');
}
