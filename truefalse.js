//falsy
// "" = empty string condition is falsy
// 0 = zero in condition is falsy
// undefined = if you don't define any thing its falsy in condition
// null = null in falsy in condition
// NaN = Not A Number(NaN) is falsy in condition
//false = false is falsy in condition

//truthy
// " " = empty string is truthy in condition
// "0" = zero inside of a string("0") is truthy in condition
// [] = an array is truthy in condition
// {} = an object with out a property is truthy in condition
// true = true is truthy in condition
// "false" = false inside of string is truthy
// anything inside of string("") = with out empty string a string with something inside truthy 

let name = "false";
if (name || name == 0) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}