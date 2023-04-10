let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number
switch(a){     
case
0:
   alert("Welcome")
   break;
 
case
1:
   alert("1")
   break;     
case (2 || 3):{
  alert( '2, 3' );
}
}

let number =prompt("число?");

if(number==1){
    alert("это один")
}
else if(a%2==0){
    alert("это четное")
}

let sum =0;
for (let i = 0; i <= 100; i++) {
    if(i%2===0)
        sum+=i;
  }
console.log(sum);  

let k = 0;
while ( k < 3) {
    alert( `number ${k}!` );
    k++;
  }