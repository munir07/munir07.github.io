// Start writing JS script here
//alert("welcome to class")
var student = "Muneer";
var student_1 = "sakeenah";
var student_2 = "sofiyyah";

var welcome_msg = "Hi. " + student_1 + " and " + student_2 + " are best friends";
console.log(welcome_msg)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function sayHi (name) {
    var hiMsg = "Hi " + name
    console.log(hiMsg)
}

sayHi(student_1)
sayHi(student_2)

function join2str( str1, str2) {
   var retStr = str1 + str2
   return retStr
}

console.log(join2str(student_1,student_2))

function strPlay (str1, str2) {
   var retStr = capitalizeFirstLetter(str1) + " " + capitalizeFirstLetter(str1) + 
                " | " + capitalizeFirstLetter(str2) + " " + capitalizeFirstLetter(str2)
   return retStr  
}

console.log(strPlay(student_1, student_2))