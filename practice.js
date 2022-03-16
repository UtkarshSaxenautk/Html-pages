var a = 9 ;
var b = 19 ;
var br = "<br>";
var c = ++a ;
console.log(a *b);
document.write( a + b );
document.write(br);
document.write( a++);
document.write(br);
document.write(a);
document.write(br);
let m1 = prompt("marks in 1st : ");
let m2 = prompt("marks in 2nd : ");
let m3 = prompt("marks in 3rd : ");

let M1 = parseInt(m1);
let M2 = parseInt(m2);
let M3 = parseInt(m3);

document.write(  M1 + M2 );
document.write(br);
document.write( M1 - M2 );
function getvalue()
{
let a = prompt("Enter value :......... ");
return a ;
}
let sum = 0 ;
var numbers = new Array(5);
for( i = 0 ; i < 5 ; i++)
{
    let temp = parseInt(getvalue());
    numbers[i] = temp ;
    sum += temp ;
}
document.write(br);
document.write("Sum be like : " + sum + " .");
document.write(br);

document.write("<select name = 'boards'>");
document.write("<option>")
for(i = 0 ; i < 5 ; i++)
{
  document.write("<option>")
  document.write( numbers[i] );
  document.write("</option>")
//document.write(t);
}
document.write("</select>");